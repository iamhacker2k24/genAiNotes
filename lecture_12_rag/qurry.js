import "dotenv/config";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { Pinecone } from "@pinecone-database/pinecone";
import readline from "readline";

// ── 1. Setup Models + Pinecone ────────────────────────────────
const embedModel = new GoogleGenerativeAIEmbeddings({
  apiKey: process.env.GOOGLE_API_KEY,
  model:  "gemini-embedding-001",
});

const llm = new ChatGoogleGenerativeAI({
  apiKey:      process.env.GOOGLE_API_KEY,
  model:       "gemini-3.5-flash",
  temperature: 0.3,
});

const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

// ── 2. Chat History Array ─────────────────────────────────────
// Stores full conversation so Gemini remembers context
const chatHistory = [];

// ── 3. Search Pinecone ────────────────────────────────────────
async function searchPinecone(question, HOST) {
  const questionVector = await embedModel.embedQuery(question);

  const res = await fetch(`https://${HOST}/query`, {
    method:  "POST",
    headers: {
      "Api-Key":      process.env.PINECONE_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      vector:          questionVector,
      topK:            5,
      includeMetadata: true,
      namespace:       "",
    }),
  });

  if (!res.ok) throw new Error(`❌ Pinecone query failed: ${await res.text()}`);

  const data = await res.json();
  return data.matches ?? [];
}

// ── 4. Ask Gemini WITH history ────────────────────────────────
async function askGemini(question, matches) {
  if (matches.length === 0) {
    return "❌ No relevant content found in the PDF for this question.";
  }

  // Build PDF context from pinecone results
  const context = matches
    .map((m) => `[Page ${m.metadata?.page ?? "?"}]:\n${m.metadata?.text}`)
    .join("\n\n─────────────\n\n");

  // ✅ Build history string for Gemini
  const historyText = chatHistory.length > 0
    ? chatHistory
        .map((h) => `${h.role === "user" ? "User" : "Assistant"}: ${h.content}`)
        .join("\n")
    : "No previous conversation.";

  // ✅ Prompt includes history + context + new question
  const prompt = `You are a helpful assistant answering questions about a PDF document.
Use the PDF context below to answer. If answer is not in context, say "This is not covered in the document."

━━━━━━━━━━━━━━━━━━━━━━
CHAT HISTORY:
${historyText}
━━━━━━━━━━━━━━━━━━━━━━
PDF CONTEXT:
${context}
━━━━━━━━━━━━━━━━━━━━━━
NEW QUESTION: ${question}

Answer:`;

  const response = await llm.invoke(prompt);
  return response.content;
}

// ── 5. Single Question Flow ───────────────────────────────────
async function askQuestion(question, HOST) {
  console.log(`\n❓ You: ${question}`);
  console.log("🔍 Searching PDF...");

  const matches = await searchPinecone(question, HOST);

  // Show pages found
  console.log(`📚 Found ${matches.length} chunks:`);
  matches.forEach((m, i) => {
    console.log(`   ${i + 1}. Page ${m.metadata?.page ?? "?"} — score: ${m.score?.toFixed(3)}`);
  });

  console.log("🤖 Thinking...\n");
  const answer = await askGemini(question, matches);

  // ✅ Save question + answer to history
  chatHistory.push({ role: "user",      content: question });
  chatHistory.push({ role: "assistant", content: answer   });

  // ✅ Keep only last 10 exchanges (20 messages) to avoid token limit
  if (chatHistory.length > 20) {
    chatHistory.splice(0, 2); // remove oldest Q+A pair
  }

  console.log("─".repeat(50));
  console.log(`🤖 Assistant: ${answer}`);
  console.log("─".repeat(50));

  return answer;
}

// ── 6. Show History Command ───────────────────────────────────
function showHistory() {
  if (chatHistory.length === 0) {
    console.log("\n📭 No chat history yet.");
    return;
  }

  console.log("\n📜 Chat History:");
  console.log("═".repeat(50));
  chatHistory.forEach((h, i) => {
    const label = h.role === "user" ? "💬 You" : "🤖 Bot";
    console.log(`\n${label}: ${h.content}`);
  });
  console.log("═".repeat(50));
}

// ── 7. Clear History Command ──────────────────────────────────
function clearHistory() {
  chatHistory.length = 0;
  console.log("\n🗑️  Chat history cleared!");
}

// ── 8. Interactive Chat Loop ──────────────────────────────────
async function startChat() {

  if (!process.env.PINECONE_API_KEY || !process.env.PINECONE_INDEX_NAME || !process.env.GOOGLE_API_KEY) {
    throw new Error("❌ Missing environment variables!");
  }

  const info = await pinecone.describeIndex(process.env.PINECONE_INDEX_NAME);
  const HOST = info.host;

  console.log("═".repeat(50));
  console.log("🤖 PDF Chat Bot with Memory!");
  console.log(`📌 Index : ${process.env.PINECONE_INDEX_NAME}`);
  console.log("─".repeat(50));
  console.log("💡 Commands:");
  console.log("   'history' → show chat history");
  console.log("   'clear'   → clear chat history");
  console.log("   'exit'    → quit");
  console.log("═".repeat(50));

  const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout,
  });

  const askUser = () => {
    rl.question("\n💬 You: ", async (input) => {
      input = input.trim();

      if (!input) {
        askUser();
        return;
      }

      // ── Commands ─────────────────────────────────────────────
      if (input.toLowerCase() === "exit") {
        console.log("\n👋 Bye!");
        rl.close();
        return;
      }

      if (input.toLowerCase() === "history") {
        showHistory();
        askUser();
        return;
      }

      if (input.toLowerCase() === "clear") {
        clearHistory();
        askUser();
        return;
      }

      // ── Normal Question ───────────────────────────────────────
      try {
        await askQuestion(input, HOST);
      } catch (err) {
        console.error(`\n❌ Error: ${err.message}`);
      }

      askUser();
    });
  };

  askUser();
}

startChat().catch(console.error);