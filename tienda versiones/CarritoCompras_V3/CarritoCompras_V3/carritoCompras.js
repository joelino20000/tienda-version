//importamos el archivo JSON que contiene el arreglo de objetos por defecto del catalogo
import datosArchivo from './datos.json' assert { type: 'json' };
// Clase que gestiona cada uno de los productos que se tienen para la venta
class ProductoTienda {

     //atributos de la clase ProductoTienda
     #codigoProducto;
     #nombreProducto;
     #inventarioProducto;
     #precioProducto;

     //Metodo constructor que inicializa  los atributos
     constructor(){

          this.#codigoProducto = '';
          this.#nombreProducto = '';
          this.#inventarioProducto = 0;
          this.#precioProducto = 0.0;

     }

//Metodos getter y setter para los productos que se tienen a la venta
     get getCodigoProducto() {
          return this.#codigoProducto;
     }

     set setCodigoProducto(value) {
          this.#codigoProducto = value;
     }

     get getNombreProducto() {
          return this.#nombreProducto;
     }

     set setNombreProducto(value) {
          this.#nombreProducto = value;
     }

     get getInventarioProducto() {
          return this.#inventarioProducto;
     }

     set setInventarioProducto(value) {
          this.#inventarioProducto = value;
     }

     get getPrecioProducto() {
          return this.#precioProducto;
     }

     set setPrecioProducto(value) {
          this.#precioProducto = value;
     }

}
//Clase que gestiona los productos que se tienen para la venta en la tienda
class GestionarProductosTienda {

// atributos de la clase GestionarProductosTienda
     #cargaProductos;

// se incializa con el constructor con el que se define un arreglo 
     constructor(){

          this.#cargaProductos = [];

     }


//Este metodo nos retorna el arreglo anteriormente creado
     getDatosProductosCargados() {
          return this.#cargaProductos;
     }

     // cargaManualProducto es un metodo de la clase GestionarProductosTienda
     cargaManualProducto(){

          //let dato se inicializa en vacio para contener el codigo y nombre del producto nuevo
          let dato = "";
          
          //While para la respuesta true en caso de que se quiera digitar un nuevo producto para vender
          //Si el While tiene respuesta false se omite 
          while (confirm('¿Desea digitar un nuevo producto?')){

               
               // let producto nos esta diciendo que todo con la clase de productoTienda se referencia con la variable producto
               let producto = new ProductoTienda();

               do{
                    // se trae datosProductos para que el codigo del procuto y lo guarde en dato 
                    dato = this.datosProducto("Digite Codigo del Producto ==> ","numerico");
                    
                    //this.verificarCodigoProducto sirve para verificar que el codigo no este repetido
               } while (this.verificarCodigoProducto(dato));

               //Validacion de datos para el código del producto(el código digitado lo transforma a mayuscula)
               producto.setCodigoProducto = dato.toUpperCase();
               
               do{
                    dato = this.datosProducto("Digite Nombre del Producto ==> ","texto");
               } while (this.verificarNombreProducto(dato.toUpperCase()));
                //Validacion de datos para el Nombre del producto(el Nombre digitado lo transforma a mayuscula)
               producto.setNombreProducto = dato.toUpperCase();

               //producto  setInventarioProducto nos guarda el inventario del producto
               producto.setInventarioProducto = Number(this.datosProducto("Digite Inventario del Producto ==> ","numerico"));
               //producto.setPrecioProducto nos guarda el precio de cada producto
               producto.setPrecioProducto = Number(this.datosProducto("Digite Precio del Producto ==> ","numerico"));
     
               //esta tomando todo en el arreglo
               this.#cargaProductos.push(producto);
     


          }
     }
     //cargaArchivoProductos es un metodo de la clase GestionarProductosTienda
     cargaArchivoProductos(){
          
          //definimos un nuevo iterador
          let i=0;

          /*función if para comparar la variable datosArchivo que contiene el archivo json  
          En caso de que sea mayor a cero recorre el arreglo de objetos y le otorga los metodos
          para que dejen de ser prototipos*/
          if (datosArchivo.length > 0){
               
               //Funcion foreach para recorrer el arreglo y validar sus datos y definir la variable objeto para poder recorrerlo
               datosArchivo.forEach(objeto => {

                    //Sumamos el iterador en uno 
                    i++;
                    //se referencia la clase ProductoTienda con producto
                    let producto = new ProductoTienda();
                    // en producto.setCodigoProducto  para guardar todo el codigo  y toUpperCase sirve para convertirlos a mayuscula
                    producto.setCodigoProducto = objeto.codigoProducto.toUpperCase();
                    // en producto.setNombreProducto  para guardar todo el nombre de producto   y toUpperCase sirve para convertirlos a mayuscula
                    producto.setNombreProducto = objeto.nombreProducto.toUpperCase();
                    //en producto.setInventarioProducto aca se va a digitar la cantidad de productos que hay 
                     producto.setInventarioProducto = objeto.inventarioProducto;
                    //producto.setPrecioProducto se va a guardar el precio del producto
                    producto.setPrecioProducto = objeto.precioProducto; 
                    
                    //Se toman los productos  y se guardan en el arreglo
                    this.#cargaProductos.push(producto);
     
               });  

          };
          
          //console para mostrarnos el total de productos guardados en el carrito
          console.log("Total de productos cargados ==> " + i);

     }

