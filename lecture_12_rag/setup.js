// setup-index.js
import "dotenv/config";
import { Pinecone } from "@pinecone-database/pinecone";

async function createIndex() {
  const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

  const indexName = process.env.PINECONE_INDEX_NAME;

  // Delete old index if it exists
  try {
    const existing = await pinecone.describeIndex(indexName);
    if (existing) {
      console.log(`🗑️  Deleting old index "${indexName}"...`);
      await pinecone.deleteIndex(indexName);
      // Wait for deletion
      await new Promise((r) => setTimeout(r, 10000));
      console.log("  Old index deleted");
    }
  } catch (e) {
    console.log("ℹ️  No existing index found, creating fresh...");
  }

  //   Create CLASSIC vector index — dimension + metric + spec = no document schema
  console.log(`\n📦 Creating classic vector index "${indexName}"...`);
  await pinecone.createIndex({
    name: indexName,
    dimension: 3072,          // gemini-embedding-001 dimensions
    metric: "cosine",
    spec: {
      serverless: {
        cloud: "aws",
        region: "us-east-1",
      },
    },
    waitUntilReady: true,     //   waits until index is ready to use
    suppressConflicts: true,
  });

  // Confirm it's the right type
  const info = await pinecone.describeIndex(indexName);
  console.log("\n  Index created successfully!");
  console.log(`   Name      : ${info.name}`);
  console.log(`   Host      : ${info.host}`);
  console.log(`   Dimension : ${info.dimension}`);
  console.log(`   Metric    : ${info.metric}`);
  console.log(`   Status    : ${info.status?.state}`);
}

createIndex().catch(console.error);