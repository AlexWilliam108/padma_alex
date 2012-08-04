/* 
	Author:	Alex William
	Author URI: artinblog.com	
	Alex_William108
*/

/*$(function() {
	$('label').each(function() {
		$(this).find('.more-inputs').click(function(e) {
			e.preventDefault();
			$(this).next().css({'display' : 'block'}).closest('label').animate({'height' : '300px'})
			.find('.more-inputs, .input-container').clone().insertAfter('.input-container');
			$('.input-container:last-child').css({'display' : 'none'});
		});
	});
});*/

function deleteFields()  {
	$('label').each(function() {
		if ($(this).find('a').has('delete') && ('telefonos')) {
				$(this).find('a').css({'background-position' : '66px 10px'}).attr('title', 'Eliminar Teléfono');	
		}
	});
}

function customChange() {
	$('select').change(function() {
		if($("option[value='custom']").is(":selected")) {$(this).next().css({'display' : 'block'});}
		else{$(this).next().css({'display' : 'none'});}
	});
}

$(function() {
	$('label').each(function() {
		$(this).find('.more-inputs').click(function(e) {
			e.preventDefault();
			deleteFields();
			$(this).addClass('delete').next().css({'display' : 'block'})
			.closest('label').css({'height' : 'auto'})
		});
	});
});

$(function() {
	customChange();
	$('.input-container').css({'display' : 'block'});
	$('.min_label').css({'height' : 'auto'});
});
