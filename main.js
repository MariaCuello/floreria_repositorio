// clases
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
//clases

//productos por defecto
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
//productos por defecto
  
//variables globales
let importeTotal;
let contador;
let usuarioActivo = localStorage.getItem("usuario_activo");
//variables globales

//la primera vez que entra el valor de usuarioActivo es null (luego nos manejamos con un String)
if(usuarioActivo === null) {
    usuarioActivo = "null";
}
 
/**********Ejecucion del programa************/
//contenedor de la lista de productos
let listaCarrito = [];
const container = document.getElementById("container");

const row = document.createElement("div");
row.className = "row";

//carrito pushbar
let cartImage = document.getElementById('imagen_carrito');
let pushbar = document.getElementById('pushbar');
let openPushbarBtn = document.getElementById('open-pushbar');
let pushbarContent = document.getElementById('pushbar-content'); 

cartImage.addEventListener('click', function() {
    if(listaCarrito.length > 0)
        pushbar.classList.toggle('open');
});
//carrito pushbar

//cargar el carrito al iniciar sesion o al registrarse
const cargarCarritoPushbar = (email) => {
    let listaCarrito = localStorage.getItem("carrito_" + email);
    if(listaCarrito){
        listaCarrito = JSON.parse(listaCarrito);
        listaCarrito.forEach(item => {
            agregarCarrito(item);
        });
    } else
        listaCarrito = [];
};
const duplicados = (producto) => {
    let i = 0;
    for (const item of listaCarrito) {
        if(producto.id === item.id)
            i++;
    }
    return i;
};

const total = () => {
    let total = 0;
    for (const item of listaCarrito) {
        total += item.precio;
    }        
    return total.toFixed(2);
}

const agregarCarrito = (producto) => {
    listaCarrito.push(producto);
    contador = document.getElementById("contador_carrito");
    contador.style.display = 'inline';
    contador.innerHTML = listaCarrito.length + "";

    //comprobar duplicados
    let cantidad = duplicados(producto);
    let precio = producto.precio * cantidad;
    importeTotal = document.getElementById("total");
    if(cantidad > 1){
        let cantidadHTML = document.getElementById(producto.id + "_cantidad");
        let precioHTML = document.getElementById(producto.id + "_precio");
        cantidadHTML.innerHTML = cantidad.toString();
        precioHTML.innerHTML = precio.toFixed(2).toString();
    } else {
        let productoPushbar = document.createElement("div");
        productoPushbar.innerHTML += `
        <div class="row text-center border-bottom">
            <h6 id="${producto.id}_cantidad" class="col-md-3">${cantidad}</h6>
            <h6 class="col-md-3">${producto.nombre}</h6>
            <h6 id="${producto.id}_precio" class="col-md-3">${precio}</h6>
            <div class="col-md-3"><img id="${producto.id}" class="icon" src="/Imagenes/borrar.png"></div>
        </div>    
        `;
        pushbarContent.append(productoPushbar);
        let eliminar = document.getElementById(producto.id);
        eliminar.addEventListener("click", () => {

            //comprobar duplicados
            let cantidad = duplicados(producto) - 1;
            let precio = producto.precio * cantidad;
            if(cantidad >= 1){
                let cantidadHTML = document.getElementById(producto.id + "_cantidad");
                let precioHTML = document.getElementById(producto.id + "_precio");
                cantidadHTML.innerHTML = cantidad.toString();
                precioHTML.innerHTML = precio.toFixed(2).toString();
                listaCarrito.splice(listaCarrito.indexOf(producto), 1);
            } else {
                listaCarrito.splice(listaCarrito.indexOf(producto), 1);
                pushbarContent.removeChild(productoPushbar);    
            }
            
            if(listaCarrito.length === 0){
                contador.style.display = 'none';
                pushbar.classList.remove('open');
            }
            contador.innerHTML = listaCarrito.length + "";
            importeTotal.innerHTML = "Total: " + total().toString();
            //guardamos la cesta en el storage si hay un usuario logueado
            if(usuarioActivo !== "null") {
                if(usuarioActivo !== "undefined")
                    localStorage.setItem("carrito_" + usuarioActivo.email, JSON.stringify(listaCarrito));
                else
                    localStorage.setItem("carrito_" + usuarioActivo, JSON.stringify(listaCarrito));
                console.log("entra y elimina ejecuta set" + usuarioActivo);
                localStorage.setItem("carrito_" + usuarioActivo, JSON.stringify(listaCarrito));
            }
        });   
    }
    importeTotal.innerHTML = "Total: " + total().toString();
    //guardamos la cesta en el storage si hay un usuario logueado
    if(usuarioActivo !== "null"){
        if(usuarioActivo !== "undefined")
            localStorage.setItem("carrito_" + usuarioActivo.email, JSON.stringify(listaCarrito));
        else
            localStorage.setItem("carrito_" + usuarioActivo, JSON.stringify(listaCarrito));
        console.log("entra y elimina ejecuta set" + usuarioActivo);
    }
};

//recuperar datos de la cesta en caso de que este iniciada la sesion
if(usuarioActivo !== "null") 
    cargarCarritoPushbar(usuarioActivo);

    
