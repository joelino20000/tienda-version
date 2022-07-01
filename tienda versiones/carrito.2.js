//carrito version 2
//Joel Bautista 
//17/05/2022
//cba sena
//creamos la clase para la zona del cliente
class Vendedor {
  //definimos los atributos
  #nomVendedor;
  #nomProducto;
  #cantProducto;
  #precioProducto;

  //contrusdtor para iniciar los atributos
  constructor(){
    this.#nomVendedor = "";
    this.#nomProducto = "";
    this.#cantProducto = 0;
    this.#precioProducto = 0;
  }

  //metodos getter y setter para los atributos

  get getNombreVendedor(){
    return this.#nomVendedor;
  }
  set setNombreVendedor(value){
    this.#nomVendedor = value;
  }

  get getNombreProducto(){
    return this.#nomProducto;
  }
  set setNombreProducto(value){
    this.#nomProducto = value;
  }

  get getCantidadProducto(){
    return this.#cantProducto
  }
  set setCantidadProducto(value){
    this.#cantProducto = value;
  }

  get getPrecioProducto(){
    return this.#precioProducto;
  }
  set setPrecioProducto(value){
    this.#precioProducto = value;
  }

}


class productosEnVenta {
  //atributos
  #productos = [];
  
  constructor() {
    //inicializamos un arreglo
    this.#productos = [];
  }

  //retornamos el arreglo
  get getProductos(){
    return this.#productos
  }

  //creamos un metodo para validar texto
 /*validacionNombre(texto) {

  do {
    let nombre = prompt(texto);

    if (nombre !== "" && !(!/^[a-zA-Z ]*$/g.test(nombre)))
      return nombre;
  } while (true);
};

  //creamos un metodo para validar numeros
  validacionNumero(texto) {
 
  do {
    let nombre = prompt(texto);
    
    if (nombre !== "" && !(!/^[0-9]*$/g.test(nombre)))
      return nombre;
  } while (true);*/


  //metodo para capturar recolectar los datos de los productos
  capturaVendedor(){
   
  let tienda = new Vendedor;
   
  tienda.setNombreVendedor = nombre;
  tienda.setNombreProducto = validacionNombre('Digite el nombre del producto a vender hoy =>');  
 let cantidad = validacionNumero('Digite la cantidad que tiene en bodega =>');
   tienda.setCantidadProducto= parseInt( cantidad );
 let preciovendedor = validacionNumero('Digite el precio del producto =>');
 tienda.setPrecioProducto= parseInt(   preciovendedor );
  this.#productos.push(tienda);
  return tienda; 
};
  
};
//-------------Cliente---------------------  

class ProductosCliente {
//Atributos 
#nomClient;
#nombProducClient;
#cantProducClient;
#precioProducClient;


constructor(){
  //inicializamos las variables
  this.#nomClient = "";
  this.#nombProducClient = "";
  this.#cantProducClient = 0;
  this.precioProducClient = 0;

}

//metodos getter y setter
get getNombreCliente(){
  return this.#nomClient;
}
set setNombreCliente(value){
  this.#nomClient = value;
}

get getNombreProductosComp(){
  return this.#nombProducClient;
}

set setNombreProductosComp(value){
this.#nombProducClient = value;
}

get getCantidadProductosClient(){
  return this.#cantProducClient;
}
set setCantidadProductosClient(value){
  this.#cantProducClient = value;
}

get getPrecioProducClient(){
  return this.#precioProducClient;
}
set setPrecioProducClient(value){
  this.#precioProducClient = value;
}

}


class ProductosEnMano{
//atributos
#manoCl = [];

//constructor
constructor(){
  //inicializamos el arreglo
  this.manoCl = [];
}

//metodo get para retornar el arreglo
get CarritoCliente (){
  return this.manoCl;
}

//Metodo para capturar los datos del cliente
capturaCliente(){
  
  
  let carrito = new ProductosCliente;     
  carrito.setNombreCliente = nombreCli
  carrito.setNombreProductosComp = capturaProductoCliente()
  let array=capturaCantClient(carrito.getNombreProductosComp)
  carrito.setPrecioProducClient=array[0]
  carrito.setCantidadProductosClient =array[1]


  //enviamos los datos del cliente a carrito
  
  return carrito;  
};
} 








