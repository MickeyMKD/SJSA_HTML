const mongoose = require('mongoose');

const User = mongoose.model(
    'user',
    {
        email: String,
        password: String,
        chef_name: String,
    },
    'users'
);

const create = async (data) => {
    let u = new User(data);
    return u.save();
};

const getUserByEmail = async (email) => {
    return User.findOne({email});
};

// const getAll = async () => {
//     return User.find({});
// };

module.exports = {
    create,
    getUserByEmail,
    // getAll
};