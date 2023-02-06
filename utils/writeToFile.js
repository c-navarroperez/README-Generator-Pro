const fs = require('fs');
const path = require('path');

// Function to write README file
function writeToFile(data, folderPath) {
    const fileName = 'README.md'
        return fs.writeFile(path.join(folderPath, `/${fileName}`), data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`You have successfully created the ${fileName} file`);
            console.log(`The contents of the file are:\n${data}`);
        }
    })
}

module.exports = writeToFile;