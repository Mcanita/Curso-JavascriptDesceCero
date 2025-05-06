import db from './db'
import './style.css'

/*DOMContentLoader -> Me asegura que todas las etiquetas html ya estén cargadas*/

function start()
{
  console.log('se cargaron todas las etiquetas ');
  console.log(db);
  /*getElementById('slider') o querySelector('#slider') */

  const slider = document.getElementById('slider')
  console.log(slider); //siempre confirmo que este bien seleccionado
  
 /* db.forEach(function(objImg){
    console.log(objImg);
  })*/ // se podía hacer con funcion anonima tambien
  db.forEach(objImg =>{
   // console.log(objImg);
    // ! 1. creo dinamicamente las etiquetas
    const divSliderSection = document.createElement('div')
    const imgTag = document.createElement('img')
   // console.log(divSliderSection);
   // console.log(imgTag);
   // ! 2. le asigno la info a las etiquetas
   imgTag.src = objImg.ruta
   imgTag.alt = objImg.texto
   // ! 3. le agrego la clase al divSliderSection
   divSliderSection.classList.add('slider-section')
   //! 4. agrego la imagen al elemento contenedor
   divSliderSection.appendChild(imgTag)
   //console.log(divSliderSection);
   slider.appendChild(divSliderSection)
  })

  // !Agrego eventos a los botones 

  const btnLeft =  document.querySelector('.btn-left')
  const btnRight = document.querySelector('.btn-right')
  //console.log(btnLeft, btnRight);
  
  //!selecciono los slaiders sections
  const sliderSections = document.querySelectorAll('.slider-section')
  //console.log(sliderSections);

  //! variables auxiliares
  let operacion = 0
  let widthImg = 100/ sliderSections.length //la cantidad de elementos que tengo
  let counter = 0
  console.log(widthImg);
  

  function moverALaDerecha(){
    if(counter >= sliderSections.length-1){
      
      counter = 0
      operacion = 0
      slider.style.transform = `translate(-${operacion}%)`
    }else{
      counter++
      operacion= operacion + widthImg
      slider.style.transform = `translate(-${operacion}%)`
      slider.style.transition = 'transform ease .6s'
    }
   
    
  }

  function moverALaIzquierda(){

    counter--
    if(counter < 0)
    {
      counter = sliderSections.length-1
      operacion = widthImg * (sliderSections.length-1)
       slider.style.transform = `translate(-${operacion}%)`
    } else {
      operacion = operacion -widthImg
      slider.style.transform = `translate(-${operacion}%)`
      slider.style.transition = 'transform ease .6s'

    }
   
  }

  //! agrego el evento a los botones 

  btnLeft.addEventListener('click',moverALaIzquierda)
  btnRight.addEventListener('click', moverALaDerecha)

  // BOM -> Browser Object Model
//! setInterval

//window.setInterval(function(){},3000)
//                    cancelIdleCallback, tiempo en ms

setInterval(() =>{
  moverALaDerecha()
},5000)

}
window.addEventListener('DOMContentLoaded', start)


