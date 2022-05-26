/* Da se definira klasa kola koja shto sodrzi properties: model, boja, godina na proizvodstvo, maksimalna brzina i momentalna brzina */

class Car {
    constructor (model, color, year, maxVelocity, currentVelocity) {
        this.mode = model
        this.color = color
        this.year = year
        this.maxVelocity = maxVelocity
        this.currentVelocity = currentVelocity
    }

    goFaster(acceleration) {
        let maxSpeed = this.currentVelocity + acceleration

        if (maxSpeed >= this.maxVelocity) {
            this.currentVelocity = this.maxVelocity;
        console.log('You have reached the speed limit!');
    } else {
        this.currentVelocity = maxSpeed;
    }
    }
    goSlower(deceleration) {
        let maxSpeed = this.currentVelocity - deceleration
        if (maxSpeed <= 0) {
            this.currentVelocity = 0
            console.log('The vehicle has stopped')
        } else {
            this.currentVelocity = maxSpeed
        }
    }
}

const Jeep = new Car('Jeep', 'white', 2010, 200, 0)

setTimeout(() => {
    Jeep.goFaster(30)
    console.log(Jeep.currentVelocity)
}, 2000)

setInterval(() => {
    Jeep.goFaster(30)
    console.log(Jeep.currentVelocity)
}, 1000)

const C4 = new Car('Citroen', 'black', 2006, 200, 150)

setInterval(() => {
    C4.goSlower(20)
    console.log('Citroen speed: ' + C4.currentVelocity)
}, 1000)

