const http = require('http');
const fs = require("fs");
// const { RSA_SSLV23_PADDING } = require('constants');
// const { url } = require('inspector');
const hostname = '127.0.0.1';
const port = 3000;

const index = fs.readFileSync("./index.html");
const home = fs.readFileSync("./home.html");
const about = fs.readFileSync("./about.html");
const contact = fs.readFileSync("./contact.html");

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (url == '/') {
        res.end(home);
    }
    else if (url == '/about') {
        res.end(about);
    }
    else if (url == '/contact') {
        res.end(contact);
    }
    else {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>')
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});