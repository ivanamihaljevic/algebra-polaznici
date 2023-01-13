var names = ['John', 'Jane', 'Bob', , 'Mike'];

// 1.
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// 2.
names.push('Nino');

// 3.
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);

    if (names[i] === 'Jane') {
        break;
    }
}

// 4.
names = names.filter(function (item) {
    return item !== undefined;
});

console.log(names);

// Zadatci za polaznike https://medium.com/@andrey.igorevich.borisov/10-javascript-exercises-with-arrays-c44eea129fba