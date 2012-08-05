/* 
	Author:	Alex William
	Author URI: artinblog.com	
	Alex_William108
*/

/* Criar função para os delets
function deleteFields()  {
	var telefonos = ('.telefonos, .delete');
	var emails = $(this).find('a').filter('.delete, .emails');
	$('label').each(function() {
		if($(this).has(telefonos)) {
			$(this).find('a').css({'background-position' : '66px 10px'}).attr('title', 'Eliminar Teléfono');
		}
		else if($(this).has(emails)) {
			$(this).find('a').css({'background-position' : '75px 10px'}).attr('title', 'Eliminar Emails');
		}
	});
}*/

function customChange() {
	$('label > select').each(function() {
		$(this).change(function() {
			if($(this).find("option[value='custom']").is(":selected")) {$(this).closest('label').next().css({'display' : 'block'});}
			else{$(this).closest('label').next().css({'display' : 'none'});}
		});
	});
}

$(function() {
	$('label').each(function() {
		$(this).find('.more-inputs').click(function(e) {
			e.preventDefault();
			$(this).addClass('delete').next().css({'display' : 'block'})
			.closest('label').css({'height' : 'auto'})
		});
	});
	customChange();
});