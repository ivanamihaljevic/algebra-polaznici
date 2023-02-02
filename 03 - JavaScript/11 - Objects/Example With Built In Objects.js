let car = {
    name: 'Ford',
    model: 'Focus',
    color: 'blue',
    seats: 5,
    doors: 5,
    make: 2015,
    engine: {
        fuel: 'diesel',
        horsePower: 120,
    },
    age: function () {
        return `This car is ${new Date().getFullYear() - this.make} years old`;
    },
    consumption: function () {
        if (this.engine.fuel == 'diesel') {
            return `${this.name} ${this.model} with ${this.motor.fuel} engine consumes < 5L/100km`;
        } else {
            return `${this.name} ${this.model} with gas engine consumes > 5L/100km`;
        }
    },
    family: function () {
        if (this.doors > 3) {
            return `${this.name} ${this.model} is suitable for families because it has ${this.doors} doors`;
        } else {
            return `${this.name} ${this.model} is not suitable for families because it does not have ${this.doors} doors`;
        }
    },
    changeDoors: function (newDoors) {
        return this.doors = newDoors;
    }
};

console.log(car.age())
console.log(car.changeDoors(2))
console.log(car.family())