/*
* Prototipovi su dosta zbunjujući, pogledajte ovo: https://www.youtube.com/watch?v=4jb4AYEyhRc
*/

function Dog(name) {
	this.name = name || 'Rex';
	this.bark = function () {
		return 'Wuf Wuf';
	};
}

Dog.prototype.getName = function () {
	return this.name;
}; // Defined the getName method based on the Dog prototype

var dog = new Dog('Geko');
var dog2 = new Dog('Pafili');

console.log(dog);
console.log(dog2.getName());
// console.log(dog.getName());
// console.log(dog.bark());