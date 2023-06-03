class Producto {
    constructor(id, nombre, descripcion, precio, url) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.url = url;
    }

    toString() {
        return "Producto: " + this.nombre + " Descripcion: " + this.descripcion + " Precio: " + this.precio + "\n";
    }
} 

//ingreso usuario
class Usuario {
    constructor(nombre,apellido, email, contrasena) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contrasena = contrasena;
    }
    toString() {
        return "Usuario: " + this.nombre + " Apellido: " + this.apellido +
         " Correo: " + this.correo + " Contraseña: " + this.contrasena + "\n";
    }
}

const productos = [];
const producto1 = new Producto(0, "Rosas", "Ramo de rosas, color rosa", 45.99, "/Imagenes/rosas.webp");
const producto2 = new Producto(1, "Tulipanes", "Ramo de tulipanes color blanco", 45, "/Imagenes/ramo-de-tulipanes-blancos.webp");
const producto3 = new Producto(2, "Lirios", "Ramo de lirios blancos", 30, "/Imagenes/liriosblancos.jpg");
const producto4 = new Producto(3, "Peonias", "Ramo de peonias", 37.99, "/Imagenes/peonias.webp");
const producto5 = new Producto(4, "Clavel", "Ramo de clavel color crema", 44.99, "/Imagenes/claveles-crema.jpg");
const producto6 = new Producto(5, "Gerberas", "Ramo de gerberas", 35, "/Imagenes/gerberas.webp");
const producto7 = new Producto(6, "Girasoles", "Ramo de 5 girasoles", 38.99, "/Imagenes/girasoles.webp");
const producto8 = new Producto(7,"Calas naranjas", "Ramo de calas color naranja", 36.50, "/Imagenes/calas-naranjas.webp");
const producto9 = new Producto(8,"Tulipanes rosas", "Ramo de tulipanes", 30, "/Imagenes/ramo-de-tulipanes-rosas.webp");
const producto10 = new Producto(9, "Tulipanes amarillos", "Ramo de tulipanes color amarillo", 46, "/Imagenes/ramo-de-tulipanes-amarillos.webp");
const producto11 = new Producto(10, "Rosas fucsia", "Ramo de rosas color fucsia", 45, "/Imagenes/rosasfucsia.webp");
const producto12 = new Producto(11, "Rosas rojas", "Ramo de rosas rojas", 45, "/Imagenes/rosasrojas.webp");
const producto13 = new Producto(12, "Lirios variedad", "Ramo de lirios de colores", 39.99, "/Imagenes/lirioss.jpg");
const producto14 = new Producto(13, "Tulipanes variedad", "Ramo de variedad de tulipanes", 35, "/Imagenes/tulipanes-amarillos-y-naranjas.jpg");

productos.push(producto1);
productos.push(producto2); 
productos.push(producto3); 
productos.push(producto4); 
productos.push(producto5);
productos.push(producto6);
productos.push(producto7);
productos.push(producto8);
productos.push(producto9);
productos.push(producto10);
productos.push(producto11);
productos.push(producto12);
productos.push(producto13);
productos.push(producto14);
   
let carrito = "";
let importeTotal = 0;

/*function mostrarCarrito () {
    prompt ("Carrito\n" + carrito + "\n¿Desea realizar el pago?");
}*/

