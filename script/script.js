import { productosTienda } from "../assets/data/data.js";

// declaracion de variable
let contenedorCard = document.querySelector(".contenedor-card");
const items =document.getElementById('items')
const templateCard = document.getElementById('template-card').content;
const fragment =document.createDocumentFragment();


productosTienda.forEach((produc) => {
  const { Producto, Descripcion, Tipo, Precio, Imagen } = produc;
     templateCard.querySelector('h5').textContent = Producto
    templateCard.querySelector('img').setAttribute('src', Imagen);
    const otraTarjeta = templateCard.cloneNode(true)
    fragment.appendChild(otraTarjeta)
    
});
items.appendChild(fragment)



