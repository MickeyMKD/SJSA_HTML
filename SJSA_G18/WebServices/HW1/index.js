const express = require('express');
const { expressjwt: jwt } = require('express-jwt');
const users = require('./handlers/users');
const recipes = require('./handlers/recipes');
const config = require('./pkg/config');
const db = require('./pkg/db');

const app = express();

db.init();

app.use(express.json());
app.use(jwt({
    algorithms: ['HS256'],
    secret: 'secret'
}).unless({
    path: [
        '/create-account',
        '/login'
    ]
}));

app.post('/login', users.login);
app.post('/create-account', users.create);

app.get('/recipe', recipes.getAll);
app.get('/recipe/:id', recipes.getUserRecipes);

app.post('/recipe', recipes.create);
app.put('/recipe/:id', recipes.update);
app.delete('/recipe/:id', recipes.remove);

app.listen(config.get('service').port, err => {
    if(err){
        return console.log(err);
    }
    console.log('Service auth successfully started on port', config.get('service').port);
});
