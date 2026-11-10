import fs from "fs"  //   removed unused `write`


// READ FILE
const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(`error from read file: ${err.message}`)
                return
            }
            resolve(data)  //   returns data
        })
    })
}


// WRITE FILE
const writtingInFile = (path, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, 'utf8', (err) => {
            if (err) {
                reject(`error from writing file: ${err.message}`)  //   async error handled
                return
            }
            resolve("file written successfully!")
        })
    })
}


// APPEND CONTENT
const appendContent = (path, content) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, content, 'utf8', (err) => {
            if (err) {
                reject(`error from append: ${err.message}`)  //   error handled
                return
            }
            resolve("content appended successfully!")
        })
    })
}


// CHECK IF FILE EXISTS
const Isexits = (path) => {
    return new Promise((resolve) => {
        fs.access(path, fs.constants.F_OK, (err) => {
            if (err) {
                resolve(false)  //   returns false, not just console.log
            } else {
                resolve(true)   //   returns true
            }
        })
    })
}


// DELETE FILE
const deleteFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.unlink(path, (err) => {
            if (err) {
                reject(`error from delete: ${err.message}`)  //   error handled
                return
            }
            resolve("file deleted successfully!")
        })
    })
}


// CREATE NEW FOLDER
const createNewFolder = (path) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(path, (err) => {
            if (err) {
                reject(`error from create folder: ${err.message}`)  //   error handled
                return
            }
            resolve("folder created successfully!")
        })
    })
}


// READ FOLDER
const readFolder = (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, { withFileTypes: true }, (err, items) => {
            if (err) {
                reject(err)
                return
            }

            const result = {
                folders: [],
                files: []
            }

            items.forEach(item => {
                if (item.isDirectory()) {
                    result.folders.push(item.name)
                } else {
                    result.files.push(item.name)
                }
            })

            resolve(result)  //   removed extra console.log
        })
    })
}


export { readFile, writtingInFile, appendContent, Isexits, deleteFile, createNewFolder, readFolder }