// Browser Object Model (BOM)
let age = prompt('How old are you?');
if (age < 18) {
    alert('You must be 18 years old to enter our website.')
    window.location = 'https://www.google.com';
}

// Browser Object Model (BOM)
let consent = window.confirm('Do you consent to recording?');
if (consent == false) {
    window.location = 'https://www.google.com';
}

window.open('https://www.mozilla.org/');
