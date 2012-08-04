/*function CustomForm(class){
        this.inputArray = $('input');
	this.selectArray = $('select');
	this.optionArray = $('option');
        this.inputType = [];
        this.spanInput = [];
	this.spanSelect = [];
        this.start();
		this.class = class;
}
CustomForm.prototype.start = function(){
        for(var i = 0; i < this.inputArray.length; i++){
                if( (this.inputArray[i].type == 'checkbox' || this.inputArray[i].type == 'radio') && this.inputArray[i].className == this.class ){
                        $(this.inputArray[i]).hide();
                        this.spanInput[i] = document.createElement("span");
                        this.spanInput[i].className = this.inputArray[i].type;                        
                        if(this.inputArray[i].checked == true){
                                this.spanInput[i].className += ' checked';
                        }       
                        $(this.spanInput[i]).insertBefore(this.inputArray[i]);
                        this.inputArray[i].onchange = $.proxy(this.clear, this);
                        if(!this.inputArray[i].getAttribute("disabled")) {
				$(this.spanInput[i]).bind('mousedown', $.proxy(this.pushed, this));
				$(this.spanInput[i]).bind('mouseup', $.proxy(this.check, this));
				$(this.inputArray[i]).bind('mouseup', $.proxy(this.check, this));
                        } else {
                                this.spanInput[i].className += ' disabled';
                        }
                }
        }
	for(var i = 0; i < this.selectArray.length; i++){
		if( $(this.selectArray[i]).hasClass(this.class) ){
			$(this.selectArray[i]).css({'opacity':'0'});
			option = this.selectArray[i].getElementsByTagName('option');
			active = option[0].childNodes[0].nodeValue;
			textnode = document.createTextNode(active);
			for(var cont = 0; cont < option.length; cont++) {
				if(option[cont].selected == true) {
					textnode = document.createTextNode(option[cont].childNodes[0].nodeValue);
				}
			}
			this.spanSelect[i] = document.createElement('span');
			this.spanSelect[i].className = 'select';
			var name = this.selectArray[i].name.replace( /\[/g, '-' ).replace( /\]/g, '' )
			this.spanSelect[i].id = 'select-' + name;
			this.spanSelect[i].appendChild(textnode);
			$(this.spanSelect[i]).insertBefore(this.selectArray[i]);
			if($(this.spanSelect[i]).is(':visible')){
				$(this.spanSelect[i]).css({'width': ( $(this.selectArray[i]).outerWidth() -40 ) ,'height':$(this.selectArray[i]).outerHeight()})
			}else{
				$(this.spanSelect[i]).css({'width': ( $(this.selectArray[i]).outerWidth() -40 ) ,'height':$(this.selectArray[i]).outerHeight()})
			}
			if(!this.selectArray[i].getAttribute('disabled')){
				$(this.selectArray[i]).bind('change', $.proxy(this.choose, this));
			} else {
				this.selectArray[i].previousSibling.className += ' disabled';
			}
		}
	}
	$(document).bind('mouseup', $.proxy(this.clear, this));
}
CustomForm.prototype.clear = function(){
        for(var i = 0; i < this.inputArray.length; i++) {
                if(this.inputArray[i].checked == true && this.inputArray[i].className == "styled") {
                        $(this.inputArray[i]).prev().addClass('checked');
                }else if(this.inputArray[i].className == "styled"){
                        $(this.inputArray[i]).prev().removeClass('checked');
                }
        }
}
CustomForm.prototype.pushed = function(e){
        var element = e.currentTarget.nextSibling;
        if(element.checked == true) {
                $(e.currentTarget).removeClass('checked');
	}else {
		$(e.currentTarget).addClass('checked click');
	}
}
CustomForm.prototype.check = function(e){
        var element = e.currentTarget.nextSibling;
        if(element.checked == true && element.type == 'checkbox') {
                $(e.currentTarget).removeClass('checked click');
                element.checked = false;
        } else {
                if(element.type == "checkbox") {
                        $(e.currentTarget).addClass('checked');
                }else {
                        $(e.currentTarget).addClass('checked');
                        group = element.name;
                        for(i = 0; i < this.inputArray.length; i++) {
                                if( this.inputArray[i].name == group && this.inputArray[i] != element) {
                                        $(this.inputArray[i]).prev().removeClass('checked');
                                }
                        }  
                }
                element.checked = true;
        }
}
CustomForm.prototype.choose = function(e){
	var element = e.currentTarget;
	var optionArray = ($(element).find('option'))
	for(var i = 0; i < optionArray.length; i++){
		if(optionArray[i].selected == true) {
			var name = e.currentTarget.name.replace( /\[/g, '-' ).replace( /\]/g, '')
			var value = $(optionArray[i]).text();
			$('#select-' + name).html(value);
		}
	}
}

var formulario = new CustomForm('styled');*/