function anadirCarrito (){
    let salir = false;
    while (salir === false) {
        
        
        let anadirProducto = prompt ("¿Que producto deseas añadir a la cesta?\nEscribe el nombre del producto\n\n" + 
        "Producto: " + producto1.nombre + "\nDescripcion: " + producto1.descripcion + "\nPrecio: " + producto1.precio + "\n\n" +
        "Producto: " + producto2.nombre + "\nDescripcion: " + producto2.descripcion + "\nPrecio: " + producto2.precio + "\n\n" +
        "Producto: " + producto3.nombre + "\nDescripcion: " + producto3.descripcion + "\nPrecio: " + producto3.precio + "\n\n" +
        "Producto: " + producto4.nombre + "\nDescripcion: " + producto4.descripcion + "\nPrecio: " + producto4.precio + "\n\n" +
        "Producto: " + producto5.nombre + "\nDescripcion: " + producto5.descripcion + "\nPrecio: " + producto5.precio + "\n\n" +
        "Producto: " + producto6.nombre + "\nDescripcion: " + producto6.descripcion + "\nPrecio: " + producto6.precio + "\n\n" +
        "Producto: " + producto7.nombre + "\nDescripcion: " + producto7.descripcion + "\nPrecio: " + producto7.precio + "\n\n" +
        "Producto: " + producto8.nombre + "\nDescripcion: " + producto8.descripcion + "\nPrecio: " + producto8.precio + "\n\n" +
        "Producto: " + producto9.nombre + "\nDescripcion: " + producto9.descripcion + "\nPrecio: " + producto9.precio + "\n\n" +
        "Producto: " + producto10.nombre + "\nDescripcion: " + producto10.descripcion + "\nPrecio: " + producto10.precio + "\n\n" +
        "Producto: " + producto11.nombre + "\nDescripcion: " + producto11.descripcion + "\nPrecio: " + producto11.precio + "\n\n" +
        "Producto: " + producto12.nombre + "\nDescripcion: " + producto12.descripcion + "\nPrecio: " + producto12.precio);

        const producto = productos.find ((item) => item.nombre.toLowerCase() === anadirProducto.toLowerCase()); 
        
        if (producto) {
            carrito += `Producto: ${producto.nombre}\nDescripcion: ${producto.descripcion}\nPrecio: ${producto.precio}\n\n`;
            importeTotal += producto.precio;
        }else {
            alert("El producto no existe");
        }

        let continuar = prompt ("¿Deseas añadir otro producto a la cesta?");
        
        if (continuar === "no") {
                salir = true; 
                carrito += `Total: ${importeTotal.toFixed(2)}\n`; 
        }
    }
}   
 
/**********Ejecucion del programa************/

//anadirCarrito ();
//mostrarCarrito ();


/**********Codigo nuevo*************/
const listaCarrito = [];
//contenedor de la lista de productos
const container = document.getElementById("container");

const row = document.createElement("div");
row.className = "row";


//añadir los productos al html
productos.forEach((item) => {
    const card = document.createElement("div");
    card.className = "col-lg-2 col-sm-6";
    card.innerHTML = `<div class="card" height=100%">
    <img src="${item.url}"  width="100%" height="200px" alt="">
    <div class="card-body">
        <h5 class="card-title">${item.nombre}</h5>
        <p class="card-text">${item.descripcion}</p>
        <a id="button_${item.id}" href="#" class="btn btn-primary">Añadir a la cesta</a>
    </div>
    </div>`;
    row.append(card);
    container.append(row);

    const agregarCarrito = (producto) => {
        alert(producto.toString());
        listaCarrito.push(producto);
    };
        
    let button = document.getElementById("button_" + item.id);
    button.addEventListener("click", () => agregarCarrito(item));
  });

  const mostrarCarrito = () => {
    alert(listaCarrito);
   };

  //cesta de la compra
  let button_carrito = document.getElementById("imagen_carrito");
  button_carrito.addEventListener("click",() => mostrarCarrito());

  function iniciarSesion(correo, contrasena){
    let usuarios = localStorage.getItem("usuarios");
    if(usuarios){
        usuarios = JSON.parse(usuarios);
        const encontrado = usuarios.find((item) => item.email === correo);
        if(encontrado)
            if(encontrado.contrasena === contrasena)
                return encontrado;
    }
    return false;
  }

  function registro(nombre, apellido, correo, contrasena){
    let usuarios = localStorage.getItem("usuarios");
    if(usuarios){
        usuarios = JSON.parse(usuarios);
        const encontrado = usuarios.find((item) => item.email === correo);
        if(encontrado)
            return false;
    }
    else
        usuarios = [];
    const usuario = new Usuario (nombre, apellido, correo, contrasena);
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    return true;
  }
  
  //inicio de sesion
  let formuarioIS = document.getElementById("formularioInicioSesion");
  formuarioIS.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let correo = document.getElementById("correoIS");
    console.log(correo.value);
    let contrasena = document.getElementById("contrasenaIS");
    console.log(contrasena.value);

    if(iniciarSesion(correo.value, contrasena.value))
        //mostrar la lista de productos
        alert("Sesion iniciada");
    else
        alert("Correo o contraseña incorrectos");
  });

  //registro
  let formuarioR = document.getElementById("FormularioRegistro");
  formuarioR.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let correo = document.getElementById("correoR");
    let contrasena = document.getElementById("contrasenaR");
    let nombre = document.getElementById("nombreR");
    let apellido = document.getElementById("apellidoR");

    if(registro(nombre.value, apellido.value, correo.value, contrasena.value))
        alert("Usuario creado correctamente");
    else
        alert("No se ha podido crear el usuario");
  });