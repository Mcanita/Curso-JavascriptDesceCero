
console.log('Eventos y Callback');

// ! EVENTOS
//Acciones o sucesos que ocurren en una aplicacion web.Que pueden ser detectados manejados 
// con JS. Los eventos pueden ser acciones de usuarios, como también eventos generados por 
// el navegador.

//* selccion del elemento
let btn = document.querySelector('#btn')

//* <nodo>.addEventListener( '<evento>', <callback>)

//! evento con función anonima
/*btn.addEventListener('click', function(){
    console.log('hicieron click');
})*/

//! evento con función con nombre
function accionClick(){
    console.log('hicieron click');
}
btn.addEventListener('click', accionClick) // <- callback

// selecciono el botón con el id 'btn-antigua'
let btnAntigua = document.querySelector('#btn-antigua')

//con eventos de la manera antigua 
// <nodo>.onclick = <callback>
btnAntigua.onclick = function(){
    console.log('hicieron click sobre  btn antigua ');
}

//! evento Mouse enter
console.warn('Evento Mouse Enter');

let enter = document.querySelector('#enter')
/* trabajo de estilos en linea con JS */
enter.style.width ='100px'
enter.style.height = '100px'
enter.style.backgroundColor = 'crimson'

enter.addEventListener('mouseenter', function(){
    enter.style.backgroundColor = 'blue'
})

enter.addEventListener('mouseleave', function(){
    enter.style.backgroundColor = 'orange'
})

// document <---- DOM --> Document Object model
// window <------ BOM --> Browser Object Model
//Evento del navegador que se dispara cuando el DOM (todas las etiquetas html) estén cargadas en 
// el navegador
window.addEventListener('DOMContentLoaded', function(){
    /*con este evento me esaguro que todo el código JS tenga el 
    html para trabajar */
    console.log('cuando todo el HTML este cargado');
})