//funcion para validar texto en el apartado de cliente
function validacionNombre(texto) {

  do {
    let nombre = prompt(texto);

    if (nombre !== "" && !(!/^[a-zA-Z ]*$/g.test(nombre)))
      return nombre;
  } while (true);
};

//funcion para validar numero en el apartado de cliente
function  validacionNumero(texto) {

  do {
    let nombre = prompt(texto);

    if (nombre !== "" && !(!/^[0-9]*$/g.test(nombre)))
      return nombre;
  } while (true);
};

//Capturamos el nombre del cliente
function capturaNombreCli(){
  console.log("");
  console.log('--------- Apreciado Cliente ---------');
  nombreCli = validacionNombre('Digite su nombre =>');
  return nombreCli
}



//capturamos el nombre del producto y lo comparamos con el que ofrece el vendedor
function capturaProductoCliente(){
do{
  let producClint = validacionNombre("Digite el nombre del producto que desea comprar =>")
  for (let revisarProd of arreglo.getProductos){
    if(producClint === revisarProd.getNombreProducto)
      return producClint ; 
   }
    console.log("no contamos con ese producto")
  

}while(true)
}

//capturamos la cantidad de porductos que desea comprar el cliente y lo comparamos con la cantidad que se esta vendiendo
function capturaCantClient(nombreProducto){
do{
  let cantiClient = validacionNumero("Digite la cantidad que desea comprar =>")
  //parseInt sirve para convertir string a numero
  do{
  let cantidad = parseInt(cantiClient);
  for (let revisarProd of arreglo.getProductos){
    
    if( cantidad  <= revisarProd.getCantidadProducto && nombreProducto===revisarProd.getNombreProducto){
      
      revisarProd.setCantidadProducto=revisarProd.getCantidadProducto-cantidad

      //realizamos la multiplicacion entre la cantidad que desea comprar el cliente por el precio de venta
      total= cantidad*revisarProd.getPrecioProducto
      let array=[total,cantidad]
      return array
    }
  }
    console.log("No contamos con esta cantidad")  
    sw=false
  
  }while(false)    
}while(true)
}
let nombre="";
nombre = capturaNombre("Nombre del vendedor"); 
//funcion Para capturar el nombre del vendedor

let sw = true;

//capturamos el nombre del vendedor
 function capturaNombre(){
    do{
      console.log('------------- Vendedor -------------');
      let nombre = prompt('Digite su nombre =>');
    if (nombre !== "" && !(!/^[a-zA-Z ]*$/g.test(nombre)))
      return nombre;
    }while(sw)
 };




let arreglo = new productosEnVenta;
//mostramos la tabal de productos a la venta
do{
  //si el vendedor desea agregar un nuevo producto, se repetirá el proceso 
  do{
    arreglo.capturaVendedor(nombre);
    respuesta = confirm("¿Desea agregar un nuevo producto?")
  }while(respuesta)
    console.log("");
    console.log("Nombre del vendedor =>", arreglo.getProductos[0].getNombreVendedor);
  
console.log( "Nombre " , "||" , "Cantidad ", "||", "Precio ")
  arreglo.getProductos.forEach(productos =>{
    
    
    console.log(productos.getNombreProducto , "|| ",productos.getCantidadProducto , " ||",productos.getPrecioProducto)
  });
}while(respuesta)

nombreCli = capturaNombreCli()
let visual = new ProductosEnMano;
//si el cliente desea comprar un nuevo producto, se repetirá el proceso de compra
do{
visual.manoCl.push(visual.capturaCliente(nombreCli))
respuesta = confirm("¿Desea agregar un nuevo producto?")
}while(respuesta)



console.log("cliente "+visual.manoCl[0].getNombreCliente)
console.log('|    Producto    |    Cantidad    |    Precio    |')
let resultado=0
          visual.manoCl.forEach(dato => {
            
            console.log( "|    ",dato.getNombreProductosComp,"    |    ", 
           dato.getCantidadProductosClient,"    |    ",
           dato.getPrecioProducClient,"    ")
            resultado=resultado+dato.getPrecioProducClient
});
console.log("total comprado: "+resultado)
console.log("Gracias por su compra")