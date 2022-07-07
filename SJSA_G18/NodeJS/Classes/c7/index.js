const http = require('http');
const fs = require('fs');

const pages = {
    '/': async (req, res) => {
        console.log(req.query);
        let content = await FileReader('./index.html')
        res.end(content);
    },
    '/home': (req, res) => {
        res.end('HOME2!');
    },
    '/users': (req, res) => {
        res.end('USERS!');
    }
};

const server = http.createServer((req, res) => {
    if(pages[req.url]) {
    pages[req.url] (req, res);
    } else {
        res.end('');
    }
});

server.listen(8080);