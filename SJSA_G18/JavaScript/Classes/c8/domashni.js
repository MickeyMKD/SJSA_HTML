//  1. Da se napise funkcija koja kako parametar kje prima ime i prezime i kje gi ispecati inicijalite. Treba da raboti za povekje od edno prezime. Primer: George Raymond Richard Martin -> GRRM

const fullName = 'George Raymond Richard Martin'

function getInitials (name) {
    const nameArray = name.split(' ') // ['George', 'Raymond', 'Richard', 'Martin']

    return nameArray.reduce((accumulator, current) => {
        return accumulator = accumulator + current.charAt(0)
        // prva iteracija => '' + George.charAt(0)
        // vtora iteracija => G + Raymond.charAt(0)
        // treta iteracija => GR + Richard.charAt(0)
        // chetvrta iteracija => GRR + Martin.charAt(0)
        // kraj = GRRM
    }, '')
}

console.log(getInitials(fullName))

// 3. Da se napise funkcija koja ke presmeta faktoriel od nekoj priroden broj. Primer: 5! = 5*4*3*2*1

    // prvo reshenie
const factoriel = (number) => {

    let fact = 1
    for (let i = number; i > 0; i--) {
        fact = fact*i
    }
    return fact

    factoriel()
}

    // vtoro reshenie
const factorielRecursive = (number) => {

    if (number <= 1) {
        return number
    }
    return number * factorielRecursive(number - 1)
}

console.log(factoriel(5))


// 1. Da se napise f-ja koja sto ke prima kako parametar niza od stringovi kako parametar. Sekoj od stringovite moze da  sodrzi random prazni mesta.
// Funkcijata treba da go koristi Array.map() metodot za da vrati niza od procisteni stringovi (bez prazni mesta)
// Primer:
const superheroes = [" avengers", "   captain_america", "ironman   ", " black panther   "]

const purifyList = (list) => {
    return list.map(el => el.trim())
}

console.log(purifyList(superheroes))


// 2. Da se napise f-ja koja sto ke prima kako parametar niza od temperaturi (broevi) vo farenhajtovi stepeni.
// Funkcijata treba da go koristi Array.map() metodot za da vrati niza od konvertirani temperaturi vo celziusovi

const fahrenheit = [80, 90, 100, 110]

const convertToCelsius = (temp) => {
    return temp.map(el => ((el - 32) * 5 / 9))
}

console.log(convertToCelsius(fahrenheit))

// imutability -- cel ovoj proces na reshavanje so map -- originalniot podatok ne se menuva, tuku se kreira modificirana kopija


// 3. Da se napise f-ja koja sto kako parametar prima niza od stringovi. Funkcijata treba da vrati eden string, kade sto site elementi od
// nizata ke bidat spoeni i oddeleni megju sebe so crtichka "-".
// Primer:
// [" avengers", "   captain america", "ironman   ", " black panther   "] => "avengers-captain america-ironman-black panther"

const mergeStrings = (list) => {
    return list.reduce((acc, curr, index) => acc += curr + '-', '')
}

console.log(mergeStrings(superheroes))

// kombinacija so prvata vezba za superheroes za da se izvede trim, odnosno da se izbrishat praznite mesta vo listata
console.log(mergeStrings(purifyList(superheroes)))


// vtor nachin za da se trgne crtichkata na kraj od nizata
const mergeStrings1 = (list) => {
    return list.reduce((acc, curr, index) => {
        if (index === list.length - 1) {
            return acc += curr
        }

        return acc += curr + '-'

        // return (index === list.length - 1) ? acc += curr : acc += curr + '-' 
        // ternaren operator za gorniot iskaz, skrateno da se napishe
    }, '')
}
