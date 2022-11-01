const recipes = require('../pkg/recipes');

const getAll = async (req, res) => {
    try {
        let data = await recipes.getAll();
        res.send(data).status(200);
    } catch(err) {
        console.log(err);
        res.send('Internal Server Error').status(500);
    }
};

const getUserRecipes = async (req, res) => {
    try {
        let data = await recipes.getByUser(req.params.id);
        res.send(data).status(200);
    } catch (err) {
        res.send('Internal Server Error').status(500);
    }
};

const create = async (req, res) => {
    try {
        let payload = {
            ...req.body,
            user_id: req.auth.uid,
            posted: new Date()
        };
        let c = await recipes.create(payload);
        return res.status(201).send(c);
    } catch(err) {
        console.log(err);
        res.send('Internal Server Error').status(500);
    }
};

const update = async (req, res) => {
    try {
        let payload = {
            ...req.body,
            user_id: req.auth.uid,
            posted: new Date()
        };
        let u = await recipes.update(req.params.id, req.auth.uid, payload);
        return res.status(204).send('Updated!'); // 204 - no content on the request
    } catch(err) {
        res.send('Internal Server Error').status(500);
    }
};

const remove = async (req, res) => {
    try {
        let d = await recipes.remove(req.params.id, req.auth.uid);
        return res.status(204).send('Deleted!');
    } catch(err) {
        res.send('Internal Server Error').status(500);
    }
};

module.exports = {
    getAll,
    getUserRecipes,
    create,
    update,
    remove
};