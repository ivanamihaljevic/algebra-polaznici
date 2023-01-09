let age = 25;

if (age > 18) {
    // Jednostavan blok kod koji ispisuje u konzolu
    console.log('User is of legal drinking age.');
} else {
    console.log('User is not of legal drinking age. DO NOT SERVE HIM!')
}

// If, Else, Els If
const gender = 'Male';

if (gender == 'Male') {
    console.log('User is a male')
} else if (gender == 'Female') {
    console.log('User is a female');
} else {
    console.log('User gender unknown')
}

// If, Else with a range
let customerAge = 25;

if (customerAge >= 18 && customerAge <= 99) {
    // Jednostavan blok kod koji ispisuje u konzolu
    console.log('User is of legal drinking age.');
} else {
    console.log('User is not of legal drinking age. DO NOT SERVE HIM!')
}

// Switch
const fruit = 'Oranges';

switch (fruit) {
    case 'Oranges':
        console.log('User has bought oranges');
        break;
    case 'Mangoes':
        console.log('User has bought mangoes');
        break;
    case 'Papayas':
        console.log('User has bought papayas');
        break;
    default:
        console.log('I have no idea what user has bought');
        break;
}

// Switch to get days of the week
switch (new Date().getDay()) {
    case 0:
        console.log('Today is Sunday')
        break;

    case 1:
        console.log('Today is Monday')
        break;

    case 2:
        console.log('Today is Tuesday')
        break;

    case 3:
        console.log('Today is Wednesday')
        break;

    case 4:
        console.log('Today is Thursday')
        break;

    case 5:
        console.log('Today is Friday')
        break;

    case 6:
        console.log('Today is Saturday')
        break;
}