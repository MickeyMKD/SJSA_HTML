const express = require('express');
const weather = require('./handlers/weather');

const api = express();

api.get('/api/v1/weather/:city', weather.getCity);

api.listen(10000, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Server started on port 10000');
});

/*
DOMASHNA

da se napravi i da se dodade ushte 1 grad (Bitola)
so razlichen cache
*/

