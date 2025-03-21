
console.warn('Estructura Switch');

let diaSemana = 'Lunes'
//let diaSemana = prompt('ingrese un día : ')

/*
switch (diaSemana) {
    case 'Lunes':
        console.log(`${diaSemana} es dia habil`);
        break;

    case 'Martes':
        console.log(`${diaSemana} es dia habil`);
        break;

    case 'Miercoles':
        console.log(`${diaSemana} es dia habil`);
        break;

    case 'Jueves':
        console.log(`${diaSemana} es dia habil`);
        break;
        
    case 'Viernes':
        console.log(`${diaSemana} es dia habil`);
        break;

    case 'Sabado':
        console.log(`${diaSemana} es fin de semana`);
        break;

    case 'Domingo':
        console.log(`${diaSemana} es fin de semana `);
        break;    

    default:
        console.log(`${diaSemana} no es un dia válido`);
        break;
}*/
switch (diaSemana) {
    case 'Lunes':
    case 'Martes':
    case 'Miercoles':
    case 'Jueves': 
    case 'Viernes':
        console.log(`${diaSemana} es dia habil`);
        break;

    case 'Sabado':
    case 'Domingo':
        console.log(`${diaSemana} es fin de semana `);
        break;    

    default:
        console.log(`${diaSemana} no es un dia válido`);
        break;
}

console.warn('---------------------------------');
