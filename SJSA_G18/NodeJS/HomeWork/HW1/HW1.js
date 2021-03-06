// converting kilograms to pounds and vice versa
const weightConvert = (type, value) => {
    switch (type) {
        case 'kg2lb':
            return value * 2.2046;
        case 'lb2kg':
            return value / 2.2046;
        default:
            console.log('Cannot convert!')
            break;
    }
};

let weight = 10;
let weightRes = weightConvert('kg2lb', weight)
console.log('Weight result:', weightRes)


// converting miles to kilometers and vice versa
const distanceConvert = (type, value) => {
    switch (type) {
        case 'mil2km':
            return value * 1.60934;
        case 'km2mil':
            return value * 0.621371;
        default:
            console.log('Cannot convert!')
            break;
    }
};

let distance = 100;
let distRes = distanceConvert('km2mil', distance)
console.log('Distance result:', distRes)


// converting centimeters to feet and vice versa
const lengthConvert = (type, value) => {
    switch (type) {
        case 'cm2ft':
            return value * 0.032808;
        case 'ft2cm':
            return value / 0.032808;
        default:
            console.log('Cannot convert!')
            break;
    }
};

let length = 100;
let lengthRes = lengthConvert('cm2ft', length)
console.log('Length result:', lengthRes)


// converting euro to denar and vice versa
const currencyConvert = (type, value) => {
    switch (type) {
        case 'mkd2eur':
            return value / 61.8 + ' EUR';
        case 'eur2mkd':
            return value * 61.3 + ' MKD';
        default:
            console.log('Cannot convert!')
            break;
    }
};

let currency = 61500;
let currencyRes = currencyConvert('mkd2eur', currency)
console.log('Currency result:', currencyRes)


// converting Gold Ounce to US Dollar and vice versa
const wealthConvert = (type, value) => {
    switch (type) {
        case 'xau2usd':
            return value * 1848.52 + ' USD';
        case 'usd2xau':
            return value * 0.000540944 + ' XAU';
        default:
            console.log('Cannot convert!')
            break;
    }
};

let wealth = 1;
let wealthRes = wealthConvert('usd2xau', wealth);
console.log('Wealth result:', wealthRes)


// transforming cyrillic to latin and vice versa
// not working properly when converting from latin to cyrillic
function translate (word) {
    let wordInput = "", 
    a = {};

   a["??"]="B"; a["??"]="b"; a["??"]="V"; a["??"]="v"; a["??"]="G"; a["??"]="g"; a["??"]="D"; a["??"]="d"; a["??"]="Gj"; a["??"]="gj"; a["??"]="Zh"; a["??"]="zh"; a["??"]="Z"; a["??"]="z"; a["??"]="Ds"; a["??"]="ds"; a["??"]="I"; a["??"]="i"; a["??"]="L"; a["??"]="l"; a["??"]="Lj"; a["??"]="lj"; a["??"]="N"; a["??"]="n"; a["??"]="Nj"; a["??"]="nj"; a["??"]="P"; a["??"]="p"; a["??"]="R"; a["??"]="r"; a["??"]="S"; a["??"]="s"; a["??"]="Kj"; a["??"]="kj"; a["??"]="U"; a["??"]="u"; a["??"]="F"; a["??"]="f"; a["??"]="H"; a["??"]="h"; a["??"]="C"; a["??"]="c"; a["??"]="Ch"; a["??"]="ch"; a["??"]="Dz"; a["??"]="dz"; a["??"]="Sh"; a["??"]="sh";
   a["B"]="??"; a["b"]="??"; a["V"]="??"; a["v"]="??"; a["G"]="??"; a["g"]="??"; a["D"]="??"; a["d"]="??"; a["Gj"]="??"; a["gj"]="??"; a["Zh"]="??"; a["zh"]="??"; a["Z"]="??"; a["z"]="??"; a["Ds"]="??"; a["ds"]="??"; a["I"]="??"; a["i"]="??"; a["L"]="??"; a["l"]="??"; a["Lj"]="??"; a["lj"]="??"; a["N"]="??"; a["n"]="??"; a["Nj"]="??"; a["nj"]="??"; a["P"]="??"; a["p"]="??"; a["R"]="??"; a["r"]="??"; a["S"]="??"; a["s"]="??"; a["Kj"]="??"; a["kj"]="??"; a["U"]="??"; a["u"]="??"; a["F"]="??"; a["f"]="??"; a["H"]="??"; a["h"]="??"; a["C"]="??"; a["c"]="??"; a["Ch"]="??"; a["ch"]="??"; a["Dz"]="??"; a["dz"]="??"; a["Sh"]="??"; a["sh"]="??";

   for (i in word) {
     if (word.hasOwnProperty(i)) {
       if (a[word[i]] === undefined) {
         wordInput += word[i];
       } else {
         wordInput += a[word[i]];
       }
     }
   }
   return wordInput;
};

let result = translate('?????????????????????????? ?????????????? ???????????????????? ???????????????? ??????????');
console.log('The transformed word is:', result)
