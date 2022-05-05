// Logichki iskazi i uslovno izvrshuvanje na kod, logichki operatori

// console.log("test")

// alert("test")

// const text = prompt("Vnesi vrednost")

// logichki operatori
// ">" "<" ">=" "=<" "!" "==" "!="

// uslov (if - statement)
// const a = 5
// const b = 4
// if (a < b) {

//     // kodot koj treba da se izvrshi dokolku uslovot e ispolnet

//     console.log(a + ' e pomalo od ' + b)
// } else {

//     // kodot shto kje se izvrshi dokolku uslovot ne e ispolnet
//     console.log(a + ' e pogolemo od ' + b)
// }

// const a = 5
// const b = 5

// if (a < b) {
    
//     console.log(a + ' e pomalo od ' + b)
    
// } else if (a > b) {
    
//     console.log(a + ' e pogolemo od ' + b)
    
// } else {
    
//     console.log(a + ' e ednakvo na ' + b)

// }

// hardcoded (koga vrednostite se dobivaat vo samata programa)
const a = Number(prompt('Vnesi prva vrednost'))
const b = Number(prompt('Vnesi vtora vrednost'))

console.log(a)

if (a < b) {
    
    console.log(a + ' e pomalo od ' + b)
    
} else if (a > b) {
    
    console.log(a + ' e pogolemo od ' + b)
    
} else {
    
    console.log(a + ' e ednakvo na ' + b)

}


const broj1 = 10
const broj2 = 20

// && - logichko I
// || - logichko ILI
if ((broj1 < broj2) && (broj1 <10)) {
    console.log('brojot e ednocifren')
} else {
    console.log('brojot ne e ednocifren')
}


// pravi sporedba po vrednost
if ('5' == 5) {
    // TRUE
}

// pravi sporedba po vrednost i po tip
if ('5' === 5) {
    // FALSE
}

// pravi sporedba po vrednost
if ('5' != 5) {
    // FALSE
}

// pravi sporedba po vrednost i po tip
if ('5' !== 5) {
    // TRUE
}

const username = prompt('Vnesete korisnichko ime')
const password = prompt('Vnesete lozinka') // null - ako na promptot pritisneme cancel
console.log(password)

if (password === '' && password === null) {
    console.log('Ve molime vnesete validen password')
}

// ili - vtor nachin 

if (!password) {
    console.log('Ve molime vnesete validen password')
}


// 
const vnes1 = prompt('Vnesi prva vrednost')
const vnes2 = prompt('Vnesi vtora vrednost')

if (!vnes1 || !vnes2) {
    
    console.log('greshka') 
    
} else {
    
    const a = Number(vnes1)
    const b = Number(vnes2)

}

