const bcrypt = require('bcryptjs');
const user = require('../pkg/user');
const jwt = require('jsonwebtoken');
const config = require('../pkg/config');

const create = async (req, res) => {
    try {
        if(
            req.body.password.trim().length === 0
            || req.body.password !== req.body.password2    
            ) {
                return res.status(400).send('Bad Request');
            }
        let u = await user.getUserByEmail(req.body.email);
        if(u) {
            return res.status(409).send('Conflict');
        }
        req.body.password = bcrypt.hashSync(req.body.password);
        let usr = user.create(req.body);
        return res.status(201).send(usr);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const login = async (req, res) => {
    try {
        let u = await user.getUserByEmail(req.body.email);
        if (!u) {
            return res.status(400).send('Bad request. Bad Login Credentials');
        }
        if (!bcrypt.compareSync(req.body.password, u.password)) {
            return res.status(400).send('Bad request. Bad Login Credentials');
        }
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

module.exports = {
    create,
    login
};
