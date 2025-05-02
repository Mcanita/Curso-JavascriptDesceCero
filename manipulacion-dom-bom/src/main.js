import './style.css'

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

// ! QuerySelector (para seleccionar etiquetas)
//let elementosLi = document.querySelector('li')// ! Solo selecciona el primer elemento 
let elementosLi = document.querySelectorAll('li')//una lista de nodos 
console.log(elementosLi);

elementosLi.forEach(element =>{
    console.log(element);
});

// ! GetElementByTagName('identificador)
let elementosByTagName = document.getElementsByTagName('li')
console.log(elementosByTagName);

//* no tengo forEach en los getElement
/* elementosTagName.forEach(element =>{
    
    }); */
// ! querySelector(Seleccionar clases [.] -> punto)
//let destacado = document.querySelector('.destacado')// devuelve el primer elemento que encuentra
let destacado = document.querySelectorAll('.destacado') //devuelve todos los elementos
console.log(destacado);


// ! getElementByClassName('identificador')
let destacadoClassName = document.getElementsByClassName('destacado')
console.log(destacadoClassName);

destacado[1].id = 'importante'
destacado.forEach(elem =>{
    elem.style.backgroundColor = 'crimson';
    elem.style.cursor = 'pointer'
    elem.addEventListener('click', () =>{
        console.log('hicieron click sobre uno de los destacados');
    })
   if (elem.textContent == 'Item 5')
   {
    elem.textContent ='este elemento es el último';
    elem.style.backgroundColor = 'pink'
   }
})

// ! elem.classListtexto-violeta')
destacado[1].classList.add('color-texto-violeta')
destacado[1].addEventListener('click', ()=> {
    destacado[1].classList.toggle('bg-verde')
})

// ! Seleccionando el boton para cambiar el color de fondo

let botonCambiar = document.getElementById('btn-change-color')
//console.log(botonCambiar);

botonCambiar.addEventListener('click',() =>{
    console.log('hicieron click');
    console.dir(botonCambiar);//cdi
    botonCambiar.parentElement.style.backgroundColor = 'red'
    botonCambiar.parentElement.parentElement.style.backgroundColor = 'black'
})


// ! ejemplo integrador sencillo

const arrayImagenes = [
   {url: 'https://picsum.photos/id/237/200/300',texto_alternativo: '237'},
   {url: 'https://picsum.photos/id/238/200/300',texto_alternativo: '138'},
   {url: 'https://picsum.photos/id/239/200/300',texto_alternativo: '239'},
   {url: 'https://picsum.photos/id/240/200/300',texto_alternativo: '240'},
   {url: 'https://picsum.photos/id/241/200/300',texto_alternativo: '241'},
   {url: 'https://picsum.photos/id/242/200/300',texto_alternativo: '242'},
   {url: 'https://picsum.photos/id/243/200/300',texto_alternativo: '243'},
   {url: 'https://picsum.photos/id/244/200/300',texto_alternativo: '244'},
   {url: 'https://picsum.photos/id/245/200/300',texto_alternativo: '245'},
   {url: 'https://picsum.photos/id/246/200/300',texto_alternativo: '246'},
   {url: 'https://picsum.photos/id/247/200/300',texto_alternativo: '247'},
   {url: 'https://picsum.photos/id/248/200/300',texto_alternativo: '248'},
   {url: 'https://picsum.photos/id/249/200/300',texto_alternativo: '249'},
   {url: 'https://picsum.photos/id/250/200/300',texto_alternativo: '250'}
]

console.log(arrayImagenes);