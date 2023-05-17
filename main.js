class Producto {
    constructor(id, nombre, descripcion, precio) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
} 

const productos = [];
const producto1 = new Producto(0, "Rosas", "Ramo de rosas rojas", 40.99);
const producto2 = new Producto(1, "Tulipanes", "Ramo de tulipanes", 45);
const producto3 = new Producto(2, "Lirios", "Ramo de lirios", 30);
const producto4 = new Producto(3, "Peonias", "Ramo de peonias", 37.99);
const producto5 = new Producto(4, "Clavel", "Ramo de clavel", 44.99);

productos.push(producto1);
productos.push(producto2); 
productos.push(producto3); 
productos.push(producto4); 
productos.push(producto5);   

console.log(productos);

let carrito = "";
let importeTotal = 0;

function mostrarCarrito () {
    prompt ("Carrito\n" + carrito + "\n¿Desea realizar el pago?");
}

function anadirCarrito (){
    let salir = false;
    while (salir === false) {
        
        
        let anadirProducto = prompt ("¿Que producto deseas añadir a la cesta?\nEscribe el nombre del producto\n\n" + 
        "Producto: " + producto1.nombre + "\nDescripcion: " + producto1.descripcion + "\nPrecio: " + producto1.precio + "\n\n" +
        "Producto: " + producto2.nombre + "\nDescripcion: " + producto2.descripcion + "\nPrecio: " + producto2.precio + "\n\n" +
        "Producto: " + producto3.nombre + "\nDescripcion: " + producto3.descripcion + "\nPrecio: " + producto3.precio + "\n\n" +
        "Producto: " + producto4.nombre + "\nDescripcion: " + producto4.descripcion + "\nPrecio: " + producto4.precio + "\n\n" +
        "Producto: " + producto5.nombre + "\nDescripcion: " + producto5.descripcion + "\nPrecio: " + producto5.precio);

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

anadirCarrito ();
mostrarCarrito ();




        





    



