const mongoose = require('mongoose');

const Author = mongoose.model(
    'author',
    {
        handle: String,
        full_name: String
    },
    'authors'
);

const getByHandle = async (handle) => {
    return Author.findOne({handle});
};

const getAll = async () => {
    return Author.findAll();
};

module.exports = {
    getAll,
    getByHandle
};