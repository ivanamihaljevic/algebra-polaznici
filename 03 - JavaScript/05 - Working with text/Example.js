const greet = 'Hello, my name is ';
const name = 'Nino';

user = greet + name;
console.log(user)

console.log('I have 25 ' + 'years');
console.log('I have' + ' ' + '\'3\' dogs');

console.log('Lorem ipsum dolor sit \namet consectetur adipiscing elit.');

// Length
const str = 'Life, the universe and everything.';
console.log(str.length);

// CharAt
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.charAt(6))

// Trim
const greeting = '      Hello World!        ';
console.log(greeting.trim());

// IndexOf
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log('Searc term found at ' + indexOfFirst)

const secondTerm = paragraph.indexOf(searchTerm, (indexOfFirst +1));

console.log('2nd search term found at ' + secondTerm)

// toUpperCase
const sentence2 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence2.toUpperCase());