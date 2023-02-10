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

	function addStripes() {
		$('table tr').removeClass('striped');
		$('table tr:nth-child(even)').addClass('striped');
	}

	function afterRender() {
		$('[data-toggle="popover"]').popover();
		$('table th').css('color', 'darkBlue');
		addStripes();

		setTimeout(function () {
			const hideElements = $("table td a:contains('p')").filter(function () {
				return this.innerHTML.indexOf('p') == 0;
			});
			console.log(hideElements)
			hideElements.closest('tr').remove();
			addStripes();

			const info = $('<div></div>').insertAfter($('#result')).text('Hidden: ' + hideElements.length);
		}, 2000);
	}
});
