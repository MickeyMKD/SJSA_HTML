const mongoose = require('mongoose');

const Book = mongoose.model(
    'book',
    {
        title: String,
        authors: [String],
        genre: [String],
        description: String,
        characters: [String],
        publisher: String,
        page_num: Number,
        publish_year: Date
    },
    'books'
);

const create = async (data) => {
    let b = new Book(data);
    return b.save();
};

const getAll = async () => {
    return Book.find({});
};

const getOne = async (id) => {
    return Book.findOne({_id: id});
};

const getByCharacters = async (characters) => {
    return Book.find({_id: id}, {characters: 1});
};

const getByAuthors = async (authors) => {
    return Book.find({_id: id}, {authors: 1});
};

const getByGenres = async (genre) => {
    return Book.find({_id: id}, {genre: 1});
};

const updateOne = async (id, data) => {
    return Book.updateOne({_id: id}, data);
};

const remove = async (id) => {
    return Book.deleteOne({_id: id});
};

module.exports = {
    create,
    getAll,
    getOne,
    getByCharacters,
    getByAuthors,
    getByGenres,
    updateOne,
    remove
};