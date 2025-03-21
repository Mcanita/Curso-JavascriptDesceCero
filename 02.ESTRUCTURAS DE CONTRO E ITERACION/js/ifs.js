console.log(`Condicionales If`);

/*
Las estructuras de control de flujo son fun damentales en la programación, ya que permiten dictar el orden en que se ejecutan las instrucciones de un programa. En Javascript,
estas estructitas nos dan la flexibilidad de tomar decisiones, repetir acciones y 
controlar el comportamiento del código.
*/

console.log('hola mundo');
let nombre = 'Mari'
console.log(`Bienvenido ${nombre}`);
console.log('chau...');

// !  Bloque If 

let edad = 22

if (edad >= 18) {
    console.log(`tu edad es ${edad}`);
    console.log('podes pasar!');
}

// !  Bloque If - else

if (edad >= 18) {
    console.log(`otra vez sos mayor de edad : ${edad}`);
    
} else {
    console.error('no podes pasar')
    console.error('documento falso...')
}

// !  Bloque If- else if - else

let nota = 8

if (nota >= 9) {
    console.log('excelente ');
    
} else if(nota >= 7){
    console.log('muy buena nota');
}
else if(nota >= 4) {
    console.log('aprobado');   
}
else{
    console.log('volver a realizar');
}
console.warn('----------------------------------------------');
    

