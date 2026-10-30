import { GoogleGenAI, Type } from '@google/genai';
import { readFile, writtingInFile, appendContent, Isexits, deleteFile, createNewFolder, readFolder } from "./fileSystem.js"
import fs, { write } from "fs"
import readlineSync from "readline-sync"
import 'dotenv/config'
import { tools } from "./fnInfo.js"
const system_instruction = `You are a **Senior Software Engineer and Autonomous AI Coding Agent**. Your job is to analyze, debug, fix, develop, and secure software projects using available tools.

## 1. Understand the Request
First, identify whether the user wants bug fixing, code analysis, feature development, refactoring, security review, or a new project. Understand the requirements and constraints before taking action.

## 2. Inspect the Project
- List project files and folders before modifying anything.
- Read 'package.json', configuration files, README, entry points, and relevant source files.
- Follow imports, function calls, routes, models, and dependencies to understand the code flow.
- Skip 'node_modules', '.git', build outputs, and caches unless relevant.
- Inspect only necessary files, expanding the investigation when needed.

## 3. Fix Existing Projects
1. Identify the root cause using code, logs, and errors.
2. Determine which files require changes.
3. Apply minimal, targeted fixes.
4. Preserve the existing UI, styling, architecture, APIs, and working functionality unless changes are requested or necessary.
5. Avoid unnecessary dependencies, refactoring, or unrelated modifications.
6. Verify changes by running relevant tests, linting, or builds when possible.

## 4. Create New Projects
When asked to build a website or application:
1. Understand the requirements and choose a suitable architecture.
2. Create a meaningful project folder and organized file structure.
3. Implement complete, functional frontend and backend code.
4. Ensure imports, APIs, database schemas, and integrations work together.
5. Add appropriate error handling, validation, and security.
6. Create a README with accurate installation, configuration, and execution instructions.
7. Add '.gitignore and ".env.example" when appropriate.
8. Create a LICENSE only when the user specifies or approves the licensing choice.
9. Run available tests and builds, fixing errors where possible.

## 5. Security
Use secure password hashing, appropriate authentication, server-side authorization, input validation, rate limiting, safe database queries, restricted CORS, and secure cookie/token handling where applicable. Never hardcode secrets or expose credentials. Validate resource ownership and protect sensitive operations.

## 6. Tool Execution
- Use only relevant available functions.
- Pass correct arguments and inspect every important result.
- Complete dependent operations in order; verify a step before relying on it.
- Handle failures intelligently and retry when appropriate.
- Never claim an operation succeeded without verification.
- Avoid redundant calls and unnecessary file reads.
- Do not perform destructive actions without appropriate authorization.

## 7. Documentation
Inspect README and LICENSE files when relevant. Update missing or incorrect documentation without inventing features, commands, or endpoints. Preserve existing licensing unless authorized to change it.

## 8. Final Response
Briefly report the root cause or features implemented, files changed, tests performed, and remaining issues. Be honest about anything untested or incomplete.

**Core rule:** Understand first, inspect relevant files, plan, execute tools correctly, make minimal changes, verify results, and preserve the user's requirements and existing UI.
`;
const ai = new GoogleGenAI({});

//this is retrun current folde path
const current_folder = process.cwd()
// console.log(tools[0])
let history = [];




const availableFunctions = {
    readFile: async ({ path }) => readFile(path),

    writtingInFile: async ({ path, content }) =>
        writtingInFile(path, content),

    appendContent: async ({ path, content }) =>
        appendContent(path, content),

    Isexits: async ({ path }) => Isexits(path),

    deleteFile: async ({ path }) => deleteFile(path),

    createNewFolder: async ({ path }) => createNewFolder(path),

    readFolder: async ({ path }) => readFolder(path)
};


// Safely convert Gemini arguments into a JavaScript object
const parseArguments = (args) => {
    if (typeof args === "string") {
        return JSON.parse(args);
    }

    return args || {};
};


const main = async (prompt) => {
    try {
        console.log("\n AI Agent Started...\n");

        // Add user prompt to history
        history.push({
            type: "user_input",
            content: [
                {
                    type: "text",
                    text: `${prompt}\nCurrent folder path: ${current_folder}`
                }
            ]
        });

        let interaction;
        const MAX_ITERATIONS = 20;

        for (let i = 0; i < MAX_ITERATIONS; i++) {

            console.log(`\n AI Thinking...... (${i + 1})`);

            // Send complete conversation history
            interaction = await ai.interactions.create({
                model: "gemini-3.8-flash",
                input: history,
                tools,
                system_instruction,
                store: false
            });

            // Preserve ALL model-generated steps
            const steps = interaction.steps || [];
            history.push(...steps);

            // Get all function calls
            const functionCalls = steps.filter(
                step => step.type === "function_call"
            );

            // If no function calls, AI has completed its response
            if (functionCalls.length === 0) {

                const response = interaction.output_text ||
                    steps
                        .filter(step => step.type === "model_output")
                        .flatMap(step => step.content || [])
                        .filter(item => item.type === "text")
                        .map(item => item.text)
                        .join("\n");

                console.log("\n✅ AI Final Response:\n");
                console.log(response || "Task completed.");

                return response;
            }

            // Execute every requested function
            for (const call of functionCalls) {

                console.log(`\nExecuting: ${call.name}`);
                console.log("Arguments:", call.arguments);

                let result;

                try {
                    const fn = availableFunctions[call.name];

                    if (!fn) {
                        throw new Error(
                            `Function '${call.name}' is not available.`
                        );
                    }

                    const args = parseArguments(call.arguments);

                    // Execute with correctly mapped named arguments
                    result = await fn(args);

                    console.log(` ${call.name} completed`);

                } catch (error) {

                    console.error(
                        `❌ ${call.name} failed:`,
                        error.message
                    );

                    result = {
                        success: false,
                        error: error.message
                    };
                }

                // Return function result to Gemini
                const functionResult = {
                    type: "function_result",
                    name: call.name,
                    call_id: call.id,
                    result: [
                        {
                            type: "text",
                            text: JSON.stringify(result ?? null)
                        }
                    ]
                };

                history.push(functionResult);
            }
        }

        console.log("\n Maximum iterations reached.");
        return "Agent stopped because the maximum iteration limit was reached.";

    } catch (error) {

        console.error("\nAI Agent Error:", error.message);
        return null;
    }
};



main("check why my calculator code is not working fix bugs  ")