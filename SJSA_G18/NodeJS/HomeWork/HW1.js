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
let wealthRes = wealthConvert('usd2xau', wealth)
console.log('Wealth result:', wealthRes)


// transforming cyrillic to latin and vice versa
// not working properly when converting from latin to cyrillic
function translate (word) {
    let wordInput = "", 
    a = {};

   a["Б"]="B"; a["б"]="b"; a["В"]="V"; a["в"]="v"; a["Г"]="G"; a["г"]="g"; a["Д"]="D"; a["д"]="d"; a["Ѓ"]="Gj"; a["ѓ"]="gj"; a["Ж"]="Zh"; a["ж"]="zh"; a["З"]="Z"; a["з"]="z"; a["Ѕ"]="Ds"; a["ѕ"]="ds"; a["И"]="I"; a["и"]="i"; a["Л"]="L"; a["л"]="l"; a["Љ"]="Lj"; a["љ"]="lj"; a["Н"]="N"; a["н"]="n"; a["Њ"]="Nj"; a["њ"]="nj"; a["П"]="P"; a["п"]="p"; a["Р"]="R"; a["р"]="r"; a["С"]="S"; a["с"]="s"; a["Ќ"]="Kj"; a["ќ"]="kj"; a["У"]="U"; a["у"]="u"; a["Ф"]="F"; a["ф"]="f"; a["Х"]="H"; a["х"]="h"; a["Ц"]="C"; a["ц"]="c"; a["Ч"]="Ch"; a["ч"]="ch"; a["Џ"]="Dz"; a["џ"]="dz"; a["Ш"]="Sh"; a["ш"]="sh";
   a["B"]="Б"; a["b"]="б"; a["V"]="В"; a["v"]="в"; a["G"]="Г"; a["g"]="г"; a["D"]="Д"; a["d"]="д"; a["Gj"]="Ѓ"; a["gj"]="ѓ"; a["Zh"]="Ж"; a["zh"]="ж"; a["Z"]="З"; a["z"]="з"; a["Ds"]="Ѕ"; a["ds"]="ѕ"; a["I"]="И"; a["i"]="и"; a["L"]="Л"; a["l"]="л"; a["Lj"]="Љ"; a["lj"]="љ"; a["N"]="Н"; a["n"]="н"; a["Nj"]="Њ"; a["nj"]="њ"; a["P"]="П"; a["p"]="п"; a["R"]="Р"; a["r"]="р"; a["S"]="С"; a["s"]="с"; a["Kj"]="Ќ"; a["kj"]="ќ"; a["U"]="У"; a["u"]="у"; a["F"]="Ф"; a["f"]="ф"; a["H"]="Х"; a["h"]="х"; a["C"]="Ц"; a["c"]="ц"; a["Ch"]="Ч"; a["ch"]="ч"; a["Dz"]="Џ"; a["dz"]="џ"; a["Sh"]="Ш"; a["sh"]="ш";

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
}

let result = translate('Шамарничарење')
console.log('The transformed word is:', result)
