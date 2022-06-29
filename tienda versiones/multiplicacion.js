//tabla multiplicar
//Joel Bautista 
//17/05/2022
//cba sena

//se procede haciendo un  do while para iniciar el proceso de bucle
do{
    //se procede a en otro bucle comenzar a prefunte la tabla que quiere
    do{
         let tabla = prompt("¿Que tabla de multiplicar desea imprimir?(valor por defecto 10)");
      
         //si no digita algo valido o campo vacio se le pondra la tabla del 10
      if(tabla === ""){
        tabla = 10;
      }
  
      //se convierte la tabla a tipó numericp
      tabla = Number(tabla);  
  
      //si tabla ponen letras se pasa a este mensaje que le dira intentelo de nuevo
      if(Number.isNaN(tablas) === true){
        alert("Solo se permiten valores numericos intentelo nuevamente");
      
      }
  
  
      //while aca se saldra cuando se cumpla esta funcion
     }while(Number.isNaN(tablas) === true);

  
     multiplicacionAlert=""
     //aca me va a reccorrer y si es mayor a uno y menor a diez me va a imprimir la tabla con un alert
    for (let i = 1; i < 11; i++) {
      
      multiplicacionAlert=multiplicacionAlert+tablas + " * "+ i +" = " + tabla*i+'\n';
    }
    alert(multiplicacionAlert)
    // se le pregunta si quiere otra tabla de multiplicar
  deseo= confirm("¿Desea otra tabla de multiplicar?");
  }while(deseo === true)