const config = require('./pkg/config');
const express = require('express');
const jwt = require('express-jwt');
const authors = require('./handlers/authors');
const posts = require('./handlers/posts');
const db = require('./pkg/db');
const auth = require('./handlers/auth');

db.init();

const app = express();

app.use(express.json());
app.use(jwt.expressjwt({
    algorithms: ['HS256'],
    secret: config.get('service').jwt_secret
}));

app.get('/authors', authors.getAll);
app.get('/posts', posts.getAll);
app.get('/posts/me', posts.getMine);
app.get('/posts/:handle', posts.getUsers);

app.post('/posts', posts.create);
app.put('/posts/:id', posts.update);
app.delete('/posts/:id', posts.remove);

app.post('/api/v1/auth/create-account', auth.create);
app.post('/api/v1/auth/login', auth.login);

app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        res.status(401).send('Invalid token ...');
    } else {
        next(err);
    }
});

app.listen(config.get('service').port, err => {
    if(err){
        return console.log(err);
    }
    console.log('Service auth successfully started on port', config.get('service').port);
});


/* 

            za doma:
- servis koj kje ima login i create account
- full multitenant CRUD za kreiranje, listanje, menuvanje i brishenje na recepti
    - listanje da vrakja site recepti
    - dodavanje za mojot korisnik
    - update ili delete brishe samo moi recepti
=======================

post /login
post /create-account

post /recipe
get /recipe - site recepti bez ogled na koj korisnik pripagjaat
get /recipe/:id
put /recipe/:id - gi menuva receptite koi se vo sopstvenost na korisnikot
delete /recipe/:id - gi brishe receptite koi se vo sopstvenost na korisnikot

modeli:
users {...}
recipes {...}

*/