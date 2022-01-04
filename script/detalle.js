// import { productosTienda } from "../assets/data/data.js";

const productosTienda = [
    {
        "id": 1,
        "Producto": "Aguacate Hass",
        "Descripcion": "Aguacate de calidad, su peso aproximado por pieza, puede variar de acuerdo peso real. precio por Kg",
        "Tipo": "Fruta",
        "Precio": "3.000",
        "Imagen":"https://res.cloudinary.com/danimel/image/upload/v1631633223/WorkShop2/Aguacate_s7kvnn.png",
        "Cantidad":0
      },
      {
        "id": 2,
        "Producto": "Limón con semillas",
        "Descripcion": "Limones Jugosos de cal heroku logs --tailidad, su peso aproximado por pieza, puede variar de acuerdo a peso real. precio por Kg",
        "Tipo": "Fruta",
        "Precio": "5.000",
        "Imagen":"https://res.cloudinary.com/danimel/image/upload/v1631633224/WorkShop2/limon_qfkzy5.png",
        "Cantidad":0
      },
      {
        "id": 3,
        "Producto": "Tomates Verdes",
        "Descripcion": "Tomates Verdes, su peso aproximado por pieza, puede variar de acuerdo a peso real. precio por Kg",
        "Tipo": "Fruta",
        "Precio": "6.000",
        "Imagen":"https://res.cloudinary.com/danimel/image/upload/v1631633225/WorkShop2/TomateVerde_rfr6uf.png",
        "Cantidad":0
      },
      {
        "id": 4,
        "Producto": "Tomates Rojos",
        "Descripcion": "Tomates Rojos, su peso aproximado por pieza, puede variar de acuerdo a peso real. precio por Kg",
        "Tipo": "Fruta",
        "Precio": "5.000",
        "Imagen":"https://res.cloudinary.com/danimel/image/upload/v1631633225/WorkShop2/Tomate_uwgknx.png",
        "Cantidad":0
      },
      {
        "id": 5,
        "Producto": "Nopal Limpio",
        "Descripcion": "Nopal limpio, su peso aproximado por pieza, puede variar de acuerdo a peso real. precio por Kg",
        "Tipo": "Fruta",
        "Precio": "4.000",
        "Imagen":"https://res.cloudinary.com/danimel/image/upload/v1631633225/WorkShop2/NopalLimpio_f1paex.png",
        "Cantidad":0
      },
      {
        "id": 6,
        "Producto": "Pan Bimbo, Pan Blanco- Grande",
        "Descripcion": "Con la suavidad de bimbo a su mesa, pan tajado en presentación de 460gr",
        "Tipo": "Viveres",
        "Precio": "6.500",
        "Imagen":"https://res.cloudinary.com/danimel/image/upload/v1631633224/WorkShop2/PanBimbo_v038ba.png",
        "Cantidad":0
      },
      {
        "id": 7,
        "Producto": "Jamon Pechuga de Pavo",
        "Descripcion": "San Rafael, Jamon pechuga de Pavo, con la calidad de en presentación de 250gr",
        "Tipo": "Viveres",
        "Precio": "5.350",
        "Imagen":"https://res.cloudinary.com/danimel/image/upload/v1631633224/WorkShop2/PechugadePavo_ifj19e.png",
        "Cantidad":0
      },
      {
        "id": 8,
        "Producto": "Mc Cormick Mayonesa",
        "Descripcion": "Mayonesa Mc Cormick, con su refinada textura y sabor, en presentación de 250gr",
        "Tipo": "Viveres",
        "Precio": "7.450",
        "Imagen":"https://res.cloudinary.com/danimel/image/upload/v1631633224/WorkShop2/Mayonesa_r1upr1.png",
        "Cantidad":0
      },
      {
        "id": 9,
        "Producto": "Huevos San Juan",
        "Descripcion": "Huevos san Juan, en presentación de 15 unidades",
        "Tipo": "Viveres",
        "Precio": "5.890",
        "Imagen":"https://res.cloudinary.com/danimel/image/upload/v1631633224/WorkShop2/Huevos_silkqd.png",
        "Cantidad":0
      },
      {
        "id": 10,
        "Producto": "Colagate Pasta dental Triple familiar",
        "Descripcion": "Colagate Pasta dental Triple familiar, con la frescura que nos brinda su marca, en presentación de 2 unidades, de 125Ml",
        "Tipo": "Viveres",
        "Precio": "8.230",
        "Imagen":"https://res.cloudinary.com/danimel/image/upload/v1631633223/WorkShop2/Colgate_sjm0kx.png",
        "Cantidad":0
      }
]


const div= document.querySelector('div')

const fragmento=document.createDocumentFragment();

productosTienda.forEach(producto  =>{

  const {Producto, Descripcion, Tipo, Precio, Imagen } = producto;
   
    div.querySelector('h1').textContent= Producto
    div.querySelector('p').textContent=Descripcion
    div.querySelector('img').setAttribute('src', Imagen)
    div.querySelector('h3').textContent=Precio
    const clone =div.cloneNode(true)
    fragmento.appendChild(clone)
    console.log(Producto)
})

div.appendChild(fragmento)