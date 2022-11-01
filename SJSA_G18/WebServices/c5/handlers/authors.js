const authors = require('../pkg/authors');

const getAll = async (req, res) => {
    try {
        let data = await authors.getAll();
        res.send(data).status(200);
    } catch(err) {
        console.log(err);
        res.send('Internal Server Error').status(500);
    }
};

module.exports = {
    getAll
};