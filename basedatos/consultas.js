// Función que devuelve los productos/servicios filtrados por categoría
function obtenerProductosServicios(categoria = "") {
  if (categoria === null || categoria === "") {
    return lista_collares;
  } else {
    let lista_filtrada = lista_collares.filter(producto => producto.codigo_categoria === categoria);
    return lista_filtrada;
  }
}

// Función que devuelve la información de un producto o servicio dado su código
function obtenerProductoServicioPorCodigo(codigo) {
  return lista_collares.find(producto => producto.codigo === codigo);
}

// --------------------------
// Funciones relacionadas con el carrito de compras
// --------------------------

// Mostrar los productos dentro del carrito
function mostrarCarrito() {
  let etiqueta_carrito = document.getElementById("etiqueta_carrito");
  etiqueta_carrito.innerHTML = "";
  let costoTotal = 0;

  let carrito = obtenerCarrito();

  carrito.forEach((elemento, posicion) => {
    let li = document.createElement("li");
    li.innerHTML = `
<div class="d-flex justify-content-between align-items-center p-2 border-bottom border-dark">
   <div class="row">
      <p class="my-0">${elemento.nombre}</p>
      <small>$${elemento.precio.toLocaleString("es-CO")}</small>
   </div>
   <a class="btn bg-warning text-decoration-none text-dark"
      onclick="eliminarProductoServicio('${posicion}')">
      <i class="fa fa-times"></i>
   </a>
</div>`;
    etiqueta_carrito.appendChild(li);
    costoTotal += elemento.precio;
  });

  let etiqueta_total = document.getElementById("etiqueta_total");
  etiqueta_total.innerText = costoTotal.toLocaleString("es-CO");
}

// Obtener el carrito desde localStorage
function obtenerCarrito() {
  const str = localStorage.getItem("carrito");
  let carrito;
  if (!str) {
    carrito = [];
  } else {
    carrito = JSON.parse(str);
  }
  return carrito;
}

// Agregar un producto al carrito
function agregarProductoServicio(codigo, mostrar = true) {
  let producto = obtenerProductoServicioPorCodigo(codigo);
  if (producto) {
    let carrito = obtenerCarrito(); // cargar el carrito actual
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    if (mostrar) {
      mostrarCarrito();
    }
  }
}

// Eliminar un producto del carrito según su posición
function eliminarProductoServicio(posicion) {
  let carrito = obtenerCarrito();
  carrito.splice(posicion, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

// Vaciar todo el carrito
function vaciarCarrito() {
  let carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}