     //almacenaProductos sirve para Deserializar en el archivo JSON
     almacenaProductos(datosClase){
          // localStorage almacena Cada dato, sera un item que tendra una key y un value
          localStorage.setItem("productosTienda",JSON.stringify(datosClase));
          //datosJson es una variable que guarda localStorage
          let datosJson = localStorage.getItem("productosTienda");
          
     }

     // datosProducto sirve para capturar un valor y despues retornarlo
     datosProducto(mensaje,tipo){
          let valor = "";
        
          if(tipo==="numerico")valor=validacionNumero(mensaje)
          if(tipo=== "texto")valor= validacionNombre(mensaje)
          return valor;
     }

     // verificarCodigoProducto es un metodo de la clase CompraProductoTienda codigo
     verificarCodigoProducto(codigo){

          // es una variable que nos va a retornar una opcion falsa o verdadera
          let sw = false;
          /* BreakException  para generar unas excepciones o error y si no esta la solucion en el catch el programa
           se detendra*/
          let BreakException = {};

          /*se usa un if para tomar  el arreglo  y comparar que sean mayor a 0   y entrar al try */ 
          if (this.#cargaProductos.length > 0){

               //try es un bloque de instrucciones a intentar 
               try {
                    //cargaProductos.forEach recorre el arreglo 
                    this.#cargaProductos.forEach(objeto => {
                         /*Este if dice que el getCodigoProducto tiene que ser estrictamente igual a codigo 
                         y si  es asi es verdadero throw da solucion o exepcion al error*/
                         if (objeto.getCodigoProducto === codigo){
                              sw = true;
                              throw BreakException;
                         };
                    });
               /* es la  ejecucion  por si se produce una excepcion o un error a las instrucciones 
               realizar ciertas instrucciones*/
               } catch (e) {
                    //  si e es diferente al BreakException mandeme   throw genera una solucion a try 
                    if (e !== BreakException) throw e;
               };
               // else significa si no 
          } else{
               // si todo lo anterior no se cumple salteme un falso
               sw = false;
          }
          //
          return sw;
     }
     
     //verificarNombreProducto es un metodo 
     verificarNombreProducto(nombre){

          //funcion bandera que nos retorna dos valores falso o verdadero
          let sw = false;
          
          /* BreakException  para generar unas excepciones o error y si no esta la solucion en el catch el programa
           se detendra*/
          let BreakException = {};

          /*se usa un if para tomar  el arreglo  y comparar que sean mayor a 0   y entrar al try */ 
          if (this.#cargaProductos.length > 0){
               //try es un bloque de instrucciones a intentar
               try {
                     //cargaProductos.forEach recorre el arreglo  
                    this.#cargaProductos.forEach(objeto => {
                         /*Este if dice que el getCodigoProducto tiene que ser estrictamente igual a codigo 
                         y si  es asi es verdadero throw da solucion o exepcion al error*/  
                         if (objeto.getNombreProducto === nombre){
                              sw = true;
                              throw BreakException;
                         };
                    })
                    /* es la  ejecucion  por si se produce una excepcion o un error a las instrucciones 
               realizar ciertas instrucciones*/
               } catch (e) {
                    //  si e es diferente al BreakException mandeme   throw genera una solucion  a try
                    if ( e !== BreakException) throw e;
               };
               // else significa si no
          } else{
               // si todo lo anterior no se cumple salteme un falso
               sw = false;
          }
          //
          return sw;
     }

     //mostrarProductos sirve para crear una lista de los productos que se van a vender
     mostrarProductos(datosProductos){
          
          //definimos un nuevo iterador
          let i=0;
          
       /esta consola muesta los productos disponibles y que estan dentro del arreglo/ 
          console.log ("                                   PRODUCTOS DISPONIBLES - TIENDA ONLINE");
          console.log ("| CODIGO | PRODUCTO | INVENTARIO | P.V.P. |");

          //datosProductos lo va a recorrer con un foreach  producto  la cual nos va a mostrar la factura
          datosProductos.forEach(producto => {
               console.log("|   " + producto.getCodigoProducto + "   | " + producto.getNombreProducto + " |      " +
               producto.getInventarioProducto + "     | " + (producto.getPrecioProducto).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " | ");
          });
          console.log(" ");          
     }

}
function validacionNombre(texto) {

     do {
       let nombre = prompt(texto);
   
       if (nombre !== "" && !(!/^[a-zA-Z ]*$/g.test(nombre)))
         return nombre;
     } while (true);
   }
   function validacionNumero(texto) {
   
     do {
       let nombre = prompt(texto);
   
       if (nombre !== "" && !(!/^[0-9]*$/g.test(nombre)))
         return nombre;
     } while (true);
   }
