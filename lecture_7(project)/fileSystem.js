import fs, { write } from "fs"


// this function ffor read any file ok
const readFile = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf8')
        console.log(data)

    } catch (error) {
        console.log(`error form read file ok ${error.message}`)
    }
}

// readFile("./hello.txt") // read amy file


// now function for write any file 
const writtingInFile = (path, content) => {
    try {
        fs.writeFile(path, content, 'utf8', (err) => {
            if (err) throw err;
            // console.log('File written!');
        });
    } catch (error) {
        console.log(`error from writting in a file ${error.message} `)
    }

}

// writtingInFile('./hello2.txt', 'Hello World!')

//this function for appent content in file .ok 
const appendContent = (path, content) => {
    fs.appendFile(path, content, (err) => { if (err) throw err; });
}
// appendContent('./log.txt', 'new line\n')


// now this function for checking if a file exits or not 
const Isexits = (path) => {

    fs.access(path, fs.constants.F_OK, (err) => {
        if (err) console.log('File does NOT exist');
        else console.log('File exists!');
    });

}

// Isexits('./notes.txt')

//this function is for deleting any file 

const deleteFile = (path) => {
    fs.unlink(path, (err) => {
        if (err) throw err;
        console.log('Deleted!');
    });
}
// deleteFile('./log.txt')

//  cretae a new Folder 

const createNewFolder = (path) => {
    fs.mkdir(path, (err) => {
        if (err) throw err;
        console.log('File created !');
    });

}
// createNewFolder('./myFo55lder')



// this will help us what inside a folder 
const readFolder = (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, { withFileTypes: true }, (err, items) => {

            if (err) {
                reject(err)   //  something went wrong
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
            console.log(result)
            resolve(result)   // return the result
        })
    })
}
// readFolder('../');


export { readFile, writtingInFile, appendContent, Isexits, deleteFile, createNewFolder, readFolder }


