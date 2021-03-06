const addAnimals = () => {
  const animalType = document.getElementById('animalType')
  const numOfAnimal = document.getElementById('numOfAnimal')

  // guard clause
  if (!animalType.value || !numOfAnimal.value) {
    alert("Please insert the animal type and the number of specimens")
    return
  }

  // make a new animal object to be inserted in the local storage
  const newAnimal = {
    type: animalType.value.toLowerCase(),
    number: numOfAnimal.value
  }

  // check if the animal array exists (when the app is loaded for the first time, the list does NOT exist)
  let animals = localStorage.getItem('animals')
  if (!animals) {
    animals = []
  } else {
    // we need to convert the string variable to array in order to push new items
    animals = JSON.parse(animals)
  }

  let animalAlreadyExists = false
  // proverka dali veke postoi toj tip na zivotno
  animals = animals.map(animal => {
    if (animal.type === newAnimal.type) {
      animalAlreadyExists = true
      return { ...animal, number: Number(animal.number) + Number(newAnimal.number) }
    }
    return animal
  })

  // ako ne postoi
  // add the new animals in the list
  if (!animalAlreadyExists) {
    animals = [...animals, newAnimal] // animals.push(newAnimal)
  }

  // add  the modified list back into the local storage
  localStorage.setItem('animals', JSON.stringify(animals))

  generateListOfAnimalsHtml(animals)
}

const generateListOfAnimalsHtml = (animalsArray) => {
  const htmlContainer = document.getElementById('container')
  // if the UL already exists, remove it and re-generate it again
  const listOfAnimals = document.getElementById('listOfAnimals')
  if (listOfAnimals) {
    listOfAnimals.remove()
  }

  const htmlList = document.createElement('ul')
  htmlList.id = 'listOfAnimals'
  htmlContainer.appendChild(htmlList)

  animalsArray.forEach(animal => {
    const htmlItem = document.createElement('li')
    htmlItem.textContent = `${animal.type} - ${animal.number} number of species`
    htmlList.appendChild(htmlItem)
  })
}

// on application load fetch the animal list from local storage and generate HTML
generateListOfAnimalsHtml(JSON.parse(localStorage.getItem('animals')))

function search (value) {
  value = value.toLowerCase().trim()
  const initialList = JSON.parse(localStorage.getItem('animals'))
  
  const filteredList = initialList.filter((animal) => {
  // string.includes ili array.includes
    if(animal.type.includes(value)) {
      return true
    }
    return false
  })

  generateListOfAnimalsHtml(filteredList)
}

function reset () {
  console.log("reset works")
  document.getElementById('search').value = ''
  generateListOfAnimalsHtml(JSON.parse(localStorage.getItem('animals')))

}