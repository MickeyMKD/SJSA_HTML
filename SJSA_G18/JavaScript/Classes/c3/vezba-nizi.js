// const friends = []

// for (let i = 0; i < 3; i++) {
//     const ime = prompt('Vnesi ime:')
//     friends.push(ime)

//     // za pokratko moze i friends.push(prompt('Vnesi ime: '))
// }

// for (let index = 0; index < friends.length; index++) {
//     // console.log(friends[index])
//     console.log(`My friend: ${friends[index]} 20:42`)
// }

// // 2. zadadena niza od elementi, da se ispechatat vo obraten redosled

// const niza = [1, 2, 3, 4]
// primer, kje treba da se ispechati - 4, 3, 2, 1

// const fruits = ['Apple', 'Pineapple', 'Banana', 'Kiwi', 'Strawberry']

// for (let index = fruits.length - 1; index >= 0; index--) {
//     console.log(fruits[index])
// }

// 3. Imame niza od dnevni temperaturi, da se najde prosechnata temperatura za dadenite denovi

const temp = [12, 15, 14, 20, 22, 30]
let sum = 0

for (let index = 0; index < temp.length; index++) {
    sum += temp[index]
}

console.log(sum / temp.length)

// // ternaren operator - dokolku rezultatot e NaN
// console.log(!temp.length ? 0 : sum / temp.length)

// 4. Imame valkana niza koja shto sodrzi razlichni tipovi na elementi, vkluchuvajki i nedefinirani vrednosti
// nedefinirani vrednosti se: null, undefined, ' ', ......
// Da se kreira nova niza kade shto kje se vmetnat samo validnite vrednosti
// primer:valkanaNiza = [1, 'test', null, 2, 4, undefined] ===> chistaNiza - [1, 'test', 2, 4]
// Na kraj, novata niza da se ispechati

valkanaNiza = [1, 'test', null, 2, 4, undefined]
chistaNiza = []

for (let i = 0; i < valkanaNiza.length; i++) {
    if (valkanaNiza[i]) {
    chistaNiza.push(valkanaNiza[i])
    }
}

console.log(chistaNiza)