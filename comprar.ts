let producto: string[] = [
  "dulce de leche",
  "cerveza",
  "ginebra",
  "gaseosa coca-cola",
  "azucar ledesma",
  "turron arcor"
];
let precio: number[] = [100, 100, 100, 100, 100, 100];
let stock: number[] = [100, 100, 100, 100, 100, 100];
let divElementos = document.getElementById("elementos");
let divPrincipal = document.getElementById("principal");

function cargarProductos() {
  for (let i: number = 0; i < stock.length; i++) {
    let divProducto = document.createElement("div");
    divProducto.classList.add("producto");
    divProducto.id = 'producto-${i}';
    let nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = producto[i];
    let precioProducto = document.createElement("p");
    precioProducto.innerHTML = '${precioUnitario[i]}';
    let selectorCantidad = document.createElement("input");
    selectorCantidad.id ='selector-cantidad'${i}';
    selectorCantidad.type = "number";
    selectorCantidad.max = String(stock[i]);
    selectorCantidad.min = "0";
    divProducto.appendChild(nombreProducto);
    divProducto.appendChild(precioProducto);
    divProducto.appendChild(selectorCantidad);
    divProducto.appendChild(divProducto);
    let btn = document.createElement("button");
    btn.id = "btn" + [i];
    let cantidadSeleccionada = Number(cantidad.value);

    if (cantidadSeleccionada < 1|| cantidadSeleccionada > stock[i]){
      alert("Ese producto no está en stock");
    } else {
       suma = suma + precio[i]* cantidadSeleccionada;
       sumaTotal = sumaTotal + suma;
       console.log(
         "Cantidad:" + cantidadSeleccionada + " de " + lista[i];
         "el precio es $" + precio[i];
       );
       console.log("El total de " + lista[i] + "es de $" + suma);
       }
      });
      let btnComprar + document.getElementById("comprar");
      btnComprar.addEventListener("click", () =>{
        console.log("La suma total es de $" + sumaTotal);
      });
  }
};
cargarProducto();
comprarProducto();

btn.id = "btn" + [i];
btn.innerText = "Al Carrito";
  

};
let comprarProducto = () => {
  let sumaTotal: number = 0;
  for (let i: number = 0; i < lista.length; i++) {
    let boton = document.getElementById("btn" + [i]);
    boton.addEventListener("click"), () => {
let suma: number =0;
let cantidad = document.getElementById("cantidad" + [i]);
let cantidadSeleccionada = Number(cantidad.value);

Window.onload = cargar();




while(productos.length > 0){
  let p = productos[0]
  data.push([`EAN ${p.EAN}`, `Int ${p.interno}`, p.larga, p.marca])
  productos.shift() 
}


function vaciarCarrito() {
Swal.fire({
title: 'Alerta',
text: 'Estás seguro que deseas vaciar tu carrito?',
showCancelButton: true,
cancelButtonText: "Cancelar",
confirmButtonText: "Aceptar",
}).then(async (result) => {
if (result.value) {
const res = await $.post("/carrito/modificar", { accion: "clear" })
getCarritoSide()
}
})
}

async function FinalizarPedido() {
const {total} = await $.getJSON('/carrito/total')
console.log({ total });
if (total < 500) {
return Swal.fire({
type: "warning",
title: 'Alerta',
text: 'El monto minimo de compra debe superar los $500',
showCancelButton: true,
cancelButtonText: "Cancelar",
confirmButtonText: "Comprar Carrito",
}).then(result => {
if (result.value) window.location = '/producto'
})
}
window.location = '/carrito'
}

async function searchArticulos(tipo) {
let { pathname } = window.location
let busqueda = $('#inputBusqueda').val()

if (pathname != '/productos') {
localStorage.setItem('busqueda', busqueda)
window.location = '/productos'
} else {
BuscarPorNombre(producto)
}
}