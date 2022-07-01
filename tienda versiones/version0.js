//carrito version 0
//Joel Bautista 
//17/05/2022
//cba sena
do{
    //aca se va a pedir el nombre del usuario
    nomb=prompt("cual es tu nombre");
    alert(nomb)
    
    
    
    //Aca se le va a pedir que digite el valor a comprar
    produc=prompt("digite el producto a comprar sinedo c=camisa que vale =20000, p=pantalonque vale=50000, m=medias que vale= M: 5000")
    
    
    
    
    let objetos = {
      C: 20000,
      P: 50000,
      M: 5000
    }
    
      produc=produc.toUpperCase()
    //aca se va a ver el producto que va a comprar
    switch(produc){
      case 'C':
        alert("El producto seleccionado es camisa")
        
        //aca se va a pedir al usuario que digite la cantidad del prodcuto que va a comprar
        canti=prompt("Digite la cantidad del producto a comprar")
       
        cam=objetos.C*canti
        
        alert("Su total a pagar es de " + cam + " pesos" );
        break;
    
        case 'P':
        alert("El producto seleccionado es pantalon")
        
        //aca se va a pedir al usuario que digite la cantidad del prodcuto que va a comprar
        canti=prompt("Digite la cantidad del producto a comprar")
        
        pan=objetos.P*canti
        
        alert("Su total a pagar es de " + pan + " pesos" );
        break;
    
        case 'M':
        alert("El producto seleccionado es medias")
        
        //aca se va a pedir al usuario que digite la cantidad del prodcuto que va a comprar
        canti=prompt("Digite la cantidad del producto a comprar")
        
        med=objetos.M*canti
        
        alert("Su total a pagar es de " + med + " pesos" );
        break;
    
      default:
        console.log("El valor digitado es incorrecto")
    };
      rep = confirm("Desea volver a la tienda ");
      
    }while( rep === true)
    