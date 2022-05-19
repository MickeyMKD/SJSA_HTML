//  1. Da se napise funkcija koja kako parametar kje prima ime i prezime i kje gi ispecati inicijalite. Treba da raboti za povekje od edno prezime. Primer: George Raymond Richard Martin -> GRRM
let nameSurname = 'Luis Nazario De Lima Ronaldo'
let initialsName = initials(nameSurname)

function initials(nameSurname) {
  let letters = nameSurname.split(' ')
  let initials = ''

  for (let i = 0; i < letters.length; i++) {

    if (letters[i].length > 0 && letters[i] !== ' ') {
      initials += letters[i][0]
    }
  }

  return initials
}

console.log(initialsName)



//  2.  Da se napise funkcija koja kje ja presmeta razlikata vo godini pomegju najstariot i najmladiot clen vo edna familija i da se ispecati razlikata, zaedno so najmalata i najgolemata vozrast. Clenovite se objekti so dve properties- name & age.
// Primer:
  const input = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];
// Rezultat:
//  [13, 67, 54]
let results = differenceInAges(input)

function differenceInAges(input) {
  let inputAge = []
  
  input.forEach(element => inputAge.push(element.age))

  return [Math.min(...inputAge), Math.max(...inputAge), Math.max(...inputAge) - Math.min(...inputAge)]
}

console.log(results)


// 3. Da se napise funkcija koja ke presmeta faktoriel od nekoj priroden broj. Primer: 5! = 5*4*3*2*1
let number = 5
let factorial = numberFactorial(number)

function numberFactorial(number) {
    if (number === 0 || number === 1) {
    return 1;
    } else {
    return number * numberFactorial(number - 1)
    }
}

console.log(factorial)


// 4. Da se napise funkcija koja kako parametar prima niza od nizi, i ke ispecati kolku e dolzinata na sekoja od pod-nizite.
// Primer:
const inputCount = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g', 'h'],
  ];
// Rezultat:
// [3, 3, 4]

inputCount.forEach(function(element) {
  console.log(element.length)
})
