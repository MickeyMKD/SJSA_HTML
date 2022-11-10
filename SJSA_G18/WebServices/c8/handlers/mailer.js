const Mailgun = require('mailgun.js');
const formData = require('form-data');
// const config = require('../pkg/config');
const mailer = require('../pkg/mailer');
require('dotenv').config();


const sendMail = async (req, res) => {
    try {
    const mailgun = new Mailgun(formData);
    const mg = await mailgun.client({
        username: process.env.API_USERNAME,
        key: process.env.API_KEY       
    });
    
    let out = await mg.messages.create(process.env.API_DOMAIN, {
        from: '',
        to: '',
        subject: '',
        html: ''
    });

    console.log(out);

    return res.status(201).send('Created');
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error!');
    }
};

module.exports = {
    sendMail
};
