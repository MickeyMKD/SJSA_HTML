const http = require('http');
const fs = require('fs');
const url = require('url');

const fileRead = (filename) => {
    return new Promise((success, fail) => { // resolve, reject
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        });
    });
};

const render = async (page, data) => {
    let content = await fileRead(`./${page}.html`);
    return content.replace('{{res}}', data);
};

const pages = {
    '/': async (req, res) => {
        if (req.query.op) console.log(req.query.op);
        if (req.query.a) console.log(req.query.a);
        if (req.query.b) console.log(req.query.b);
        let content = await fileRead('./index.html');
        res.end(content);
    },
    '/home' : (req, res) => {
        res.end('HOME2!');
    },
    '/users': (req, res) => {
        res.end('USERS!');
    },
    '/plus': async (req, res) => {
        let result = `${Number(req.query.a) + Number(req.query.b)}`;
        res.end(await render('index', result));
    },
    '/minus': async (req, res) => {
        let result = `${Number(req.query.a) - Number(req.query.b)}`;
        res.end(await render('index', result));
    },
    '/delenje': async (req, res) => {
        let result = `${Number(req.query.a) / Number(req.query.b)}`;
        res.end(await render('index', result));
    },
    '/mnozenje': async (req, res) => {
        let result = `${Number(req.query.a) * Number(req.query.b)}`;
        res.end(await render('index', result));
    },
};

const server = http.createServer((req, res) => {
    // query string parameters // GET parameters
    // http://localhost:8080/users?a=10&b=5  
    // /users?a=10&b=5
    // /users                                     a=10&b=5
    let [path, _] = req.url.split('?');
    if (pages[path]) {
        const qs = url.parse(req.url, true).query;
        req.query = qs;
        pages[path](req, res);
    } else {
        res.end('');
    }
});

server.listen(8080);