const fs = require('fs');
const path = require('path');

// create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log("Folder created ...");
// });

// // create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log("File written to ...");

//     // File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node JS!', err => {
//         if (err) throw err;
//         console.log("File written to ...");
//     });
// });

// reading a file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloMama.txt'), err => {
    if (err) throw err;
    console.log("File Renamed");
});