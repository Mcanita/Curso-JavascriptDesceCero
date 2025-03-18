
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

console.warn('// !POTENCIACIÓN');
resultado = num1 ** num2;
console.log(`la potencia de ${num1} elevado a ${num2} es ${resultado}`);

// ! DEBUGGER -> Es una herramienta que permite analizar mi código paso a paso, encontrar errores.
// ? 2 maneras para arrancar a trabajar con el debugger
// * escribiendo en nuestro código la palabra debugger
// * la segunda es en la pestaña de Dev Tools > Source > y colocando los Breakpoints


console.log(/* Operadores de comparacion */);

/*
Nombre                 |    Simbolo
--------------------------------
mayor                  |    >
menor                  |    <
igual                  |    == ( ! evitar - valores -> no tipos)
igualdad estricta      |    ===
mayor o igual          |    >=
menor o igual          |    <=
distinto               |    != ( ! evitar - valores -> no tipos )
distinto estricto      |    !==

*/ 

// ! El resultado de la comparacion va a ser un booleano

let num3 = 9
let num4 = 5

console.warn(`// ! mayor`);
let resultadoComparacion = num3 > num4
console.log(`la comparacion entre ${num3} y ${num4} es ${resultadoComparacion}`);

console.warn(`// ! menor`);
resultadoComparacion = num3 < num4
console.log(`la comparacion entre ${num3} y ${num4} es ${resultadoComparacion}`);

let num5 = '9'

console.warn(`// ! igualdad (no estricta)`);
resultadoComparacion = num3 == num5
console.log(`la comparacion entre ${num3} y ${num5} es ${resultadoComparacion}`);

console.warn(`// ! igualdad estricta`);
resultadoComparacion = num3 === num5
console.log(`la comparacion entre ${num3} y ${num5} es ${resultadoComparacion}`);

console.warn(`// ! mayor/igual`);
resultadoComparacion = num3 >= num4
console.log(`la comparacion entre ${num3} y ${num4} es ${resultadoComparacion}`);

console.warn(`// ! menor/igual`);
resultadoComparacion = num3 <= num4
console.log(`la comparacion entre ${num3} y ${num4} es ${resultadoComparacion}`);

let num6 = '9'

console.warn(`// ! distinto`);
resultadoComparacion = num3 != num6
console.log(`la comparacion entre ${num3} y ${num6} distinto es ${resultadoComparacion}`);

console.warn(`// ! distinto estricto`);
resultadoComparacion = num3 !== num6
console.log(`la comparacion entre ${num3} y ${num6} distinto estricto es ${resultadoComparacion}`);