const books = require('./book-modules')

const getAll = async (req, res) => {
    try {
        let data = await books.getAll();
        res.send(data).status(200);
    } catch(err) {
        console.log(err);
        res.send('Internal Server Error').status(500);
    }
};

const getOne = async (req, res) => {
    try {
        let data = await books.getOne(req.params.id);
        res.send(data).status(200);
    } catch(err) {
        console.log(err);
        res.send('Internal Server Error').status(500);
    }
};

const getByCharacters = async (req, res) => {
    try {
        let data = await books.getByCharacters(req.params.id, req.params.characters);
        res.send(data).status(200);
    } catch(err) {
        console.log(err);
        res.send('Internal Server Error').status(500);
    }
};

const getByAuthors = async (req, res) => {
    try {
        let data = await books.getByAuthors(req.params.id, req.params.authors);
        res.send(data).status(200);
    } catch(err) {
        console.log(err);
        res.send('Internal Server Error').status(500);
    }
};

const getByGenres = async (req, res) => {
    try {
        let data = await books.getByAuthors(req.params.id, req.params.genres);
        res.send(data).status(200);
    } catch(err) {
        console.log(err);
        res.send('Internal Server Error').status(500);
    }
};

const create = async (req, res) => {
    try {
        let data = req.body;
        await books.create(req.body);
        res.send(data).status(200);
    } catch(err) {
        console.log(err);
        res.send('Internal Server Error').status(500);
    }
};

const update = async (req, res) => {
    try {
        let data = req.body;
        await books.updateOne(req.params.id, req.body);
        res.send(data).status(200);
    } catch(err) {
        console.log(err);
        res.send('Internal Server Error').status(500);
    }
};

const partialUpdate = async (req, res) => {
    try {
        let data = req.body;
        await books.updateOne(req.params.id, req.body);
        res.send(data).status(200);
    } catch (err) {
        console.log(err);
        res.send('Internal Server Error').status(500);
    }
};

const remove = async (req, res) => {
    try {
        await books.remove(req.params.id);
        res.send('').status(200);
    } catch (err) {
        console.log(err);
        res.send('Internal Server Error').status(500);
    }
};

module.exports = {
    getAll,
    getOne,
    getByCharacters,
    getByAuthors,
    getByGenres,
    create,
    update,
    partialUpdate,
    remove
};