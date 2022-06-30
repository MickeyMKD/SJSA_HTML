const fetch = require('node-fetch');

(async () => {
    try {
        let res = await fetch('https://wikipedia.org');
        let wikipediaContent = await res.text();
        console.log(wikipediaContent);
    } catch(err) {
        console.log(err);
    }
})();

// API - Application Programming Interface