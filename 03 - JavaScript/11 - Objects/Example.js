let car = {
    name: 'Ford',
    model: 'Mustang',
    year: 1968,
}

console.log(car.name)
console.log(car.model)
console.log(car.year)

car.weight = 800;
console.log(car.weight)


let car2 = {
    name: 'Ford',
    model: 'Mustang',
    year: 1968,
    getCarDetails: function () {
        return this.name + ' ' + this.model;
    }
}

console.log(car2.getCarDetails());

// Person Object
const person = {
    firstName: 'Nino',
    lastName: 'Škuflić',
    id: 1234567,
    age: 25,
    underage: false,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

if (person.underage === false) {
    console.log(`${person.fullName()} is not underage.`)
} else {
    `${person.fullName()} is underage.`
}

person.underage === false ? `${person.fullName()} is not underage.` : `${person.fullName()} is underage.`


