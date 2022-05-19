//  1. Da se napise funkcija koja kako parametar kje prima ime i prezime i kje gi ispecati inicijalite. Treba da raboti za povekje od edno prezime. Primer: George Raymond Richard Martin -> GRRM

const fullName = 'George Raymond Richard Martin'

function getInitials (name) [
    const nameArray = name.split(' ') // ['George', 'Raymond', 'Richard', 'Martin']

    return nameArray.reduce((accumulator, current) => {
        return accumulator = accumulator + current.charAt(0)
        // prva iteracija => '' + George.charAt(0)
        // vtora iteracija => G + Raymond.charAt(0)
        // treta iteracija => GR + Richard.charAt(0)
        // chetvrta iteracija => GRR + Martin.charAt(0)
        // kraj = GRRM
    }, '')
]

console.log(getInitials(fullName))