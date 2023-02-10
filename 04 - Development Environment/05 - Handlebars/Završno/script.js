fetch("https://random-data-api.com/api/v2/users?size=15")
	.then(response => response.json())
	.then(data => getData(data));

/*
* Handlebar.compile() can be used to produce a templating function. A template string with expressions must be passed into Handlebar.compile(). 
* That function then takes an object as an argument, interpolates the object’s values into the template expressions, and returns a completed HTML string.
*/

function getData(data) {
	let template = document.getElementById("template").innerHTML;
	let compiled_template = Handlebars.compile(template); // Compiles a template so it can be executed
	let rendered = compiled_template({user: data});
	document.getElementById("users").innerHTML = rendered;
}