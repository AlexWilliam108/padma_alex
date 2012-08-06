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
		function callback(e) {
			e.preventDefault();
			
			if($(this).hasClass('delete')){
				
				console.log($(this).closest('label').css('height'))
				
				var array = $(this).parent().find('.input-container');
				var tamanho_elem = 0;
				for(var i=0; i<array.length-1; i++)
					tamanho_elem += $(array[i]).height();
				$(this).removeClass('delete').parent().css({'height' : 36 + tamanho_elem +'px'});
				$(this).next().css({'display' : 'none'});
				
				// remove os últimos elementos inseridos
				$(this).parent().find('.more-inputs').last().remove();
				$(this).parent().find('.input-container').last().remove();
			} else{
				$(this).addClass('delete').next().css({'display' : 'block'}).closest('label').css({'height' : 'auto'});
				console.log($(this).closest('label').css('height'))
				
				// clona o objeto
				obj = '<a title="Agregar Teléfono" class="more-inputs telefonos" href="#">Telefónos</a><div class="input-container"><label for="category_telefonos">Category<select name="telefonos"><option value="null"></option><option value="casa">Casa</option><option value="oficina">Oficiona</option><option value="celular">Celular</option><option value="otro">Otro</option><option value="custom">Custom</option></select></label><label for="custom_value"><input class="custom_value" name="custom" type="text"/></label><label for="value_telefonos">Value*<input name="value_telefonos" type="text" /></label><label class="public" for="contact_attributes"><input type="checkbox" value="public" />Public</label><label class="primary" for="contact_attributes"><input type="checkbox" value="primary" />Primary</label>	</div>'
				$(this).parent().append($(obj).click(callback));
			}
	}
	$(this).find('.more-inputs').click(callback);
	});
	customChange();
	optionDireccion();	
});