class Employee {
    id
    name
    surname
    accountId

    constructor (id, name, surname, accountId) {
        this.id = id
        this.name = name
        this.surname = surname
        this.accountId = accountId
    }

    setId (id) {
        this.id = id
    }
}

// nasleduvanje na podatoci od edna clasa vo druga, osven za private - # - elementi
class ITEmployee extends Employee {
    role // sys-admin, front-end, back-end, project manager
    
    constructor(role) {
        super() // instanciranje na elementite od originalnata klasa
        this.role = role
    }
}

const IT1 = new ITEmployee('admin')
IT1.setId(1)

console.log(IT1)