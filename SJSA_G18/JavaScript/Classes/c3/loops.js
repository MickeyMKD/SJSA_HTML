// // ciklusi / jamki (loops)

let a = 1
let b = 3

while (a < b) {

    // iteracija na kod
    const ime = 'Test'
    console.log(ime)
    a++

}

// // 'do' garantira deka barem edna iteracija kje se izvrshi

do {
    
    const ime = 'Test'
    console.log(ime)
    a++

} while (a <= b)

console.log('Done!')


// vezba za brojach od 1-100

let brojach = 1

while (brojach <= 100) {

    console.log(brojach)
    brojach++

}


// vezbata so upotreba na 'for' | moze da se koristat povekje promenlivi (brojach1, brojach2)
for (let brojach = 1; brojach <= 100; brojach++) {
    console.log(brojach)
}

console.log('Done!')


