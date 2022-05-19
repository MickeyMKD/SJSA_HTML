function onSubmit () {
    event.preventDefault ()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    console.log(username.value, password.value)

    username.value = ''
    password.value = ''
}

const usernameChanged = (value) => {
    console.log(value)
}