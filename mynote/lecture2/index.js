// const { GoogleGenAI } = require("@google/genai");
// require("dotenv").config();
// const ai = new GoogleGenAI({});

// const main = async () => {
//     try {
//         const interaction = await ai.interactions.create({
//             model: "gemini-2.5-flash",
//             input: "Explain how AI works in a few words",
//         });
//         console.log(interaction.output_text);

//     } catch (error) {
//         console.log(error.message)
//     }

// }
// main();



// const { GoogleGenAI } = require("@google/genai");
// require("dotenv").config();
// const ai = new GoogleGenAI({});

// const main = async () => {
//     try {

//         const stream = await ai.interactions.create({
//             model: "gemini-2.5-flash",
//             input: "Count from 1 to 25.",
//             stream: true,
//         });
//         for await (const event of stream) {
//             if (event.event_type === "step.delta") {
//                 if (event.delta.type === "text") {
//                     process.stdout.write(event.delta.text);
//                 }
//             }
//         }
//     } catch (error) {
//         console.log(error.message)
//     }

// }
// main();












const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();
const ai = new GoogleGenAI({});


const main = async () => {
    const history = [
        {
            type: "user_input",
            content: [{ type: "text", text: "My name is Rohit." }],
        },
    ];

    try {
        // First message
        const interaction1 = await ai.interactions.create({
            model: "gemini-3.8-flash",
            system_instruction: "you are a bengali student so talk in bangali no matterr in which lanauge others talking",
            input: history,
            store: false,
        });

        console.log("AI:", interaction1.output_text);

        // Save the model's response and any other returned steps
        history.push(...interaction1.steps);

        // Add the next user message
        history.push({
            type: "user_input",
            content: [{ type: "text", text: "What's my name?" }],
        });

        // Second message with the complete history
        const interaction2 = await ai.interactions.create({
            model: "gemini-3.8-flash",
            system_instruction: "you are a bengali student so talk in bangali no matterr in which lanauge others talking",
            input: history,
            store: false,
        });

        console.log("AI:", interaction2.output_text);

        // Preserve the latest response for another turn
        history.push(...interaction2.steps);

    } catch (error) {
        console.error("Error:", error.message);
    }
};


main();
