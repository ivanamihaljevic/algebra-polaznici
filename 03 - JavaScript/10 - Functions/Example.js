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

    return alert(result.toFixed(2));

})();