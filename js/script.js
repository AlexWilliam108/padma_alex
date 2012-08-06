/* 
	Author:	Alex William
	Author URI: artinblog.com	
	Alex_William108
*/

function customChange() {
	$('label > select').each(function() {
		$(this).change(function() {
			if($(this).find("option[value='custom']").is(":selected")) {$(this).closest('label').next().css({'display' : 'block'});}
			else{$(this).closest('label').next().css({'display' : 'none'});}
		});
	});
}

function optionDireccion() {
	$('label[rel="direccion"] > .input-container label > select[name!="direccion"]').change(function() {
			if($(this).find('option[value!="null"]')){
				$(this).closest('label').next().css({'display' : 'block'});
			}
			if($(this).find('option[value="null"]').is(":selected")){
				$(this).closest('label').next().css({'display' : 'none'});
			}			
	});
}

$(function() {
	var deleteInput;
	$('label').each(function() {
		$(this).find('.more-inputs').click(function(e) {
			e.preventDefault();
			deleteInput = $(this).addClass('delete');
			deleteInput.next().css({'display' : 'block'}).closest('label').css({'height' : 'auto'});
		deleteInput.click(function() {
			$(this).removeClass('delete').closest('label').find('.input-container').css({'display' : 'none'}).end().css({'height' : '36px'});
		});
	});
	});
	customChange();
	optionDireccion();	
});