/*Permite solo el ingreso de letras mayusculas, minusculas en el nombre*/
$("#nombre").keypress(function (key) {
	//permite solo reconocer letras, retroceso y espacio.
            window.console.log(key.charCode)
            if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
                && (key.charCode < 65 || key.charCode > 90) //letras minusculas
                && (key.charCode != 45) //retroceso
                && (key.charCode != 241) //ñ
                 && (key.charCode != 209) //Ñ
                 && (key.charCode != 32) //espacio
                 && (key.charCode != 225) //á
                 && (key.charCode != 233) //é
                 && (key.charCode != 237) //í
                 && (key.charCode != 243) //ó
                 && (key.charCode != 250) //ú
                 && (key.charCode != 193) //Á
                 && (key.charCode != 201) //É
                 && (key.charCode != 205) //Í
                 && (key.charCode != 211) //Ó
                 && (key.charCode != 218) //Ú
 
                )

                return false;
        });

/*$("#formulario").submit(function () {  
    if($("#email").val().length < 1) {  
        alert("La dirección e-mail es obligatoria");  
        return false;  
    }  
    return false;  
});  */

/*Valida que en el formulario el campo nombre no pueda estar vacío al envíar los datos*/
/*$("#formulario").submit(function () {  
    if($("#nombre").val().length < 1) {  
        alert("El nombre es obligatorio");  
        return false;  
    }  
    return false;  
});  */

/*Permitir solo el ingreso de numeros*/
$("#fono").keyup(function (){
 this.value = (this.value + '').replace(/[^0-9]/g, '');
});



$(document).ready(function(){
    $(".region").change(function(){
  $(this).css("background-color", "#D6D6FF");
      });
}); 