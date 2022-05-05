const a = Number(prompt('Enter a number'))
const b = Number(prompt('Enter a second number'))
const op = prompt('Enter an operation')


if (!a || !b) {
    console.log('Enter a valid number!')
} else {
    switch (op) {
        case ('+'): {
            console.log(a + b)
            break
        }    

        case ('-'): {
            console.log(a - b)
            break
        }    

        case ('*'): {
            console.log(a * b)
            break
        }    

        case ('/'): {
            console.log(a / b)
            break
        }    

        case ('%'): {
            console.log(a % b)
            break
        }    
         
        default: {
            console.log("Enter a valid operation!")
        }
    } 
}