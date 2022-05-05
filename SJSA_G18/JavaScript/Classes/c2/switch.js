// Milk- 40, Bread- 20, Banana- 10, Orange- 5, Apple- 6, Tomato- 5

const product = 'Bread'

switch (product) {
    case 'Milk': {
        console.log('The price of Milk is 40 denars')
        break
    }

    case 'Bread': {
        console.log('The price of Bread is 20 denars')
        break
    }

    case 'Banana': {
        console.log('The price of Banana is 10 denars')
        break
    }

    case 'Orange': 
    case 'Tomato': {
        console.log('The price of the product is 5 denars')
        break
    }

    case 'Apple': {
        console.log('The price of Apple is 6 denars')
        break
    }

    default: {
        console.log('Unknown product')
    }
} 


// Vezba

const den = 'Sreda'

switch (den) {
    case 'Ponedelnik': 
    case 'Vtornik':
    case 'Sreda':
    case 'Chetvrtok':
    case 'Petok': {
        console.log('Deneska e raboten den')
        break
    }

    case 'Sabota':
    case 'Nedela': {
        console.log('Deneska e neraboten den')
        break
    }

    default: {
        console.log('Vnesete validen den')
    }
} 


// vezba

const value = prompt('Enter a number that can be divided with 5')

if (value % 5 === 0) {
    console.log('The number can be divided with 5')    
} else {
    console.log("The number can't be divided with 5")
}