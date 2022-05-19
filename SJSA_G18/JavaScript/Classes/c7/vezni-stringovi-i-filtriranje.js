const mailList = ['', '', '']

function validateEmails (mailList) {
  // sekoj zbor e korisnicki email
  // funkcijava treba da proveri dali sekoj od mailovite e validen
  // validen mail e toj mail sto im karakter "@", ".com" ili ".net" i nema prazni mesta

  // Otkako ke zavrsi proverkata, treba da se ispecatat site mailovi sto NE SE VALIDNI (ako ima takvi)
  // ako nema, pecatime OK

  const invalidEmails = mailList.filter((email) => {
    if (!email.includes('@')) {
      return true
    }

    if (!email.includes('.com') && !email.includes('.net')) {
      return true
    }

    if (email.includes(' ')) {
      return true
    }

    return false
  })

  console.log(invalidEmails)
}

validateEmails([
  'test@test.com',
  'test123123',
  'koco@koco.net',
  'test@koco.co'
])



function capitalizeNames (names) {
  /* Da se napise funkcija koja sto ke prima lista od iminja
  Funkcijata treba da proveri dali site iminja zapocnuvaat so golema bukva,
  i ako ne, togas da ja napravi golema
  Site ostanati bukvi, treba da se pretvorat vo mali
  Dokolku celosoto ime sodrzi i prezime, togas istite pravila vazat i za prezimeto
  (mora da pocnuva so golema bukva i site ostanati da se mali)

  Na kraj da se ispecati nizata od transformirani iminja */

  const modifiedNames = []

  // mora da imam loop za izminuvanje na nizata
  for (let name of names) {
    let newName = name.toLowerCase()
    
    // za imeto
    // newName = newName.replace(newName.charAt(0), newName.charAt(0).toUpperCase())

    // za prezimeto
    // prvo mora da go najdeme kade e praznoto mesto (na koja pozicija e)
    // karakterot sto se naogja posle nego e prvata bukva od prezimeto

    // ova ke bide OK ako imame samo edno prezime
    // let emptySpacePosition = newName.indexOf(' ')

    // newName = newName.replace(
    //   newName.charAt(emptySpacePosition + 1),
    //   newName.charAt(emptySpacePosition + 1).toUpperCase()
    // )


    newName = newName.split(' ') // ["Aleksandar" "ilievski" "kovacev"]

    const nameArray = newName.map((nameOrSurname) => {
      return nameOrSurname.replace(nameOrSurname.charAt(0), nameOrSurname.charAt(0).toUpperCase())
    }) // ["Aleksandar" "Ilievski" "Kovacev"]

    newName = nameArray.join(' ')

    modifiedNames.push(newName)

  }

  console.log(modifiedNames)

}

capitalizeNames(['SteFaNi', 'Aleksandar ilievski kovacev', 'Damjan'])