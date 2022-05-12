// deklaracija
function helloWorld (parameter) {
    // funkciite primaat parametri kako promenlivi definirani vo malite zagradi
    // function body (telo na funkcijata shto go sodrzi kodot)
    // alert('Hello World!')
}

// povik
// helloWorld()

function helloWorld (parameter1, parameter2) {
    // alert(parameter1 + parameter2)
}

// parametrite shto se vishok se ignoriraat


function helloWorld (parameter1, parameter2) {
    const zbir = parameter1 + parameter2
    // alert(zbir)
    // alert('Hello World!')

    return 'My first function excercise'
}

const value = helloWorld(12, 23)

// -----> Vezba 1

// arrow function
const changeText = () => {
    // DOM object
    const element = document.getElementById('title')
    console.log(element)
    element.textContent = 'My first excercise with functions'
    const list = document.createElement('ul')
    console.log(list)
    const listItem = document.createElement('li')
    listItem.textContent = 'Hello world'
    
    list.appendChild(listItem)

    element.appendChild(list)
}

