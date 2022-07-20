const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    // res.send('OK');
    res.render('index'); // views/index.ejs
});

app.get('/podatoci/:ime', (req, res) => {
    let data = {
        ime: req.params.ime,
        studenti: [
            {first_name: 'Pero', last_name: 'Perovski'},
            {first_name: 'Janko', last_name: 'Jankovski'},
            {first_name: 'Ivan', last_name: 'Ivanovski'},
            {first_name: 'Dule', last_name: 'Dulevski'},
            {first_name: 'Goran', last_name: 'Goranovski'},
            {first_name: 'Igor', last_name: 'Igorovski'},
        ]
    };
    res.render('podatoci', data); // views/index.ejs
});

app.get('/formular', (req, res) => {
    res.render('formular');
});

app.post('/formular-rezultat', (req, res) => {
    let data = {
        ime: req.body.ime,
        prezime: req.body.prezime,
    }
    res.render('formular_rezultat', data);
    // res.send(req.body);
});

app.get('/calculator', (req, res) => {
    res.render('calculator')
});

app.post('/calculator-result', (req, res) => {
    try {
        let result;
        let op = req.body.op;

        switch (op) {
            case 'plus':
                result = Number(req.body.value_a) + Number(req.body.value_b);
                break;
            case 'minus':
                result = req.body.value_a - req.body.value_b;
                break;
            case 'multiply':
                result = req.body.value_a * req.body.value_b;
                break;
            case 'divide':
                result = req.body.value_a / req.body.value_b;
                break;
            default:
                console.log('Insert valid operator and/or number!');
        };
        // let calc = {rez: result};
        res.render('calculator-result', {result});
    } catch (err) {
        res.send(err);
    };
});




// try {
//     let result;
//     let a = Number(req.body.value_a);
//     let b = Number(req.body.value_b);
//     let op = req.body.op;

//     switch (op) {
//         case 'plus':
//             result = res.end(`${a + b}`);
//             break;
//         case 'minus':
//             result = res.end(`${a - b}`);
//             break;
//         case 'multiply':
//             result = res.end(`${a * b}`);
//             break;
//         case 'divide':
//             result = res.end(`${a / b}`);
//             break;
//         default:
//             console.log('Insert valid operator and/or number!');
//     }
//     res.render('calculator-result', result);
// } catch (err) {
//     res.send(err);
// }


app.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Server started on port 10000');
});