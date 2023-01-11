// Dajemo ključnu riječ function, dajemo ime funkciji, otvaramo i zatvaramo obične i vitičaste zagrade
function greet() {
    return console.log('Hello there');
}

greet();

// Function with parameter
function greetMe(student) {
    console.log('Hello there, ' + student)
}
let student = prompt('Enter your name: ')
greetMe(student);

// Self invoking function
(function selfInvoked() {
    console.log('Hey, look at me. I invoked myself.')
})();

// BMI Calculaor
(function calculateBMI() {
    let result;
    let person = prompt('Please enter your name: ');
    let height = prompt(`What is your height, ${person}: `);
    let weight = prompt(`What is your weight, ${person}: `);

    result = weight / (height * 2);

    return alert(`Your BMI is: ${result.toFixed(2)}`);

})();


// Calculating numbers
function add(a, b, c) {
    return console.log(a + b + c)
};

add(5, 3, 0);
add(1, 3, 4);
add(1, 7, 3);


// Variable as function
let add = function(value){
    return console.log(value + 1);
}

let result = add(1);