const fs = require('fs');


const dataWrite = async (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, (err) => {
            return fail(err);
        });
        return success();
    });
};

const studentData = async (req, res) => {
    try {
        await dataWrite("HW6data.txt", "utf-8", JSON.stringify(req.body));
    } catch (err) {
        return res.send(err);
    }
    res.send("Data stored");
};


module.exports = {
    studentData
};