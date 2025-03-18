
// ? las importaciones generalmente se ponen arriba
// import { cursoJavaScript, PI } from "./constantes.js";  // agregar manualmente el .js si no aparece // !(1) 
// import { cursoJavaScript, PI } from "./constantes.js"; // !(2)
import constantesPrincipales from "./constantes.js"; // ! (3)
import "./ifs.js" // asi importo lo que hay en ifs.js

// Formas no oficiales para modularizar nuestras aplicaciones
// * CommonJS
// * AMD (RequireJS)
// * UMD -> CommonJS + AMD
// !-----------------------------------------
// ! Modulos ESM (ECMAScript Modules)
// !-----------------------------------------



//console.log(PI); // ! (1) y (2)
//console.log(cursoJavaScript); // ! (1) y (2)
console.log(constantesPrincipales.PI);  // !(3)
console.log(constantesPrincipales.cursoJavaScript);// !(3)