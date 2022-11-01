const posts = require('../pkg/posts')
const authors = require('../pkg/authors')

const getAll = async (req, res) => {
    try {
        let data = await posts.getAll();
        res.send(data).status(200);
    } catch(err) {
        console.log(err);
        res.send('Internal Server Error').status(500);
    }
};

const getMine = async (req, res) => {
    try {
        let data = await posts.getUserPosts(req.auth.uid);
        res.send(data).status(200);
    } catch (err) {
        res.send('Internal Server Error').status(500);
    }
};

const getUsers = async (req, res) => {
    try {
        let u = await authors.getByHandle(req.params.handle);
        let data = await posts.getUserPosts(u._id);
        res.send(data).status(200);
    } catch (err) {
        res.send('Internal Server Error').status(500);
    }
};

const create = async (req, res) => {
    try {
        let payload = {
            ...req.body,
            author_id: req.auth.uid,
            published_on: new Date()
        };
        let c = await posts.create(payload);
        return res.status(201).send(c);
    } catch(err) {
        res.send('Internal Server Error').status(500);
    }
};

const update = async (req, res) => {
    try {
        let payload = {
            ...req.body,
            author_id: req.auth.uid,
            published_on: new Date()
        };
        let up = await posts.update(req.params.id, req.auth.uid, payload); // moze i bez 'let up'
        return res.status(204).send('');
    } catch(err) {
        res.send('Internal Server Error').status(500);
    }
};

const remove = async (req, res) => {
    try {
        let del = await posts.remove(req.params.id, req.auth.uid); // moze i bez 'let del'
        return res.status(204).send('');
    } catch(err) {
        res.send('Internal Server Error').status(500);
    }
};

module.exports = {
    getAll,
    getMine,
    getUsers,
    create,
    update,
    remove
};