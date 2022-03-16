const http = require('http');

// create server object
http.createServer((req, res) => {
    // write reponse
    res.write('Hello World');
    res.end()
}).listen(5000, () => console.log('Server running ...'))