//clase que gestiona cada uno de los productos que el cliente tiene en el carrito de compras
class CompraProductoTienda {
     
     //atributos de la clase 
     #clienteCompra;
     #productoCompra;
     #cantidadCompra;
     #precioCompra;

     //metodo constructor que inicializa los atributos de la clase
     constructor() {

          this.#clienteCompra = '';
          this.#productoCompra = '';
          this.#cantidadCompra = 0;
          this.#precioCompra = 0.0;

     }

     //Función para realizar la multiplicación entre la cantidad y el precio de los productos, retornando el valor 
     calculaValorCompra() {
          return this.#cantidadCompra * this.#precioCompra;
     }

     // datosCompra sirve para capturar un valor y despues retornarlo
     datosCompra(mensaje){
          let valor = prompt(mensaje);
          return valor;
     }

     //Es un metodo de la clase CompraProductoTienda
     datoCodigoProducto(datosProductos){
          
          //sw sirve para comprobar si no existe un código
          let sw = true;
          /* BreakException  para generar unas excepciones o error y si no esta la solucion en el catch el programa
           se detendra*/
          let BreakException = {};
          // 
          let valor = "";
          
          //do sirve para entrar a un ciclo
          do {
               //valor nos almacena el código digitado por el cliente
               valor = prompt("Digite Codigo Producto ==> ");
               
               //try es un bloque de instrucciones a intentar 
               try {
                    //
                    datosProductos.forEach((objeto, index) => {
                         //if compara los codigos digitados con los existentes
                         if (objeto.getCodigoProducto === valor){
                              //
                              this.setCantidadCompra = objeto.getInventarioProducto;
                              //
                              this.setPrecioCompra = objeto.getPrecioProducto;
                              //valor almacena el nombre del producto 
                              valor = objeto.getNombreProducto;
                              //
                              sw = false;
                              //throw genera una excepcion
                              throw BreakException;
                         };
                    });
               /*catch es la  ejecucion por si se produce una excepcion o un error a las instrucciones 
               realizar ciertas instrucciones*/
               } catch (e) {
                    if (e !== BreakException) throw e;
               };
               //este if define que el sw es true nos muestra el mensaje  
               if (sw){
                    console.log("Codigo no existe. ¡Verifique!");
               }
          } while (sw);

          //retornamos los códigos
          return valor;
     }

