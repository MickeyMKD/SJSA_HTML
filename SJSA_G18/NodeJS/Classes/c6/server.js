const http = require('http');

const server = http.createServer((req, res) => {
    console.log('server test');
    // console.log(req);
    console.log(req.url);
    console.log(req.method);
    res.end('здраво од серверот!'); // испрати одговор и затвори го повикот
});

server.listen(8080);

/*
192.168.1.20 - IP Address (Internet Protocol Address)
0.0.0.0 - 255.255.255.255 // A, B, C, D klasi na IP adresi
IPv4 / IPv6

Provider -->-- Router -->-- Computer
                       NAT (Network Address Translation)


port 80 - HTTP
port 443 - HTTPS

wikipedia.org raboti na default port 80 i 443
http://wikipedia.org
https://wikipedia.org

lokalen servis (server) raboti na nestandardna porta 10000
http://localhost:10000


default ports
    - web server application: 80, 443
    - ftp server application: 21
    - ssh server application: 22
    - smpt server application: 25
    - proxy server application: 8080
    - ...


server - kompjuter povrzan na internet
server application / service - aplikacija koja e postavena na server (i raboti na sopstvena porta)

--------------------------------------------

req - request - povikot od klient prema server
res - response - odgovorot shto serverot go isprakja prema klientot

localhost - 127.0.0.1
*/


// Домашно

/*
ако некој внесе и отвори URL
http://localhost:10000/plus/2/3 (req.url)
сакам да ми врати резултат 5 (res.end)

ако некој внесе
http://localhost:10000/minus/10/2
сакам да врати 8 (res.end)
*/