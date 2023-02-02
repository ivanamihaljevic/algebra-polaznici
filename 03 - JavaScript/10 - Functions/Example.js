/************************************ 
Simple Function Example
*********************************** */
function nameOfFunction() {
    // function body   
}

function greet() { // declaring a function named greet()
    console.log('Hello there');
}

greet(); // function call

/************************************ 
Example 1: Function with Parameters
*********************************** */
function greet(student) {
    console.log('Hello ' + student + ':)');
}

let student = prompt('Enter a name: '); // variable name can be different

greet(student); // calling function


/************************************ 
Example 2: Self Invoking Function - BMI Calculator
*********************************** */
(function calculateBMI() {
    let result;
    let person = prompt('Please enter your name: ', '');
    let weight = prompt(`What is your weight, ${person}? `, '');
    let height = prompt(`And lastly, ${person}, what is your height (in m2) `, '');

    result = weight / (height * 2);

    alert(result.toFixed(2));
})();


/************************************ 
Example 3: Adding two numbers
*********************************** */
function add(a, b) {
    console.log(a + b);
}

add(3, 4); // calling functions
add(2, 9); // calling functions

/************************************ 
Example 4: Variable as function
*********************************** */
let add = function(value){
    return console.log(value + 1);
}

let result = add(1);
