const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/plus/2/3") {
        res.end('5');
    } else if(req.url === "/minus/10/2") {
        res.end('8');
    } else {
    res.end("Серверот Ви посакува - Добредојде!");
    }        
});

server.listen(10000);