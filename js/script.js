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

    obj = {'telefonos': '<a title="Agregar Teléfono" class="more-inputs telefonos" href="#">Telefónos</a><div class="input-container"><label for="category_telefonos">Category<select name="telefonos"><option value="null"></option><option value="casa">Casa</option><option value="oficina">Oficiona</option><option value="celular">Celular</option><option value="otro">Otro</option><option value="custom">Custom</option></select></label><label for="custom_value"><input class="custom_value" name="custom" type="text"/></label><label for="value_telefonos">Value*<input name="value_telefonos" type="text" /></label><label class="public" for="contact_attributes"><input type="checkbox" value="public" />Public</label><label class="primary" for="contact_attributes"><input type="checkbox" value="primary" />Primary</label></div>',
    'emails': '<a title="Agregar Email" class="more-inputs emails" href="#">Emails</a> <div class="input-container"><label for="category_emails">Category<select name="emails"><option value="null"></option><option value="casa">Casa</option><option value="oficina">Oficiona</option><option value="otro">Otro</option><option value="custom">Custom</option></select></label><label for="custom_value"><input class="custom_value" name="custom" type="text"/></label><label for="value_emails">Value*<input name="value_emails" type="text" /></label><label class="public" for="contact_attributes"><input type="checkbox" value="public" />Public</label><label class="primary" for="contact_attributes"><input type="checkbox" value="primary" />Primary</label></div>   ',
    'identifications': '<a title="Agregar Identificación" class="more-inputs identifications" href="#">Identificatións</a><div class="input-container"><label for="category_identifications">Category<select name="identifications"><option value="null"></option><option value="dni">DNI</option><option value="cpf">CPF</option><option value="cup">CUP</option><option value="custom">Custom</option></select></label><label for="custom_value"><input class="custom_value" name="custom" type="text"/></label><label for="value_identifications">Value*<input name="value_identifications" type="text" /></label><label class="public" for="contact_attributes"><input type="checkbox" value="public" />Public</label><label class="primary" for="contact_attributes"><input type="checkbox" value="primary" />Primary</label></div>',
    'direccion': '<a title="Agregar Dirección" class="more-inputs direccion" href="#">Dirección</a><div class="input-container"><label for="category_direccion">Category<select name="direccion"><option value="null"></option><option value="casa">Casa</option><option value="oficina">Oficiona</option><option value="otro">Otro</option><option value="custom">Custom</option></select></label><label for="custom_value"><input class="custom_value" name="custom" type="text"/></label><label for="country_direccion">Country<select name="country"><option value="null"></option><option value="Argentina">Argentina</option></select></label><label for="state_direccion">State<select name="state_direccion"><option value="null"></option><option value="Capital_Federal">Capital Federal</option><option value="Buenos_Aires">Buenos Aires</option></select></label><label for="city_direccion">City<select name="city_direccion"><option value="null"></option><option value="Capital_Federal">Belgrano</option><option value="Buenos_Aires">Palermo</option><option value="Capital_Federal">Martinez</option><option value="Buenos_Aires">Olivos</option><option value="Buenos_Aires">San Isidro</option></select></label><label for="postal_direccion">Postal Code<input class="postal_direccion" name="custom" type="text"/></label><label for="value_direccion">Value*<input name="value_direccion" type="text" /></label><label class="public" for="contact_attributes"><input type="checkbox" value="public" />Public</label><label class="primary" for="contact_attributes"><input type="checkbox" value="primary" />Primary</label></div>',
    'custom_attributes': '<a title="Agregar Otro" class="more-inputs custom_attributes" href="#">Custom Attributes</a><div class="input-container"><label for="name_customAttributes">Name*<input name="name_customAttributes" type="text" /></label><label for="value_customAttributes">Value*<input name="value_customAttributes" type="text" /></label><label class="public" for="contact_attributes"><input type="checkbox" value="public" />Public</label><label class="primary" for="contact_attributes"><input type="checkbox" value="primary" />Primary</label></div>'}

	var deleteInput;
	$('label').each(function() {
		function callback(e) {
			e.preventDefault();
			
			if($(this).hasClass('delete')){
				var array_a = $(this).parent().find('.more-inputs');
				var array_div = $(this).parent().find('.input-container');
				
				var tamanho_elem = 0;
				for(var i=0; i<array_div.length-1; i++)
					tamanho_elem += $(array_div[i]).height();

				$(this).removeClass('delete').parent().css({'height' : 'auto'});
				$(this).next().css({'display' : 'none'});
				
				// remove os últimos elementos inseridos
				$(this).next().remove();
				$(this).remove();
			} else{
				$(this).addClass('delete').next().css({'display' : 'block'}).closest('label').css({'height' : 'auto'});
				
				// clona o objeto
				// verifica qual objeto deve ser clonado, utilizei como marcador a segunda classe quando o objeto esta encolhido
				// telefonos, emails, direccion, ... e pego o objeto correto no array obj
				var obj_class = $(this).attr('class').split(' ')[1];
				$(this).parent().append($(obj[obj_class]).click(callback));
			}
	}
	$(this).find('.more-inputs').click(callback);
	});
	customChange();
	optionDireccion();	
});
