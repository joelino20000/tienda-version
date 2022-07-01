//carrito version 1
//Joel Bautista 
//17/05/2022
//cba sena
//se crea la clase compra tienda
class CompraTienda {
    //propiedades :: Atributos
    #nombreCliente;
    #productoCompra;
    #cantidadCompra;
    #precioCompra;
    //metodo constructor la cual nos sirve para definir los atributos o inicializarlos y con el this los traemos
    constructor() {
    this.#nombreCliente = "";
    this.#productoCompra = "";
    this.#cantidadCompra = 0;
    this.#precioCompra = 0;
    }
      //aca se multiplica dos atributos de la clase y multiplicarlo haciendolo un metodo de la clase
    calculaValorCompra() {
    return this.#cantidadCompra * this.#precioCompra;
    }
      //para capturar los datos la cual se va a guardar el producto , el numero, y el precio
    capturaDato(mensaje){
    let valor = prompt(mensaje);
    return valor;
    }
      //trae el objeto
    get getNombreCliente() {
    return this.#nombreCliente;
    }
      //se le cambia el valor al objeto
    set setNombreCliente(value) {
    this.#nombreCliente = value;
    }
      //trae el objeto
    get getProductoCompra() {
    return this.#productoCompra;
    }
      //se le cambia el valor al objeto
    set setProductoCompra(value) {
    this.#productoCompra = value;
    }
      //trae el objeto con get
    get getCantidadCompra() {
    return this.#cantidadCompra;
    }
      //se le cambia el valor al objeto con set
    set setCantidadCompra(value) {
    this.#cantidadCompra = value;
    }
      //trae el objeto con get
    get getPrecioCompra() {
    return this.#precioCompra;
    }
      //se le cambia el valor con set
    set setPrecioCompra(value) {
    this.#precioCompra = value;
    }
    }
    //se crea una nueva clase
    class CarritoTienda{
    //se encabsula el productos con #
      #productos = [];
      //se crea un metodo constructor para inicializar variables o objetos en este caso la variable atributo
    constructor(){
    this.#productos = [];
    }
   
      //se trae el metodo constructor con referencia a producto
    nuevoProducto(nombre){
    let producto = new CompraTienda();
    producto.setNombreCliente = nombre;
    producto.setProductoCompra = producto.capturaDato('Digite el producto a comprar ==> ');
    producto.setCantidadCompra = producto.capturaDato('Digite numero de unidades ==> ');
    producto.setPrecioCompra = producto.capturaDato('Digite precio del Producto ==> ');
    this.#productos.push(producto);
    return producto;
    }
      //se trae los objetos el arreglo productos que enviamos
    get carritoCompra(){
    return this.#productos;
    }
      //se trae la cantidad de cada objeto
    get numeroProductos(){
    return this.#productos.length;
    }
    }
    //se captura el nombre del cliente y despues se retorna la variable donde quedo guardado el nombre con nombre cliente
    function capturaNombreCliente(){
    let nombre = prompt('Nombre del Cliente');
    return nombre;
    }
//se definen unas variables
    let sw = true;
    let respuesta = true;
    let nombre = '';
//se comienza a usar el primer do para darle funcion a nuestro codigo  
do{
  //se captura el nombre y debe ser estrictamente de caracter streng
    do{
    nombre = capturaNombreCliente();
    if (nombre === ""){
    sw = true;
    } else {
    sw = false;
    }
    } while (sw);
  //se trae la clase carrito tienda con referencia en canasta
    let canasta = new CarritoTienda();
   //se le pregunta al ususario si quiere seguir usando el producto o quiere dejar que ya le haga la pregunta
  do{
    canasta.nuevoProducto(nombre);
    respuesta = confirm('¿Desea un nuevo producto?');
    }while(respuesta);
    console.log('Nombre del Cliente ==> ' + canasta.carritoCompra[0].getNombreCliente);
  //se incrementa de 1 a 1
    let i=0;
    let compra = 0;
  //se muestra ya el valor final de escritura  
    canasta.carritoCompra.forEach(producto => {
    i++;
    compra += producto.calculaValorCompra();
    console.log(i +". " + producto.getProductoCompra + " " + producto.getCantidadCompra +
    " " + producto.getPrecioCompra + " " + (producto.calculaValorCompra()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
    });
    console.log("Valor de la Compra ==> ", (compra).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
    respuesta = confirm('¿Existe un nuevo Cliente?');
    }while (respuesta);
