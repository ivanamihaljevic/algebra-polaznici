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