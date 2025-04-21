
#  Javascript desde cero

## Extenciones de VSC

* Live Server - ritwickdey.LiveServer
* JavaScript (ES6) Code snippet - xabikos.JavaScriptSnippets
* Auto Rename Tag -formulahendry.auto-rename-tag
* Better Comments - aaron-bond.better-comments

# Trabajo con VITE
<https://vite.dev/>

## Crear proyecto con VITE

```sh
npm create vite@latest ./ # con el ./ le indico que quiero crear el template dentro del directorio actual
npm create vite@latest # Me va a pedir el nombre de la carpeta y dentro va a colocar los archivos template
```

## Instalar las dependencias
Instalar las dependencias implica , leer el package.json y crear la carpeta node_modules con todas las dependencias que 
figuran dentro del package.json

```sh
npm i # npm install
```

## Arrancar el servidor de desarrollo

```sh
npm run dev # http://localhost:5173/
``` 

## Detener el servidor de desarrollo

CTRL + C

## Para compartir el proyecto con alguien más

**IMPORTANTE** borrar los node_modules.
Los modulos no se comparten porque la carpeta node_modules se recupera cuando hago npm install.


## Errores típicos 
1. no tener la carpeta node_modules cuando intento levantar el servidor de desarrollo
2. no estar en la carpeta donde esta el archivo package.json

## Nomenclatura archivos
* no usar espacios
* no usar caracteres especiales
* no usar tildes

## Dinamica para subir un proyecto VITE a Netlify

<https://www.netlify.com/>

1. menu izquierda ->Sites
2. boton 'add new Site'
3. Opcion -> Deploy Manually
4. preparo el proyecto para subir con VITE

4.1 detengo el servidor de desarrollo
ctr + c

4.2 creo la carpeta de distribución 
```sh
npm run build
```


5.Arrastro y suelto la carpeta 'dist' en Netlify


## cambiando configuracion Vite

1. Creo el archivo

```sh
touch vite.config.js
```

2. Agrego el objeto de configuracion

```js
export default{
}
```

3. Activo el source map (el mapeo de las reglas css)
```js
export default{
  css:{
    devSourcemap : true
    }
}
```




