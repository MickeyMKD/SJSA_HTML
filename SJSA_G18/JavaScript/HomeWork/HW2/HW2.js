// prosechna temperatura
const temp = [12, 15, 14, 20, 22, 30]
let avrTemp = 0

for (let i = 0; i < temp.length; i++) {
    avrTemp += temp[i]
}

console.log('The average temperature is: ' + avrTemp / temp.length + ' degrees!')


// najniska temperatura
let minTemp = temp[0]

for (let i = 0; i < temp.length; i++) {
    if (temp[i] < minTemp) {
        minTemp = temp[i]
    }
}


// najvisoka temperatura
let maxTemp = 0

for (let i = 0; i < temp.length; i++) {
    if (temp[i] > maxTemp) {
        maxTemp = temp[i]
    }
}

console.log('The lowest temperature is: ' + minTemp + ' degrees!' + '; ' + 'The highest temperature is: ' + maxTemp + ' degrees!')