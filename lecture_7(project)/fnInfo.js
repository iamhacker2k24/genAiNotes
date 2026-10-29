import { GoogleGenAI, Type } from '@google/genai';
const readFileInfo = {
    type: "function",
    name: "readFile",
    description: "this is a function who read a file based on given file path ",
    parameters: {
        type: Type.OBJECT,
        properties: {
            type: Type.STRING,
            description: "it is the file path that you want to read"
        }
    },
    required: ["path"]
}

const writtingInfo = {
    type: "function",
    name: "writtingInFile",
    description: "this function writes content in a file based on given file path",
    parameters: {
        type: Type.OBJECT,
        properties: {
            path: {                          //  first parameter
                type: Type.STRING,
                description: "the file path where you want to write"
            },
            content: {                       //  second parameter
                type: Type.STRING,
                description: "the content you want to write in the file"
            }
        },
        required: ["path", "content"]      //  both are required
    }
}

const appendInfo = {
    type: "function",
    name: "appendContent",
    description: "this function append  content in a file based on given file path",
    parameters: {
        type: Type.OBJECT,
        properties: {
            path: {                          //  first parameter
                type: Type.STRING,
                description: "the file path where you want to append"
            },
            content: {                       //  second parameter
                type: Type.STRING,
                description: "the content you want to append in the file"
            }
        },
        required: ["path", "content"]      //  both are required
    }
}

const exitInfo = {
    type: "function",
    name: "Isexits",
    description: "this function , check if a file exits or not based on given path",
    parameters: {
        type: Type.OBJECT,
        properties: {
            path: {                          //  first parameter
                type: Type.STRING,
                description: "the file path whom you want to check exits or not "
            }
        },
        required: ["path"]      //  both are required
    }
}


const deleteInfo = {
    type: "function",
    name: "deleteFile",
    description: "this function , delete a file based on given path",
    parameters: {
        type: Type.OBJECT,
        properties: {
            path: {                          //  first parameter
                type: Type.STRING,
                description: "the file path whom you want delete"
            }
        },
        required: ["path"]      //  both are required
    }
}

const createNewFolderInfo = {
    type: "function",
    name: "createNewFolder",
    description: "this function ,create a new folder based on given path",
    parameters: {
        type: Type.OBJECT,
        properties: {
            path: {                          //  first parameter
                type: Type.STRING,
                description: "the path where  you want to cretea folder"
            }
        },
        required: ["path"]      //  both are required
    }
}

const readFolderInfo = {
    type: "function",
    name: "readFolder",
    description: "this function ,give all inside file and folder information",
    parameters: {
        type: Type.OBJECT,
        properties: {
            path: {                          //  first parameter
                type: Type.STRING,
                description: "the path of folder ,whose you want to read all info "
            }
        },
        required: ["path"]      //  both are required
    }
}

export const tools = [
    readFileInfo,
    writtingInfo,
    appendInfo,
    exitInfo,
    deleteInfo,
    createNewFolderInfo,
    readFolderInfo
];