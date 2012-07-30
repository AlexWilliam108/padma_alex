/* 
	Author:	Alex William
	Author URI: artinblog.com	
	Alex_William108
*/

$(function() {
	$('label').each(function() {
		$(this).find('.more-inputs').click(function(e) {
			e.preventDefault();
			$(this).next().css({'display' : 'block'}).parent().css({'height' : 'auto'})
			.find('.more-inputs, .input-container').clone().insertAfter('.input-container');
			$('.input-container:last-child').css({'display' : 'none'});
		});
	});
});