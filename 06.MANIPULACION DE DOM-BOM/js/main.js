// ! Mnipulacion de DOM y BOM

// DOM --> Document Object Model

console.log(document);
console.dir(document); // radiografia 

//manera absoluta de acceder a los elementos 

console.log(document.children[0].children[1].children[0]); //h1
console.dir(document.children[0].children[1].children[0])

//document.children[0].children[1].children[0].stile.color = 'crimson'
//document.children[0].children[1].children[0].stile.fontSize = '50px'

//manera relativa de acceder a los elementos
//Funciones para la seleccion de elementos
// * querySeLector('<selector-css>') ->id -> # | class -> . | etiqueta -> tag
// * querySeLectorAll('<selector-css>') ->id -> # | class -> . | etiqueta -> tag
// * getElementById('identificador')
// * getElementByClassName('identificador')
// * getElementByTagName('identificador')

// ! QuerySelector
let h2QuerySelector = document.querySelector('#titulo-importante')
console.log(h2QuerySelector); //nodo html
console.dir(h2QuerySelector); //nodo html -> radiografia
h2QuerySelector.classList.add('color-verde')

// ! GetElementById
let h2GetElementById = document.getElementById('titulo-importante')
console.log(h2GetElementById);
console.dir(h2GetElementById)
h2GetElementById.innerHTML = 'Holis <strong> Mundis</strong>'

h2GetElementById.children[0].style.color = 'red'