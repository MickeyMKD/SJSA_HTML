require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
// const { expressjwt: jwt } = require('express-jwt');
const storage = require('./handlers/storage');

const api = express();

api.use(fileUpload({
    limits: {
        // fileSize: 1048576,
        
    },
    abortOnLimit: true
}));

api.post('/api/v1/storage', storage.upload);
api.get('/api/v1/storage/:file', storage.download);

api.listen(process.env.PORT, err => {
    if(err) {
        return console.log(err);
    }
    console.log(`Service successfully started on port ${process.env.PORT}`)
});

// domashna
// da se stavi limit za sliki samo upload i da se limitiraat na 1 MB golemina