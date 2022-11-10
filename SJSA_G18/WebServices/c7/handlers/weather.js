const fetch = require('node-fetch');

let localCache = null;
let cacheTime = null;

const getCity = async (req, res) => {
    let key = '';
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=Skopje&appid=622a13db6b995902a0602c29b936e25c';

    if(cacheTime !== null && cacheTime + (60 * 1000) < new Date().getTime()) {
        localCache = null;
    }

    if(localCache === null) {
        let data = await fetch(url);
        localCache = await data.json();
        cacheTime = new Date().getTime();
    }
    
    return res.send(localCache);
};

module.exports = {
    getCity
};