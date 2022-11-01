const mongoose = require('mongoose');

const Recipe = mongoose.model(
    'recipe',
    {
        user_id: String,
        title: String,
        ingredients: String,
        content: String,
        cooking_min: Number,
        posted: Date
    },
    'recipes'
);

const create = async (data) => {
    const r = new Recipe(data);
    return r.save();
};

const getAll = async () => {
    return Recipe.find({});
};    

const getByUser = async (id) => {
    return Recipe.findOne({_id: id});
};    

const update = async (id, uid, data) => {
    return Recipe.updateOne({_id: id, user_id: uid}, data);
};

const remove = async (id, uid) => {
    return Recipe.deleteOne({_id: id, user_id: uid});
};

module.exports = {
    create,
    getAll,
    getByUser,
    update,
    remove
};