const express = require('express');
const mailer = require('./handlers/mailer');
require('dotenv').config();

const api = express();

api.use(express.json());

api.post('/api/v1/mailer', mailer.sendMail); 

api.listen(10000, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Service started on port 10000');
});

// za doma
// separacija na kodot (posebno handlers, pkg, config file), api key i domain vo config file
// from, to, subject i html da se isprakjaat kako json i da bidat popolneti
// node-input-validator da se koristi za validacija
