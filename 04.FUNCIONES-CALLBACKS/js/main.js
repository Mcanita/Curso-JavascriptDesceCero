console.log('Funciones y callbacks');

// ! anoatomia de una función
/*
*valores de entrada -> inputs -> parametros
*valores de salida (puede o no tenerlos) -> output -> retorno 
function <nombre>(<parametro1>,< parametro2>, <parametro3>){
 <paso a ejecutarse>
 <paso a ejecutarse>
 <paso a ejecutarse>
 return <valor de retorno>
}

* para llamar a la funcion

<nombre>(<argumento1>, <argumento2>,< argumento3>)
*/

// ! funcion que no retorna
function saludar(nombre){
    console.log(`hola ${nombre}`);
}

saludar('maxi')
saludar('maria')

// ! funcion que retorna 
function sumar(num1, num2){
    let resultado = num1 + num2
    return resultado
}

let suma1 = sumar (2,5)
console.log(suma1);

function promedio(nota1, nota2, nota3){
    let sumatoria = nota1 + nota2+ nota3
    console.log(sumatoria);
    let cantidadNotas = arguments.length
    let resultado = sumatoria / cantidadNotas
    return resultado
}

let resultadoPromedio = promedio(4,8,10)
console.log(resultadoPromedio.toFixed(2));//cantidad de decimales

// ! funcion anonima -> no tiene nombre
let nombre = 'maximiliano' // asigno string
                            //asigno una funcion
let nombreApellido = function(nombre, apellido){
    return nombre + ' '+ apellido
}

let nombreCompleto = nombreApellido('Maximiliano', 'Gonzales')
console.log(nombreCompleto); //! ;

// ! funciones autoinvocadas (IIFE)
(function(valor){  // necesita que anteriormente haya un ';'
    console.log(`Hola a ${valor}!!!`)
})('todos')

// ! CALLBACK -> es una funcion pasada como argumento a otra funcion 

let texto1 = function(){
    console.log('soy el texto 1');
}

texto1 ()// <----soy el texto 1 
// ! estoy imprimiendo en consola la 'referencia de una función'
console.log(texto1); // <----- funtion(){console.log('soy el texto 1 )}


function test(num1,callback){
    console.log(num1);
    console.log(callback);
}

test(4, texto1) // <--- paso una funcion (la referencia de una funcion) como argumento de otra función

function ir (callback){
    if(queSeaDiaHabil && horarioBnacario){
        callback()// <---- depositar
    }else{
        console.log('no puedo ir al banco');
    }
}

function tareaDepositar(){
    console.log('saludar');
    console.log('pedir turno');
    console.log('hablar con el cajero');
}

ir(tareaDepositar)