/* 
 * Copyright 2022 Nino Škuflić <nino.skuflic@predavaci.algebra.hr>.  
 */

/*----------------------------------------------------------------------------* 
 * TABLE OF CONTENTS
 * - Data Types & Operators
 * - Varibale Scope & Functions
 * - Arrays
 * - Switch
 * - Objects
 * - Converting JSON into an object
 * - Converting an object into a JSON
 * - String interpolation
 * - Constructor
 * - Prototypes
 * - Rest operator
 * - Spread operator
 * - Windows methods
 * - Regular Expressions (RegExp)
 * - Matrix
 * - For loop
 * - Do while loop
 * - Event listeners
 * - DOM Manipulation
 * - Classes
 * - API (connecting to API)
 * - Cookies
 * - Local storage
 * - JEST Test
 *----------------------------------------------------------------------------*/

/**************************************************
 * DATA TYPES & OPERATORS
**************************************************/

var a = 6;
var b = '5';
console.log(typeof (a));


// ARITHMETIC
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log((a * b).toFixed(2)); // Convert a number to string, keeping only two decimals
console.log(a / b);
console.log(a / 0); // Infinity
console.log(a / Infinity); // 0
console.log(a % 6);

// COMPARISON
console.log(a == b); // Equal operator
console.log(a === b); // Strict equal
console.log('' == 0); // Falsy values

// LOGICAL
console.log((5 < 6) && (6 == 6));
console.log((5 < 6) || (6 == 6));
console.log(!(5 < 6));

// CONDITIONAL (TERNARY)
console.log(a == b ? 'This is equal!' : 'This is not equal!');


/**************************************************
 * ARRAYS
**************************************************/

// Creating an array
// var items = new Array('cat', 'bee', 'ant eater');

// Array literal
let items = ['Plates', 'Knife', 'Glass'];
//console.log(items)

console.log(items[1]);
console.log(items.length)

// Push a new item into the array
items.push('Fork');

// Sort the Array
items.sort();

for (let i = 0; i < items.length; i++) {
    console.log('Items of array are: ' + items[i]);
}

// Get the last item in an array
console.log(items[items.length - 1])

// Reverse sort the array
console.log(items.reverse())

/**************************************************
 * SWITCH
**************************************************/

const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: 'Mangoes and papayas are $2.79 a pound.'
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

/**************************************************
 * OBJECTS
**************************************************/

// Creating an object by using the new Object() method
const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);

myCar.color = 'Blue';
console.log(myCar);

// Creating an object by using object literal
const person = {
    firstName: 'Nino',
    lastName: 'Škuflić',
    id: 115648972,
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.id);
console.log(person.lastName);
console.log(person.fullName());

// Converting JSON into an object
myJSON = "{'name':'Nino', 'age':24, 'car':null}";
myObject = JSON.parse(myJSON);

console.log(myObject);
console.log(myObject.age);

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

/**************************************************
 * STRING INTERPOLATION
**************************************************/
console.log(`The selected phone ${phones.brand.model} is ${phones.checkStock()} and it's price is $${phones.price}.`);

/**************************************************
 * CONSTRUCTOR
 * Sometimes we need a "blueprint" for creating many objects of the same "type". 
 * The way to create an "object type", is to use an object constructor function.
 * In JavaScript, the this keyword refers to an object.
**************************************************/

// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");

/**************************************************
 * PROTOTYPES
 * https://www.youtube.com/watch?v=4jb4AYEyhRc
 * In JavaScript, a class is a set of objects that inherit properties from the same prototype object. 
 * The prototype object, therefore, is the central feature of a class.
 * 
 * A prototype-based language has the notion of a prototypical object, an object used as a template from which to   get the initial properties for a new object.
 * 
 * __proto__ is the actual object that is used in the lookup chain to resolve methods, etc.
 * prototype is the object that is used to build __proto__ when you create an object with new keyword
 * So fundamentally _proto_ provides reference to the prototype object.
**************************************************/

/*
* Here we create an object personPrototype, which has a greet() method. 
* We then use Object.create() to create a new object with personPrototype as its prototype. 
* Now we can call greet() on the new object, and the prototype provides its implementation.
*
* Learn more: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
*/
const personPrototype = {
    greet() {
        console.log("hello!");
    },
};

const carl = Object.create(personPrototype);
carl.greet();

// Constructor Function
function Person() {
    this.name = 'Nino',
        this.age = 24
}

// Creating a new person object from Person() constructor
const person1 = new Person();
const person2 = new Person();

// Checking the prototype value
console.log(Person.prototype); // { ... }

// Adding property to constructor function
Person.prototype.gender = 'male';

// Prototype value of Person
console.log(Person.prototype);

// Inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);

// Adding a method to the constructor function
Person.prototype.greet = function () {
    console.log(`Hello ${this.firstName}`);
};

person1.greet(); // Hello Nino
person2.greet(); // Hello Nino

// Accessing prototype property (DEPRECATED)
console.log(person1.__proto__); // { age: 24 }
console.log(Object.getPrototypeOf(person1))