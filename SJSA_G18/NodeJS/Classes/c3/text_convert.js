const textConvert = (type, text) => {
    const conversionMap = {a: 'a', b: 'б', v: 'в', g: 'г'};

    for (let c in conversionMap) {
        if(type === 'cyr2lat') {
            let regex = new RegExp(`${c}`, 'g');
            text = text.replace(regex, c);
        } else {
            let regex = new RegExp(`${c}`, 'g');
            text = text.replace(regex, conversionMap[c])
        }
    }
    return text;
};



const textStats = (text) => {
    if(typeof text !== 'string') return;
    let out = {
        bukvi: 0,
        zborovi: 0,
        rechenici: 0,
        gt5: 0,
        lt5: 0,
        eq5: 0
    };

    out.bukvi = text.length;
    out.zborovi = text.split(' ').length;
    out.rechenici = text.split('.').length;

    let zborovi = text.split(' ');

    for(let z of zborovi) {
        if(z.length === 5) out.eq5++;
        if(z.length > 5) out.gt5++;
        if(z.length < 5) out.lt5++;
    }
    return out;
};


module.exports = {
    textConvert,
    textStats
};