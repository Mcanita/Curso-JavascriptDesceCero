console.warn('Arrays');
/* Un array es una estructura de datos para almacenar conjuntos de valores.Listas o Arreglos. 
Almacenar colecciones de valores. */


let nombre = 'Maxi'
let apellido = 'Gomez'
let edad = 22
let isTeacher = true

// ! el array es una estructura indexada

//array heterogeneo -> diferentes tipos de datos (no son tan recomendables)
let profeMaxi = ['Maxi', 'Gomez',22, true]

let nombreArray = profeMaxi[0]
console.log(nombreArray);
let apellidoArray = profeMaxi[1]
console.log(apellidoArray);
let edadArray = profeMaxi[2]
console.log(edadArray);
let isTeacherArray = profeMaxi[3]
console.log(isTeacherArray);

//array homogeneo -> mismo tipo de datos
const edades = [22, 33, 44, 55, 66, 77, 88, 99]
console.log(edades);

const colores = ['rojo','amarillo',' azul',' verde', 'violeta']
console.log(colores);
console.log(typeof colores); //tipo de dato
console.log(colores.length); // largo

//recorro array
for (let i = 0; i < colores.length; i++) {
   console.log(colores[i]);
}

// ! desestructuracion de arrays
/*let edad22 = edades[0]
let edad33 = edades[1]
let edad44 = edades[2]*/

let [edad22, edad33, edad44] = edades

// ! objeto

let maxi = {
    nombre: 'maxi',
    apellido: 'gomez',
    edad: 22,
    isTeacher: true
}
console.log(maxi);
console.log(maxi.edad);