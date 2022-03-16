// this gives us the informaton of our env and os

const os =  require('os');

// plartform
console.log(os.platform());

// cpu Arch
console.log(os.arch());

// CPU core Info
console.log(os.cpus());

// free memory
console.log(os.freemem());

// total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// uptime --> no of seconds your system has been running
console.log(os.uptime());