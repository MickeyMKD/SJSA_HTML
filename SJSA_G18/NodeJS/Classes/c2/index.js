// console.log('test');


function cToF (celsius) {
    return celsius * 9/5 + 32;
}

console.log(cToF(40))


function fToC (fahrenheit) {
    return fahrenheit * 5/9 - 32;
}

console.log(fToC(125));


const tempConvert = (type, value) => {
    switch (type) {
        case 'c2f':
            return value * 9/5 + 32;
        
        case 'f2c':
            return (value - 32) * 5/9;
            
        default:
            console.log('Cannot convert!')
            break;
    }
};

let temp = 100;
let res = tempConvert('c2f', temp)
console.log('Convert result:', res)