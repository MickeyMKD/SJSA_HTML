async function getPosts () {
    document.getElementById('loading').style.visibility = visible;
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
    // HTTP STATUS CODES
    // 2XX - SUCCESS
    // 3XX - REDIRECT
    // 4XX - CLIENT - SIDE ERROR
    // 401 - unauthorized, 403 - access forbiden, 404 - not found, 405 - wrong format
    // 5XX - SERVER - SIDE ERROR
    // 500 - server unreachable, 502 - bad gateway, 503 - server down
    if (response.status.toString().startsWith('4')) {
        console.log('Client-side Error')
        return
    }

    const data = await response.json()
    document.getElementById('loading').style.visibility = 'hidden';

    generateHtml(data)
}


const generateHtml = (data) => {
    console.log(data)
}

const createPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'), {
        method: 'POST',
        body: JSON.stringify({
            email: 'koco@test.com',
            name: 'Koco Nica',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }

    const data = await response.json()
    console.log(data)
}