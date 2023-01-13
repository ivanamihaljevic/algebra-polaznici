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


// Parse JSON to OBJECT
let myJson = '{"homepage": "https://www.avatar.com/movies/avatar-the-way-of-water", "id": 76600, "imdb_id": "tt1630029", "original_language": "en", "original_title": "Avatar: The Way of Water", "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.", "popularity": 4029.588, "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"}';

let myObject = JSON.parse(myJson);
console.log(myObject)
console.log(myObject.original_title)
console.log(myObject.overview)

// Another object example
const phones = {
    brand: {
        manufacturer: 'Apple',
        model: 'iPhone 13 Pro'
    },
    color: ['Sierra Blue', 'Silver', 'Gold', 'White'],
    price: 999,
    display: '6.1-inch display',
    qty: 184,
    checkStock: function () {
        if (this.qty > 0) {
            return 'in stock';
        } else {
            return 'out of stock';
        }
    }
};

console.log(phones.brand.model);
console.log(phones.checkStock());

// Converting an object into a JSON
const myPhonesObject = JSON.stringify(phones);
console.log(myPhonesObject);