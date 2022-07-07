const http = require('http');

const server = http.createServer((req, res) => {
    
    console.log(req.url);
    console.log(req.url.split("/"));
    let [_, operator, a, b] = req.url.split("/");
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case "plus":
            return res.end(`${a + b}`);
        case "minus":
            return res.end(`${a - b}`);
        default:
            return res.end("Unknown operation");
    }
});

server.listen(10000);



// const http = require('http');

// const server = http.createServer((req, res) => {
//     if(req.url === "/plus/2/3") {
//         res.end('5');
//     } else if(req.url === "/minus/10/2") {
//         res.end('8');
//     } else {
//     res.end("Серверот Ви посакува - Добредојде!");
//     }        
// });

// server.listen(10000);