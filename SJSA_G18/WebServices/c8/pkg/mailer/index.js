const { Validator } = require('node-input-validator');

const create = async (req, res) => {
  const v = new Validator(req.body, {
    from: 'required|email',
    to: 'required|email',
    subject: 'required|string|maxLength:35',
    html: 'string'
  });

  v.check().then((matched) => {
    if (!matched) {
      res.status(422).send(v.errors);
    }
  });
};

module.exports = {
    create
};