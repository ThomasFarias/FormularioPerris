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
//Valida que tenga que ingresar un mail 
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


//Cambia el color del select al seleccionar
/*$(document).ready(function(){
    $(".region").change(function(){
  $(this).css("background-color", "#D6D6FF");
      });
}); */

/* Valida que el año de nacimiento sea anterior a 2001*/
$(document).ready(function(){
    $("#formulario").submit(function(){
      var anio = $("#fec_nac").val();
      anio = anio.substr(6,4);
      anio = parseInt(anio);
    if(anio>2000){
      alert("El año de nacimiento debe ser menor a 2001");
      return false;
    }
    return true;
  });
});


//Genera una lista desplegable de provincias dependiendo de la region seleccionada
$(document).ready(function() {
  
  $("#region").change(function() {
    
    var reg = $(this) ;
      $("#prov option").remove() ; 
    if(reg.val() === "ARICA Y PARINACOTA" ) {
 
    $("#prov").append("<option>Arica</option>");    
    $("#prov").append("<option>Parinacota</option>");
    }
      else if(reg.val() === "TARAPACÁ" ) {
          
    $("#prov").append("<option>Iquique</option>");    
    $("#prov").append("<option>Tamarugal</option>"); }
 


    
else if(reg.val() === "ANTOFAGASTA" ) {
          
    $("#prov").append("<option>Antofagasta</option>");    
    $("#prov").append("<option>El loa</option>");    
    $("#prov").append("<option>Tocopilla</option>"); }
  
 else if(reg.val() === "ATACAMA" ) {
          
    $("#prov").append("<option>Copiapo</option>");    
    $("#prov").append("<option>Chañaral</option>");    
    $("#prov").append("<option>Tocopilla</option>"); }

 else if(reg.val() === "COQUIMBO" ) {
          
    $("#prov").append("<option>Elqui</option>");    
    $("#prov").append("<option>Choapa</option>");     
    $("#prov").append("<option>Limari</option>"); }

 else if(reg.val() === "VALPARAÍSO" ) {
          
    $("#prov").append("<option>Valparaíso</option>");    
    $("#prov").append("<option>Isla de Pascua</option>");    
    $("#prov").append("<option>San Antonio</option>");
    $("#prov").append("<option>San Felipe de Aconcagua</option>");   }
 
else if(reg.val() === "LIBERTADOR GRAL. BERNARDO O'HIGGINS" ) {
          
    $("#prov").append("<option>Cachapoal</option>");    
    $("#prov").append("<option>Cardenal Caro</option>");    
    $("#prov").append("<option>Colchagua</option>");   }

else if(reg.val() === "MAULE" ) {
          
    $("#prov").append("<option>Talca</option>");    
    $("#prov").append("<option>Cauquenes</option>");    
    $("#prov").append("<option>Curicó</option>");
    $("#prov").append("<option>Linares</option>");   }
 
else if(reg.val() === "BIOBÍO" ) {
          
    $("#prov").append("<option>Concepción</option>");    
    $("#prov").append("<option>Biobío</option>");    
    $("#prov").append("<option>Ñuble</option>");
   }
 
else if(reg.val() === "ARAUCANÍA" ) {
          
    $("#prov").append("<option>Cautín</option>");    
    $("#prov").append("<option>Malleco</option>");    
      }
 
else if(reg.val() === "DE LOS RÍOS" ) {
          
    $("#prov").append("<option>Valdivia</option>");    
    $("#prov").append("<option>Ranco</option>");    

   }
  
else if(reg.val() === "DE LOS LAGOS" ) {
          
    $("#prov").append("<option>Llanquihue</option>");    
    $("#prov").append("<option>Chiloé</option>");    
    $("#prov").append("<option>Osorno</option>"); 
    $("#prov").append("<option>Palena</option>");
   }

else if(reg.val() === "AYSÉN" ) {
          
    $("#prov").append("<option>Coyhaique</option>");    
    $("#prov").append("<option>Aysén</option>");    
    $("#prov").append("<option>Capitán Prat</option>"); 
    $("#prov").append("<option>General Carrera</option>");
   }
 
else if(reg.val() === "MAGALLANES Y DE LA ANTÁRTICA CHILENA" ) {
          
    $("#prov").append("<option>Magallanes</option>");    
    $("#prov").append("<option>Antártica Chilena</option>");    
    $("#prov").append("<option>Tierra del Fuego</option>"); 
    $("#prov").append("<option>Ultima Esperanza</option>");
   }
 
else if(reg.val() === "METROPOLITANA DE SANTIAGO" ) {
          
    $("#prov").append("<option>Santiago</option>");    
    $("#prov").append("<option>Cordillera</option>");    
    $("#prov").append("<option>Chacabuco</option>"); 
    $("#prov").append("<option>Maipo</option>");
   }
  });
   

  
  
});