     //  datoCantidadProducto es un metodo de la clase CompraProductoTienda
     datoCantidadProducto (datosProductos){

          //sw sirve para comprobar si no existe un código
          let sw = true;
          // se inicializa la variable valor
          let valor = "";
          /* BreakException  para generar unas excepciones o error y si no esta la solucion en el catch el programa
           se detendra*/
          let BreakException = {};
           //do sirve para entrar a un ciclo 
          do {
               //valor nos almacena el código digitado por el cliente
               valor = Number(prompt("Digite Número de unidades ==>"));
               //si la cantidad digitada del cliente es menor o igual a la cantidad del vendedor siga recorriendo el if
               if (valor <= this.getCantidadCompra){
                    // valor se guarda en  setCantidadCompra
                    this.setCantidadCompra = valor;
                    //try es un bloque de instrucciones a intentar 
                    try {
                         //cargaProductos.forEach recorre el arreglo
                         datosProductos.forEach((objeto, index) => {
                              /*if sirve para comparar el nombre del producto que quiere comprar el usuario 
                              con el nombre que tienen los objetos a vender*/
                              if (objeto.getNombreProducto === this.getProductoCompra){
                                   /*objeto.setInventarioProducto almacena la resta de los 
                                   productos que hay en bodega con los que compra el cliente*/
                                   objeto.setInventarioProducto = objeto.getInventarioProducto - this.getCantidadCompra;
                                   // genera una excepcion 
                                   throw BreakException;
                              };
                         });
                         /* es la  ejecucion  por si se produce una excepcion o un error a las instrucciones 
               realizar ciertas instrucciones*/
                    } catch (e) {
                         //  si e es diferente al BreakException mandeme   throw genera una solucion  a try
                         if (e !== BreakException) throw e;
                    };
     
                    sw = false;
               }//si la cantidad digita por el usuario es mayor da el siguiente mensaje
               else{
                    console.log ("Cantidad digitada excede las existencias. ¡Verifique!");
               };
          } // este while devuelve al inicio para que el usuario digite de nuevo la cantidad
          while (sw);
          //retorna el valor de la cantidad del producto
          return valor;
     }

     //Metodos getter y setter para la compra de los productos
     get getClienteCompra() {
          return this.#clienteCompra;
     }

     set setClienteCompra(value) {
          this.#clienteCompra = value;
     }

     get getProductoCompra() {
          return this.#productoCompra;
     }

     set setProductoCompra(value) {
          this.#productoCompra = value;
     }

     get getCantidadCompra() {
          return this.#cantidadCompra;
     }

     set setCantidadCompra(value) {
          this.#cantidadCompra = value;
     }

     get getPrecioCompra() {
          return this.#precioCompra;
     }

     set setPrecioCompra(value) {
          this.#precioCompra = value;
     }

}
//se finaliza la clase CompraProductoTienda

//la clase CarritoCompra
class CarritoCompra{
      //Atributos de la clase CarritoCompra
     #productosCarrito;

     //metodo constructor  de los atributos de la clase CarritoCompra
     constructor(){
          //construimos un arreglo  
          this.#productosCarrito = [];

     }

     //metodo de la clase CarritoCompra  con parametros de el nombre de la persona y el arreglo 
     nuevoProducto(nombre, datosProductos){

          //referenciamos producto como un nuevo objeto de la clase CompraProductoTienda
          let producto = new CompraProductoTienda();

          //se guarda el nombre del cliente para que no la vuelva a pedir
          producto.setClienteCompra = nombre;
          /*se guarda el codigo del producto que quiere el cliente en producto.setProductoCompra
           la cual se encuentra en el arreglo */
          producto.setProductoCompra = producto.datoCodigoProducto(datosProductos);
          /*se guarda la cantidad del producto que quiere el cliente en producto.setCantidadCompra
          la cual se encuentra en el arreglo */
          producto.setCantidadCompra = producto.datoCantidadProducto(datosProductos);

          //toma los productos y los almacena en el arreglo #productosCarrito
          this.#productosCarrito.push(producto);
     }
     
