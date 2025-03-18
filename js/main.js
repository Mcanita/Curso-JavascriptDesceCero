
console.log('Código JS desde código externo');

/*  ALT + Z -> Word Wrap */

/*  clg  */
/* -------------------------- */
/* Mostrar mensaje en consola */
/* -------------------------- */

console.log('informativo');
console.warn('Alerta (amarillo)');
console.error('Error(rojo)');

/* ------------------------------------ */
/*  Variables es Javascript             */
/* ------------------------------------ */
// Las variables son contenedores de datos que se alojan en memoria (RAM). En JS son conocidas como variables debilmente tipadas.

// * Variables debilmente tipadas ( variables dinamicas) -> (javascript, PHP, Python)
// * Variables fuertemente tipadas (variables estaticas) -> (c++, Java, C#)

let nombre = 'maxi' // tipo string -> construyo la variable nombre (declara la variable nombre) y le asigno la cadena caracteres (string) 'maxi'
console.log(typeof nombre); //que es de tipo cadena (string)

nombre = 22; // tipo number
console.log(typeof nombre); // que es tipo number 

let numero; // declaro una variable sin inicializar 
console.log(numero); //undefined -> no está definida
console.log(typeof numero); // 'underfined'

let cadena = 'hola soy una cadena de texto'; // declaro la variable nombre y la inicializo
console.log(cadena);
console.log(typeof cadena);
/* cambio el valor que tiene guardado la cadena  */
cadena = 'otro valor diferente';
console.log(cadena);

// ! constructores

/*
constructor      | var      | let       | const 
alcance          | global   | local     | local
redeclarable     | si       | no        | no
redefinible      | si       | si        | no 

*/