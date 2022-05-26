const request = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Request not completed! :(')
        
        resolve('Request completed sucessfully!')
    }, 1500)
})

request.then(
    (response) => {console.log(response)},
    (error) => {console.log(error)}
)

console.log('HELLO')

function sendRequest () {
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(json => console.log(json))
}