     //mostrarCompra sirve para crear una factura de los productos que se van a comprar
     mostrarCompra(carrito){

          //definimos un iterador
          let i=0;
          //variable para tomar la cantidad de productos que el usuario va a comprar
          let compra = 0;

          console.log ("                                   FACTURA DE VENTA - TIENDA ONLINE");
          console.log ("|       PRODUCTO     |   CANTIDAD  |   P.V.P.   |   SUBTOTAL   |");

          //Función flecha para dar formato al documento
          carrito.forEach(objeto => {
               compra += objeto.calculaValorCompra();
               console.log("|      " + objeto.getProductoCompra + "      |       " + objeto.getCantidadCompra + "     | " +
               objeto.getPrecioCompra.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "  |  " + (objeto.calculaValorCompra()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "   | ");
          });
          console.log("");  
          //Le damos formato a los números del valor total. Por ejemplo "200.000.00"
          console.log("Valor Total de la Factura ==> ", (compra).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));     
          console.log("¡Gracias por su compra!");
     }

     //Metodo get que nos retorna el arreglo de productos
     get carritoCompra(){
          return this.#productosCarrito;
     }

     //meto get que nos retorna el numero de productos que tenemos guardados en el carrito de compras
     get numeroProductos(){
          return this.#productosCarrito.length;
     }
}

//funsión que nos retorna el nombre del cliente
function setNombreCliente(){
     //nombre nos almacena el nombre del ciente
     let nombre = validacionNombre('Nombre del Cliente');
     //Damos formato al nombre del cliente (lo transformamos a mayúsculas)
     nombre = nombre.toUpperCase();
     //retornamos el nombre del cliente
     return nombre;
}

// 
let sw = true;
//
let nombre = '';

//referenciamos productosTienda como un nuevo objeto de la clase GestionarProductosTienda
let productosTienda = new GestionarProductosTienda();

//Inicializamos  la funcion cargaArchivoProducto
productosTienda.cargaArchivoProductos();

//Inicializamos  la funcion cargaManualProducto()
productosTienda.cargaManualProducto();

//
productosTienda.almacenaProductos(productosTienda.getDatosProductosCargados());

//referenciamos canasta como un nuevo objeto de la clase CarritoCompra
let canasta = new CarritoCompra();

//While para preguntar si existe un nuevo cliente y almacenar sus datos 
while (confirm('¿Existe un nuevo Cliente?')){
    //do sirve para entrar a un ciclo 
     do{
          //nombre nos almacena el nombre del nuevo cliente
          nombre = setNombreCliente();
          //en caso de que el usuario digite numeric, le volverá a preguntar por el nombre hasta que digite string
         if (nombre === ""){
               sw = true;          
          } else {
               sw = false;
          };
     }// En este while devuelve a el cliente a digitar su nombre por no digitar string
     while (sw);  

    //do sirve para entrar a un ciclo 
     do{
          //Mostramos los productos disponibles 
          productosTienda.mostrarProductos(productosTienda.getDatosProductosCargados());
          //Guardamos los datos del producto que el nuevo cliente quiera comprar
          canasta.nuevoProducto(nombre, productosTienda.getDatosProductosCargados());
          
     } //Preguntamos si el cliente desea comprar un nuevo producto, en caso true, volvemos a realizar el proceso
     while (confirm('¿Desea un nuevo producto?'));

     //se imprime todo lo que haya en canasta.numeroProductos
     console.log(canasta.numeroProductos);
     //e imprime todo lo que haya en canasta.carritoCompra
     console.log(canasta.carritoCompra);
     //Imprimimos el nombre del cliente 
     console.log('Nombre del Cliente ==> ' + canasta.carritoCompra[0].getClienteCompra);
     //nos muestra lo que tenemos en el carrito
     canasta.mostrarCompra(canasta.carritoCompra);
}
// validacion de letras


/*preguntas 
preguntar para que sirve de la linea 157 a 163,
preguntar linea 204,
para que sirve linea 172 la palabra codigo,
preguntar 210,
preguntar 244,
preguntar 305,
preguntar por if 317 a  328,
pregutar 521,
pregutar 558
*/