const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://mickeymkd:<password>@cluster0.zryf5.mongodb.net/baza1?retryWrites=true&w=majority';

const connect = (connectionString) => {
    return new Promise((success, fail) => {
        mongoose.connect(connectionString, err => {
            if (err) return fail(err);
            console.log('Connected successfully to DB!');
            return success();
        });
    })
};

const Studenti = mongoose.model(
    'studenti', 
    {
        ime: String,
        prezime: String,
        prosek: Number,
        lokacija: {
            grad: String,
            drzhava: String
        }
    },
    'studenti' 
);
    
connect(connectionString)
    .then(() => {
        return Studenti.count({});
    })
    .then(res => {
        console.log('Вкупно студенти: ' + res);
        return Studenti.find({}, { _id: 0, ime: 1, prezime: 1, prosek: 1 }).sort({prosek: -1}).limit(5);
    })
    .then(res => {
        console.log('Топ 5 студенти според просек: ', res);
        return Studenti.find({'lokacija.grad': 'Skopje'}, {_id: 0}).sort({prosek: 1}).limit(3);
    })
    .then(res => {
        console.log('Најлоши 3 студенти од Скопје: ', res);
        return Studenti.find({'lokacija.grad': 'Skopje'}, {_id: 0}).sort({prosek: -1}).limit(10);
    })
    .then(res => {
        console.log('Најдобри 10 студенти од Скопје: ', res);
        return Studenti.find({'lokacija.drzhava': 'Makedonija'}, {_id: 0, ime: 1, prezime: 1, 'lokacija.grad': 1}).sort({prosek: -1}).limit(3);
    })
    .then(res => {
        console.log('Најдобри 3 студенти од Македонија: ', res);
        return Studenti.find({'lokacija.grad': 'Bitola'}, {_id: 0, prezime: 1, prosek: 1}).sort({prosek: 1}).limit(5);
    })
    .then(res => {
        console.log('Најлоши 5 студенти од Битола', res);
        return Studenti.find({'lokacija.grad': 'Bitola'}, {_id: 0}).sort({prezime: 1});
    })
    .then(res => {
        console.log('Студенти од Битола подредени по презиме: ', res);
        return Studenti.find({'lokacija.grad': 'Kumanovo'}, {_id: 0}).sort({ime: 1});
    })
    .then(res => {
        console.log('Студенти од Куманово подредени по име: ', res);
        return Studenti.findOne({}).sort({prosek: -1});
    })
    .then(res => {
        console.log('Најдобриот студент од Македонија е: ', res);
    })
    .catch(err => {
        console.log(err);
    });
