const path = require('path');

// Base file name
console.log(path.basename(__filename)); 

// Directory name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

// concatanate paths
// lets say you want to join your current dir with a folder called test with a file hello.html
console.log(path.join(__dirname, 'test', 'hello.html'))