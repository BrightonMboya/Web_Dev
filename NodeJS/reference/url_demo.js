const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// serialiezed url
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// HostName (does not get port)
console.log(myUrl.hostname);

// pathName
console.log(myUrl.pathname);

// serialized queries
console.log(myUrl.search);

// params object
console.log(myUrl.searchParams);

// add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// loop thrugh the params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));