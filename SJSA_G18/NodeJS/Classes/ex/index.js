const fs = require('fs');

const fileWrite = (file, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, data, (err) => {
            if (err) return fail(err);
            success();
        });
    });
};

const fileRead = (file) => {
    return new Promise((success, fail) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) return fail(err);
            return success(data);
        })
    });
};

const fileAppend = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(file, data, (err) => {
            if (err) return reject(err);
            return resolve();
        });
    });
};

fileWrite('vezbi.txt', "odlichni vezbi")
    .then(() => {
        return fileRead('vezbi.txt');
    })
        .then((data) => {
        console.log("Successfully read data", data);
        return fileAppend('vezbi.txt', 'dodaden teks');
    })
    .then(() => {
        console.log('successful append');
        return fileAppend('vezbi.txt', '\nmnogu dobri vezhbi'); // \n se koristi za nov red
    })
    .then(() => {
        console.log('successful append 2');
    })
    .catch((err) => {
        console.log('Error:', err);
    });


    const main = async () => {
        try {
            await fileWrite('text.txt', 'nov fajl');
            let fileContent = await fileRead('text.txt');
            console.log(fileContent);
            await fileAppend('text.txt', '\nlele mnogu golema zelba za vezbi');
            fileContent = await fileRead('text.txt');
            console.log(fileContent);
        } catch(err) {
            console.log('Error:', err);
        }
    };

    main();

