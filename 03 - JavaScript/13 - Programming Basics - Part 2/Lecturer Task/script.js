
/*
* TO CELSISU FUNCTION
* Expected output: 130ºF equals to 54.44ºC
* Formula: 5/9 * USER INPUT - 32
*/
function toCelsius(fahrenheit) {
    return `${fahrenheit}ºF equals to ${((5 / 9) * (fahrenheit - 32)).toFixed(2)}ºC`;
}

console.log(toCelsius(130))


/* 
*  FUNCTION THAT CAN SUM MULTIPLE NUMBERS
*/
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

console.log(add(1, 2, 3, 4, 5));

/* 
*  BMI CALCULATOR
*/
(function calculateBMI() {
    let result;
    let person = prompt('Please enter your name: ', '');
    let weight = prompt(`What is your weight, ${person}? `, '');
    let height = prompt(`And lastly, ${person}, what is your height (in m2) `, '');

    result = weight / (height * 2);

    switch (true) {
        case (result <= 18.5):
            alert(`${person}, your BMI score is ${result.toFixed(2)} which classifies you as underweight.`);
            break;
        case (result > 18.5 && result < 24.9):
            alert(`${person}, your BMI score is  ${result.toFixed(2)} which classifies you as normal weight.`);
            break;
        case (result >= 24.9 && result < 29.9):
            alert(`${person}, your BMI score is  ${result.toFixed(2)} which classifies you as overweight.`);
            break;
        case (result >= 29.9):
            alert(`${person}, your BMI score is  ${result.toFixed(2)} which classifies you as obese.`);
            break;
        default:
            alert(`I am unable to calculate your BMI, ${person}.`);
            break;
    }
})();