//Añadir los productos al html
productos.forEach((item) => {
    const card = document.createElement("div");
    card.className = "col-lg-2 col-sm-6";
    card.innerHTML = `<div class="card" height=100%">
    <img src="${item.url}"  width="100%" height="200px" alt="">
    <div class="card-body">
        <h5 class="card-title">${item.nombre}</h5>
        <p class="card-text">${item.descripcion}</p>
        <button id="button_${item.id}" class="boton">Añadir a la cesta</button>
    </div>
    </div>`;
    row.append(card);
    container.append(row);

    //Añadir a la cesta
    let button = document.getElementById("button_" + item.id);
    button.addEventListener("click", () => agregarCarrito(item));
  });
  //Añadir los productos al html

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
    return usuario;
  }

const inicioUsuario = () => {

  let inicio_registro = document.createElement("div");
  inicio_registro.className = "d-flex justify-content-center";
  inicio_registro.id = "i_r";
  inicio_registro.innerHTML = `
  <div class="row col-md-6">
  <!-----------------Formulario inicio de sesion---------------->
  <div id="formularioInicioSesion" class="container col-md-6 border-right">
      <form class="inicioSesion">
          <div class="col-md-12">
              <label for="inputEmail4" class="form-label">Email</label>
              <input id="correoIS" type="email" class="form-control" id="inputEmail4" required>
          </div>
          <div class="col-md-12">
              <label for="inputContraseña" class="form-label">Contraseña</label>
              <input id="contrasenaIS" type="password" class="form-control" id="inputContraseña" required>
          </div>
              <button type="submit" class="boton">Iniciar sesion</button>
      </form>
  </div>
  <!-----------------Formulario inicio de sesion---------------->

  <!----------------formulario de registro----------------------->
  <div class="container col-md-6">
      <form id="FormularioRegistro" class="registro">
          <div class="col-12">
              <label for="inputNombre" class="form-label">Nombre</label>
              <input id="nombreR" type="text" class="form-control" id="inputNombre" required>
          </div>
          <div class="col-12">
              <label for="inputApellido" class="form-label">Apellido</label>
              <input id="apellidoR" type="text" class="form-control" id="inputApellido" required>
          </div>
          <div class="col-md-12">
              <label for="inputEmail4" class="form-label">Email</label>
              <input id="correoR" type="email" class="form-control" id="inputEmail4" required>
          </div> 
          <div class="col-md-12">
              <label for="inputContraseña" class="form-label">Contraseña</label>
              <input id="contrasenaR" type="password" class="form-control" id="inputContraseña" required>
          </div>
          <button type="submit" class="boton">Registrar</button>
      </form>
  </div>
</div>
  `
  let dropdown = document.getElementById("dropdown");
  if(usuarioActivo !== "null"){
    dropdown.hidden = false;

    const cerrarSesion = () => {
        localStorage.setItem("usuario_activo", null);
        location.reload();
    };

    let cerrar_sesion = document.getElementById("cerrar_sesion");
    cerrar_sesion.addEventListener("click",() => cerrarSesion());

  } else {
  //añadir al container
  let container_sup = document.getElementById("container_sup");
  if(!container_sup.querySelector("#i_r"))
    container_sup.append(inicio_registro);
  dropdown.hidden = true;
  container.hidden = true;
    
  //inicio sesion
  let formuarioIS = document.getElementById("formularioInicioSesion");
  formuarioIS.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let correo = document.getElementById("correoIS");
    let contrasena = document.getElementById("contrasenaIS");
    usuarioActivo = iniciarSesion(correo.value, contrasena.value);

    if(usuarioActivo){
        localStorage.setItem("usuario_activo", usuarioActivo.email);
        cargarCarritoPushbar(usuarioActivo.email);
        container.hidden = false;
        container_sup.removeChild(inicio_registro);
    } else
        mostrarAlert("Error al iniciar sesion", "Correo o contraseña incorrectos", "error", false)
  });

  //registro
  let formuarioR = document.getElementById("FormularioRegistro");
  formuarioR.addEventListener("submit", (e) => {
    e.preventDefault();

    let correo = document.getElementById("correoR");
    let contrasena = document.getElementById("contrasenaR");
    let nombre = document.getElementById("nombreR");
    let apellido = document.getElementById("apellidoR");
    usuarioActivo = registro(nombre.value, apellido.value, correo.value, contrasena.value);

    if(usuarioActivo){
        localStorage.setItem("usuario_activo", usuarioActivo.email);
        container.hidden = false;
        container_sup.removeChild(inicio_registro);
    }
    else
        mostrarAlert("Error al registrarse", "No se ha podido crear el usuario", "error", false);
    });
  }
};

//boton inicio de sesion o registro
let boton_usuario = document.getElementById("inicio_usuario");
boton_usuario.addEventListener("click",() => inicioUsuario());

let boton_comprar = document.getElementById("pushbar-boton-comprar");
boton_comprar.addEventListener("click",() => mostrarAlert("Gracias por su compra!", "Compra realizada con exito", "success", true));

//Seweet alert mensaje de aviso
function mostrarAlert (titulo, mensaje, tipo, comprar) {
    Swal.fire({
        title: titulo,
        text: mensaje,
        type: tipo
    }).then(function() {
        if(comprar) {
            listaCarrito = [];
            if(usuarioActivo !== "undefined")
                    localStorage.setItem("carrito_" + usuarioActivo.email, JSON.stringify(listaCarrito));
                else
                    localStorage.setItem("carrito_" + usuarioActivo, JSON.stringify(listaCarrito));
            location.reload();
        }
    });
}
    