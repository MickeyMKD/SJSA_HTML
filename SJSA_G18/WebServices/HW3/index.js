const express = require('express');
const mailer = require('./handlers/mailer');

const app = express();

app.use(express.json());

app.post('/api/v1/mailer', mailer.sendMail); 

app.listen(10000, err => {
    if(err) {
        return console.log(err);
    }
    console.log(`Service started on port 10000`);
});

// za doma
// separacija na kodot (posebno handlers, pkg, config file), api key i domain vo config file
// from, to, subject i html da se isprakjaat kako json i da bidat popolneti
// node-input-validator da se koristi za validacija
