"use strict";

// 1.
var a = 78;
var b = 34;
var myObject = {
    property1: 1,
    property2: 2,
    property3: 1,
};

// 2.
var users = [
    { name: "Fabio", surname: "Biondi" },
    { name: "Mario", surname: "Rossi" },
];

var user = { name: "Lorenzo", surname: "Verdi" };
var allUsers = [...users, user];

console.log(allUsers);

// 3.
// Prvi console.log ce vratiti error i is not defined
// Sljedecih 10 console log-ova ce se ispisati sa brojkama 0 do 9 nakon 1 sekunde
// Ako dodamo var umjesto let, onda ce se ispisati na kraju broj 10 i 10 nakon 1 sekunde
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log("The number is " + i);
    }, 1000);
}

console.log(i);
