var _ = require('lodash');

// 1.
var dobro = '1234567890';
var lose = '1123456';

function jedinstveniZnakovi(password) {
    return _.uniq(password).join('');
}

console.log('Jedinstveni znakovi');
console.log(dobro, jedinstveniZnakovi(dobro));
console.log(lose, jedinstveniZnakovi(lose));
console.log('---');

// 2.
var lose = 's123asdcj2io3';

function sviZnakoviSuBrojke(password) {
    return !isNaN(password);
}

console.log('sviZnakoviSuBrojke');
console.log(dobro, sviZnakoviSuBrojke(dobro));
console.log(lose, sviZnakoviSuBrojke(lose));
console.log('---');

// 3.
var lose = '649851212498465489312';

function skratiNa10Znakova(password) {
    return lose.slice(0, 10);
}

console.log('skratiNa10Znakova');
console.log(dobro, skratiNa10Znakova(dobro));
console.log(lose, skratiNa10Znakova(lose));
console.log('---');
