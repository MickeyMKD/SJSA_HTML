const upload = async (req, res) => {
    // console.log(req.files.slika);
    /* let fileType = ['image/jpeg', 'image/jpg', 'image/png'];
    if (req.files.slika.mimetype !== 'image/jpeg' 
    && req.files.slika.mimetype !== 'image/jpg' 
    && req.files.slika.mimetype !== 'image/png' 
    || req.files.slika.size > 1048576) {
        return res.status(400).send('Invalid format and/or size!');
    */

        let fileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if(!fileTypes.includes(req.files.slika.mimetype)) {
            return res.status(400).send('Bad request');
        }
        if(maxFileSize < req.files.slika.size) {
            return res.status(400).send('Bad request')
        }
        let newFileName = `${strings.random(10)}__${req.files.slika.name}`;
        await req.files.slika.mv(`${__dirname}/../uploads/${newFileName}`);  // req.files se koristi za upload/download na sliki, dokumenti koi se zapishuvaat vo direktorium koj go definirame
        res.status(201).send({filename: newFileName});
    }
// };

const download = async (req, res) => {
    let filePath = `${__dirname}/../uploads/${req.params.filename}`;
    res.download(filePath, req.params.file.split('__')[1]);
};

module.exports = {
    upload,
    download
};