
console.log('hola mundo nuevamente');

let mensaje //variable no inicializada 
console.log(mensaje);//underfined
mensaje = 'maxi' //redefino la variable
console.log(mensaje);

const PI = 3.141528;
console.log(PI);
//const PI = 2222 // redeclarable : NO
//PI = 2222 //REDEFINIBLE: NO

/* ----------------------------------------------------- */
console.warn(/* Operadores aritmeticos */);
/* ----------------------------------------------------- */

/*
tipo de operacion  |  simbolo
----------------------------
suma               |   +
resta              |   -
multiplicacion     |   *
división           |   /
módulo             |   %
potenciacion       |   **
 */

// !Concatenación

let nombre = 'maxi';
let apellido = 'principe'

//concatenacion tradicional
console.log('hola '+ nombre+' '+ apellido +', ¿como estras?');
//concatenación template string (template literales)
console.log(`hola ${nombre} ${apellido}, ¿COMO ESTAS?`); //backtick -> Alt + 96 
console.warn()// cwa

console.warn('// ! SUMA');
let num1 = 5
let num2 = 4
let resultado = num1 + num2; // declarando resultado
console.log(`el resultado de sumar ${num1} y ${num2} es ${resultado}`);  

console.warn('// ! RESTA');
resultado = num1 - num2; // redefiniendo resultado
console.log(`el resultado de restar ${num1} - ${num2} es ${resultado}`);

console.warn('// ! MULTIPLIACION');
resultado = num1 * num2;
console.log(`el resultado de multiplicar ${num1} y ${num2} es ${resultado}`);

console.warn('// ! DIVISION');
resultado = num1 / num2;
console.log(`el resultado de dividir ${num1} con ${num2} es ${resultado}`);

console.warn('// ! RESTO DE LA DIVISIÓN ');//MÓDULO
resultado = num1 % num2;
console.log(`el resto de la divicion de ${num1 } y ${num2} es ${resultado}`);

console.warn('// !');