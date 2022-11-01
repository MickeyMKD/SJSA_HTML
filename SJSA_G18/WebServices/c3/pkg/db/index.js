const mongoose = require('mongoose');

const init = () => {
    const dsn = 'mongodb+srv://<user>:<password>@cluster0.zryf5.mongodb.net/baza1?retryWrites=true&w=majority';
    mongoose.connect(
        dsn,
        err => {
            if(err) {
                return console.log('Could not connect to db', err);
            }
            console.log('Successfully connected to db');
        }
    )
};

module.exports = {
    init
};