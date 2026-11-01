import "dotenv/config";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { Pinecone } from "@pinecone-database/pinecone";

// ✅ Retry helper — retries a function up to maxRetries times
async function withRetry(fn, maxRetries = 3, delayMs = 3000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await fn();
      // ✅ Check if result is valid (not empty)
      if (Array.isArray(result) && result.length === 0) {
        throw new Error("Empty embedding returned");
      }
      return result;
    } catch (err) {
      console.log(`     ⚠️  Attempt ${attempt} failed: ${err.message}`);
      if (attempt === maxRetries) throw err;
      console.log(`     ⏳ Waiting ${delayMs}ms before retry...`);
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
}

async function ingestPDF() {

  if (!process.env.PINECONE_API_KEY || !process.env.PINECONE_INDEX_NAME || !process.env.GOOGLE_API_KEY) {
    throw new Error("❌ Missing environment variables!");
  }

  // ── 1. Load + Split PDF ──────────────────────────────────────
  console.log("📄 Loading PDF...");
  const loader = new PDFLoader("./Node.pdf");
  const docs = await loader.load();

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });
  const splitDocs = await splitter.splitDocuments(docs);
  const cleanDocs = splitDocs.filter((doc) => doc.pageContent?.trim().length > 20);
  console.log(`✅ Clean chunks: ${cleanDocs.length}`);

  // ── 2. Embeddings ────────────────────────────────────────────
  const embedModel = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GOOGLE_API_KEY,
    model: "gemini-embedding-001",
  });

  // ── 3. Connect Pinecone ──────────────────────────────────────
  const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const indexDescription = await pinecone.describeIndex(process.env.PINECONE_INDEX_NAME);
  const HOST = indexDescription.host;
  console.log(`📌 Index host: ${HOST}\n`);

  // ── 4. Upload chunk by chunk with retry ──────────────────────
  console.log(`⬆️  Uploading ${cleanDocs.length} chunks one by one...\n`);

  const records = [];

  for (let i = 0; i < cleanDocs.length; i++) {
    const doc = cleanDocs[i];

    process.stdout.write(`  [${i + 1}/${cleanDocs.length}] Embedding chunk... `);

    // ✅ Embed ONE chunk at a time with retry
    const vector = await withRetry(
      () => embedModel.embedQuery(doc.pageContent),
      3,    // max 3 retries
      3000  // 3 second wait between retries
    );

    // ✅ Validate dimension
    if (!vector || vector.length !== 3072) {
      console.log(`\n⚠️  Skipping chunk ${i} — bad dimension: ${vector?.length}`);
      continue;
    }

    records.push({
      id: `chunk-${i}`,
      values: vector,
      metadata: {
        text: doc.pageContent,
        source: String(doc.metadata?.source ?? "pdf"),
        page: Number(doc.metadata?.loc?.pageNumber ?? doc.metadata?.page ?? 0),
      },
    });

    process.stdout.write(`✅ dim:${vector.length}\n`);

    // ✅ Small delay every chunk to avoid rate limit
    await new Promise((r) => setTimeout(r, 500));

    // ── Upsert every 50 records ────────────────────────────────
    if (records.length === 50 || i === cleanDocs.length - 1) {
      if (records.length === 0) continue;

      console.log(`\n  📦 Upserting ${records.length} records to Pinecone...`);

      const res = await fetch(`https://${HOST}/vectors/upsert`, {
        method: "POST",
        headers: {
          "Api-Key": process.env.PINECONE_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vectors: records, namespace: "" }),
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(`❌ Pinecone error: ${err}`);
      }

      const result = await res.json();
      console.log(`  ✅ Upserted ${result.upsertedCount} vectors\n`);

      // Clear for next batch
      records.length = 0;

      // Longer pause between upsert batches
      await new Promise((r) => setTimeout(r, 2000));
    }
  }

  console.log("🎉 All done! PDF fully uploaded to Pinecone.");
}

ingestPDF().catch(console.error);