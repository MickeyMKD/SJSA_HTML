const express = require('express');
const books = require('./handlers/books');
const db = require('./db/index');

db.init();

const app = express();

app.use(express.json());

app.get('/books', books.getAll);
app.get('/books/:id', books.getOne);
app.get('/books/:id/characters', books.getByCharacters);
app.get('/books/:id/authors', books.getByAuthors);
app.get('/books/:id/genres', books.getByGenres);

app.post('/books', books.create);
app.put('/books/:id', books.update);
app.patch('/books/:id', books.partialUpdate);
app.delete('/books/:id', books.remove);

app.listen(10000, err => {
    if(err){
        return console.log('Could not start service');
    }
    console.log('Service started successfully on port 10000');
});
