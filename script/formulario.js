const formulario = document.getElementById('formulario');
const listaNotas = document.getElementById('listaNotas');
let arreglo = [];

//capturar los datos
formulario.addEventListener('submit', e => {
    e.preventDefault();

    let est = document.getElementById('nom').value;
    let per1 = document.getElementById('p1').value;
    let per2 = document.getElementById('p2').value;
    let per3 = document.getElementById('p3').value;
    // console.log(est, per1, per2, per3)
    crearRegistro(est, per1, per2, per3);
    guardarDatos();
})

const crearRegistro = (nom, p1, p2, p3) => {
    let registro = {
        nombre: nom,
        periodo1: p1,
        periodo2: p2,
        periodo3: p3
    }

    arreglo.push(registro);
    console.log('aqui va los arrreglo',arreglo)
   
}

const guardarDatos = () => {
    localStorage.setItem('Notas',JSON.stringify(arreglo));
    // listarDatos();
}


// const listarDatos = () => {
//     listaNotas.innerHTML = '';
//     arreglo = JSON.parse(localStorage.getItem('Notas'));
//     arreglo.forEach(element => {
//         const {nombre, periodo1, periodo2, periodo3} = element;
//         listaNotas.innerHTML += `

//           <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">Nombre</th>
//       <th scope="col">Nota 1</th>
//       <th scope="col">Nota 2</th>
//       <th scope="col">Nota 3</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>${nombre}</td>
//       <td>${periodo1}</td>
//       <td>${periodo2}</td>
//       <td>${periodo3}</td>
//     </tr>
    
//   </tbody>
// </table>
//         `   
//      })
//  }


 document.addEventListener('DOMContentLoaded',listarDatos);

//  listaNotas.addEventListener('click', (e) =>{
//     let texto = e.path[1].childNodes[2].innerHTML;

//       if(e.target.innerHTML === 'delete'){
//          eliminarDatos(texto);
//        }
// })

// const eliminarDatos = (estudiante) => {

//     let indexArreglo;

//     arreglo.forEach((elemento,index) => {
//         if(elemento.nombre === estudiante){
//              indexArreglo = index;
//         }

//     })

//     arreglo.splice(indexArreglo,1);
//     guardarDatos();

//  }