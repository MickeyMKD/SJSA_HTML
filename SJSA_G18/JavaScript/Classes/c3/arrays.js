// nizi - arrays

// redosledot na elementite vo edna niza e fiksen i sekoj element si ima svoja pozicija (index)
let animals = ['Cat', 'Dog', 'Parrot', 'Rabbit']

// ako imame niza so X elementi, psoledniot index kje bide X - 1

console.log(animals[1])
// za da go ispechatime 'Dog'

const friends = [
    'Aleksandar',
    'Simona',
    'Petar',
    'Sanja',
    'Angela',
    'Gjorgji',
    'Marko'
]

// za promena na element vo nizata
friends[2] = 'Nekoe drugo ime'

for (let index = 0; index < friends.length; index++) {
    console.log(friends[index])
}

// dodava element na kraj od nizata
friends.push('Aleksandra')
console.log(friends)


// dodava element na pochetok od nizata
friends.unshift('Kristijan')
console.log(friends)


// go brishe posledniot element vo nizata i go vrakja vo promenliva
const izbrishan = friends.pop()


// go brishe prviot element od nizata i go vrakja vo promenliva
const izbrishan2 = friends.shift()

console.log(izbrishan, izbrishan2)
console.log(friends)

// sobiranje na nizi - concat
console.log(friends.concat(animals))


