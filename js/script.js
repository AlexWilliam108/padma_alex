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

$(function() {
	$('label').each(function() {
		$(this).find('.more-inputs').click(function(e) {
			e.preventDefault();
			if ($(this).has('delete') && ('telefonos')) {
				$(this).css({'background-position' : '66px 10px'}).attr('title', 'Eliminar Teléfono');	
			}
			$(this).addClass('delete').next().css({'display' : 'block'})
			.closest('label').css({'height' : 'auto'})
		});
	});
});

$(function() {
	
});
