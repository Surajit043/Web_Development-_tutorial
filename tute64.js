// this is the way to import module 
// here i imort fs modeule ---> and this is the frame to importn any module in JavaScript 
const fs = require ("fs");
const { fileURLToPath } = require("url");
const { format } = require("path");
// This is the way to say js to read any file Syncronously
// formate --> let <choose a veriable that you want to use> = fs.readFileSync("(path: string | number | Buffer | URL","<encoding>")
let txt = fs.readFileSync("index.html","utf-8");
// If we want to replace any content in the fileURLToPath, then we can use thois format 
// format--> <file name inside that i want to chnge>=<file name>.replace ("contant that i want to remove","content that want to replace");
txt = txt.replace('this','That')
console.log(txt)
// we can also write any file by creating new file | Format example is shown below 
fs.writeFileSync("surajit.txt",txt)
console.log ("this is a new file")
console.log(txt)

