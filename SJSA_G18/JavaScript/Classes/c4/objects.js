const person = {
    // object properties (svojstva)
    pol: 'mashki',
    vozrast: 20,
    visina: 170,
    tezina: 70,
    student: true
}

// kreiranje na kopija od object
const nov = {...person}

// key-value pairs
person.pol = 'zenski'
delete person.tezina
person.ime = 'Milan' // person['ime'] = 'Milan'

console.log(person)
console.log(nov)

const keys = Object.keys(person) // gi vrakja site kluchevi od objektot kako array
console.log(keys)

const values = Object.values(person)
console.log(values)


// ------> Vezba 1
const Kvadrat = {
    shirina: 10,
    dolzina: 20
}

Kvadrat.ploshtina = Kvadrat.shirina * Kvadrat.dolzina

console.log(Kvadrat.ploshtina)


// ------> Vezba 2
const books = [
    {
        name: 'Crime and punishment',
        author: 'Fyodor Dostoyevsky',
        year: '1887',
        read: true
    },
    {
        name: 'Harry Potter',
        author: 'J.K. Rowling',
        year: '2000',
        read: false
    },
    {
        name: 'The art of war',
        author: 'Sun Tzu',
        year: '200',
        read: false
    },
    {
        name: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        year: '1910',
        read: true
    }
]

for (let book of books) { // for (i=0; i < books.length; i++) {let book = books[i]}
    if (book.read === true) {
        console.log(book.name)
    }
    // (book.read) && console.log(book.name) -- drug nachin na reshavanje | shorthand za IF clause
    // (book.read) ? console.log(book.name) : console.log('${book.name} - UNREAD') -- tret nachin
    // if (!book.read) continue console.log(book.name) -- chetvrt nachin
}


// ------> Vezba 3
const students = [
    {
        id: 1,
        name: 'Koco',
        grades: {
            math: 6,
            physics: 7,
            chemistry: 8
        }
    },
    {
        id: 2,
        name: 'Gjorgji',
        grades: {
            math: 9,
            physics: 8,
            chemistry: 10
        }
    },
    {
        id: 3,
        name: 'Sanja',
        grades: {
            math: 7,
            physics: 7,
            chemistry: 7
        }
    }
]

let avgMath = 0
let avgPhysics = 0
let avgChemistry = 0

for (student of students) {
    avgMath = students.grades.math + avgMath
    avgPhysics = students.grades.physics + avgPhysics
    avgChemistry = students.grades.chemistry + avgChemistry
}

console.log('Srednata ocenka po matematika e: ' + avgMath / students.length)
console.log('Srednata ocenka po fizika e: ' + avgPhysics / students.length)
console.log('Srednata ocenka po hemija e: ' + avgChemistry / students.length)