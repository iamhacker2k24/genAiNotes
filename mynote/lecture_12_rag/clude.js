import "dotenv/config";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { Pinecone } from "@pinecone-database/pinecone";

async function ingestPDF() {

  if (!process.env.PINECONE_API_KEY || !process.env.PINECONE_INDEX_NAME || !process.env.GOOGLE_API_KEY) {
    throw new Error("❌ Missing environment variables!");
  }
  //  1. Load PDF 
  console.log("📄 Loading PDF...");
  const loader = new PDFLoader("./Node.pdf");
  const docs = await loader.load();
  console.log(`  Pages loaded: ${docs.length}`);
  //  2. Split 
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 6000,
    chunkOverlap: 300,
  });
  const splitDocs = await splitter.splitDocuments(docs);
  const cleanDocs = splitDocs.filter((d) => d.pageContent?.trim().length > 20);
  console.log(`  Total clean chunks: ${cleanDocs.length}`);

  //  3. Embed ALL chunks at once (paid plan = no limit) 
  console.log("\n🔄 Embedding all chunks...");
  const embedModel = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GOOGLE_API_KEY,
    model: "gemini-embedding-001",
  });

  const texts = cleanDocs.map((d) => d.pageContent);
  const vectors = await embedModel.embedDocuments(texts);  //   all at once

  console.log(`  Got ${vectors.length} embeddings`);
  console.log(`  Dimensions: ${vectors[0].length}`);

  //  4. Validate ALL vectors 
  const badVectors = vectors
    .map((v, i) => ({ i, len: v?.length ?? 0 }))
    .filter((x) => x.len !== 3072);

  if (badVectors.length > 0) {
    console.log(`\n⚠️  Bad vectors found:`);
    badVectors.forEach((b) => console.log(`   chunk-${b.i}: dim=${b.len}`));
  } else {
    console.log(`  All vectors valid!`);
  }

  //  5. Build ALL records 

  const allRecords = cleanDocs
    .map((doc, i) => {
      const page = doc.metadata?.loc?.pageNumber ?? doc.metadata?.page ?? 0;
      return {
        id: `chunk-${i}`,
        values: vectors[i],
        metadata: {
          text: doc.pageContent,
          source: String(doc.metadata?.source ?? "pdf"),
          page: Number(page),
        },
      };
    })
    .filter((r) => r.values?.length === 3072); // only valid vectors

  console.log(`\n📦 Records ready to upload: ${allRecords.length}`);

  //  6. Connect Pinecone 
  const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const info = await pinecone.describeIndex(process.env.PINECONE_INDEX_NAME);
  const HOST = info.host;
  console.log(`📌 Pinecone host: ${HOST}\n`);

  //  7. Upsert in batches of 100 ─
  const BATCH_SIZE = 100;
  let uploadedTotal = 0;

  for (let i = 0; i < allRecords.length; i += BATCH_SIZE) {
    const batch = allRecords.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const total = Math.ceil(allRecords.length / BATCH_SIZE);

    console.log(`  📦 Batch ${batchNum}/${total} — upserting ${batch.length} records...`);

    const res = await fetch(`https://${HOST}/vectors/upsert`, {
      method: "POST",
      headers: {
        "Api-Key": process.env.PINECONE_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ vectors: batch, namespace: "" }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`❌ Pinecone upsert failed: ${errText}`);
    }

    const result = await res.json();
    uploadedTotal += result.upsertedCount ?? batch.length;
    console.log(`    Batch ${batchNum} done — total: ${uploadedTotal}/${allRecords.length}`);
  }

  //  8. Final Report ─
  console.log("\n" + "═".repeat(50));
  console.log(`📊 PDF pages      : ${docs.length}`);
  console.log(`📊 Total chunks   : ${cleanDocs.length}`);
  console.log(`📊 Valid vectors  : ${allRecords.length}`);
  console.log(`📊 Uploaded       : ${uploadedTotal}`);

  if (uploadedTotal === allRecords.length) {
    console.log(`\n🎉 ALL chunks uploaded to Pinecone successfully!`);
  } else {
    console.log(`\n⚠️  Missing: ${allRecords.length - uploadedTotal} chunks`);
  }
}

ingestPDF().catch(console.error);