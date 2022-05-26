fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {

        genarateHTML(data)
    })

    const genarateHTML = (genCard) => {
        const container = document.getElementById('container')

    genCard.forEach(element => {
        const card = document.createElement('div')
        container.append(card)
        const name = document.createElement('h3')
        name.textContent = `${element.name}`
        card.append(name)
        const email = document.createElement('h3')
        email.textContent = `@${element.email}`
        card.append(email)
        const website = document.createElement('h3')
        website.textContent = `Website: ${element.website}`
        card.append(website)
        const address = document.createElement('h3')
        address.textContent = `${element.address.street} ${element.address.suite}`
        card.append(address)
    });
}

genarateHTML()