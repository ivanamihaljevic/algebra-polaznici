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
 * - Async Functions
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


/**************************************************
 * REST OPERATOR
**************************************************/

function showNames(...names) {
    console.log(names);
}

const x = ['John', 'Jane', 'Doe', 'Smith', 'Jack'];
showNames(x);


function myFunction(a, b, ...c) {
    console.log('A', a);
    console.log('B', b);
    console.log('C', c);
}

myFunction(1, 2, 3, 4, 5, 6, 7, 8, 9);

/**************************************************
 * SPREAD OPERATOR
**************************************************/

const arrayValues = ['My', 'name', 'is', 'Nino'];
console.log(arrayValues); // [ 'My', 'name', 'is', 'Nino' ]

// console.log(...arrayValues) is the same as console.log('My', 'name', 'is', 'Nino')

console.log(...arrayValues); // My name is Nino

const array3 = ['Nino', 'Škuflić'];
const array4 = [...array3, 'works', 'at', 'IBM iX & Algebra'];

console.log(array3); // ['Nino', 'Škuflić, 'works', 'at', 'IBM iX & Algebra']
console.log(array4[0]); // Nino should be shown on position 0

// ANOTHER EXAMPLE
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
// expected output is 6

/**************************************************
 * WINDOW METHODS
**************************************************/

// window.open();
// window.close();
console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(window.location.hostname);

/* The following code is also commented out because it is simply annoying. Feel free to uncomment it if you need it!

window.location = 'https://www.example.com'; > This is commented out, otherwise our index.html would end up on example.com!
window.alert('Hello! I am an alert box!');
console.log('Return from confirm: ' + window.confirm('Do you like JavaScript?'));
console.log('Return from prompt: ' + window.prompt('Please enter your name', 'Nino Škuflić')); */


/**************************************************
 * REGULAR EXPRESSIONS (REGEXP)
 * 
 * TASK: Create an input field in HTML, which is used to enter the phone number, together with the SUBMIT button. 
 * When the user enters their phone number and hits submit, verify that the CORRECT phone number is entered using regular expressions. 
 * If it is, alert the phone number, if not, alert that the number is incorrect. You MUST NOT use the HTML attribute type.
**************************************************/

let input = 1; // Imagine that this is some input inputted by a user
let regex = new RegExp('[0-9]'); // By using RegExp [0-9] we are allowing the user only to input the numbers from 0 to 9
console.log(regex.test(input)); // Test if our input will pass the validation. Try changing the value of input variable to 'a' instead of 1

let regex2 = new RegExp('[a-z]');
let name2 = 'Nino';
console.log(regex2.test(name2))

/**************************************************
 * MATRIX
**************************************************/

let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

console.table(activities);

console.log(activities[0][0]);
activities.push(['Study', 2]);
console.table(activities);

activities.forEach(element => console.log(element));


/**************************************************
 * FOR LOOP
**************************************************/

const array5 = ['Volvo', 'BMW', 'Audi', 'Toyota'];

for (let i = 0; i < array5.length; i++) {
    console.log(array5[i]);
};

/**************************************************
 * DO WHILE LOOP
**************************************************/

let result = '';
let j = 0;

do {
    j = j + 1;
    result = result + j;
} while (j < 5);

console.log(result);

/**************************************************
 * EVENT LISTENERS
**************************************************/

document.getElementById('button-1').addEventListener('click', myButtonFunction);

function myButtonFunction() {
    document.getElementById('paragraph-1').innerHTML = 'You have clicked the button. Why?';
}


var dancingPanda = document.getElementsByClassName('panda-dancing')[0];
dancingPanda.addEventListener('mouseenter', pandaDancing);

function pandaDancing() {
    document.getElementById('whoops').innerHTML = 'Whoops. It escaped!';
    dancingPanda.style.position = 'absolute';
    dancingPanda.style.right = '0px';
}

/**************************************************
 * DOM MANIPULATION
**************************************************/

document.getElementsByClassName('footer-text')[0].innerHTML = `&copy; ${new Date().getFullYear()} Nino Škuflić - All rights reserved.<br>The width of your screen is ${window.innerWidth}px, and the height is ${window.innerHeight}px.<br> Oh, and by the way - today is ${Date()}.`;

/**************************************************
 * CLASSES
 
 * Classes are in fact "special functions".
 * Just as you can define function expressions and function declarations, a class can be defined in two ways: 
 * a class expression or a class declaration.
 
 * Classes are a template for creating objects. 
 * They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
**************************************************/

// Creating a Student class with a default constructor which takes 4 parameters
// Declaration
class Student {
    /* 
     * What is a constructor? That is a special method in the body of a class that initializes the instance. 
     * That's the place where you set the initial values for the fields, or do any kind of object setup.
     * In the following example the constructor sets the initial value of the field name, surname and years.
     * Inside the constructor 'this' value equals to the newly created instance.
     * The arguments used to instantiate the class become the parameters of the constructor.
     */
    constructor(firstName, lastName, years) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.years = years;
    }
    // Custom method
    basicInfo() {
        return `The student ${this.firstName} ${this.lastName} is ${this.years} years old. `;
    }
}

let student1 = new Student('Nino', 'Škuflić', 24); // Creates an instance of the Student class
console.log(student1.firstName); // You can access name field using a property accessor
console.log(student1.basicInfo()); // Invoking the basicInfo() method on student

class Report extends Student {
    // This is our class constructor
    constructor(firstName, lastName, years, grade) {
        super(firstName, lastName, years);
        this.grade = grade;
    }
    // Custom method
    yearLevel() {
        return `The student ${this.firstName} ${this.lastName} is a ${this.grade.toLowerCase()} student and he/she is ${this.years} years old.`;
    }
}


let student2 = new Report('John', 'Smith', 24, 'Senior'); // Creates an instance of the Report class.
console.log(student1.yearLevel());