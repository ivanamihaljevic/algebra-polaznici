$(document).ready(function () {
	$.ajax({
		url: 'https://pokeapi.co/api/v2/pokemon-color/yellow',
		dataType: 'json',
		success: function (data) {
			const source = document.getElementById('pokemon-list').innerHTML;
			const template = Handlebars.compile(source);
			const context = { pokemon: data.pokemon_species.slice(0, 20), tableClass: 'table' };
			const html = template(context);
			document.getElementById('result').innerHTML = html;
			afterRender();
		},
	});
});
