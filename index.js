const path = require("path");
const fs = require("fs");

const fileDirectory = path.join(__dirname, "files");

const filesArr = fs.readdirSync(fileDirectory);
// Iterating on each files which is present in "files" folder
filesArr.forEach((element) => {
     const allFilesPath = path.join(__dirname, "files", element);
     fs.unlinkSync(allFilesPath);
});