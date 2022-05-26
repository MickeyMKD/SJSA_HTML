class CoffeMaker {
  MIN_WATER = 100
  MIN_MILK = 20
  MIN_COFFEE = 7

  constructor(water, milk, coffee, totalMade) {
    this.water = water
    this.milk = milk
    this.coffee = coffee
    this.totalMade = totalMade
  }

  makeCoffe() {
    const { MIN_WATER, MIN_MILK, MIN_COFFEE } = this

    if (this.water < MIN_WATER) {
      console.log(`Not enough water, you need ${MIN_WATER - this.water} grams more`)
      return
    }
    if (this.milk < MIN_MILK) {
      console.log(`Not enough milk, you need ${MIN_MILK - this.milk} grams more`)
      return
    }
    if (this.coffee < MIN_COFFEE) {
      console.log(`Not enough cofee, you need ${MIN_COFFEE - this.coffee} grams more`)
      return
    }

    this.water -= MIN_WATER
    this.milk -= MIN_MILK
    this.coffee -= MIN_COFFEE
    this.totalMade++
    console.log(`Done! Enjoy your coffee! Total cups made today: (${this.totalMade})`)
  }

  getMadeCoffees () {
    return this.totalMade
  }
}

const coffeeMade = new CoffeMaker(300, 60, 50, 0)

coffeeMade.makeCoffe()
coffeeMade.makeCoffe()
coffeeMade.makeCoffe()
coffeeMade.makeCoffe()

coffeeMade.totalMade