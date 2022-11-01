const bcrypt = require('bcryptjs');
const user = require('../pkg/user');
const jwt = require('jsonwebtoken');
const config = require('../pkg/config');

const create = async (req, res) => {
    try {
        // 1. Proveri dali dvete lozinki se ednakvi
        if(
            req.body.password.trim().length === 0
            || req.body.password !== req.body.password2    
            ) {
                return res.status(400).send('Bad Request');
            }
        // 2. Proveri dali postoi korisnik so istiot email vo baza
        let u = await user.getUserByEmail(req.body.email);
        if(u) {
            return res.status(409).send('Conflict');
        }
        // 3. Hashuvaj ja lozinkata
        req.body.password = bcrypt.hashSync(req.body.password);
        // 4. Zapishi go noviot korisnik vo baza
        let usr = user.create(req.body);
        return res.status(201).send(usr);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const login = async (req, res) => {
    try {
    // 1. Proverka dali korisnikot so dadeniot email postoi
        let u = await user.getUserByEmail(req.body.email);
        if (!u) {
            return res.status(400).send('Bad request. Bad Login Credentials');
        }
    // 2. Proverka dali vnesenata lozinka na korisnikot se sovpagja so taa od bazata
        if (!bcrypt.compareSync(req.body.password, u.password)) {
            return res.status(400).send('Bad request. Bad Login Credentials');
        }
    // 3. Se generira i isprakja token
        let payload = {
            uid: u._id,
            email: u.email,
            full_name: u.full_name
        };
        let token = jwt.sign(payload, config.get('service').jwt_secret);
        return res.status(200).send({token});
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const forgotPassword = (req, res) => {
    console.log(req.body);
    return res.send('ok');
};

const resetPassword = (req, res) => {
    console.log(req.body);
    return res.send('ok');
};

const validate = (req, res) => {
    return res.send(req.auth);  // return the token payload
};


module.exports = {
    create,
    login,
    forgotPassword,
    resetPassword,
    validate
};