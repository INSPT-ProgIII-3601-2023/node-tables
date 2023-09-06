/*
  'yargs' es un módulo que nos permite leer de forma sencilla los argumentos obtenidos de la consola
  https://www.npmjs.com/package/yargs
*/

// Importar paquetes de 'yargs'
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv

/*
  'fs' (File System) es el módulo para leer y escribir archivos que viene con NodeJS
*/
const { writeFile } = require('node:fs/promises'); // Desestructuración de objeto (Ver en PPT "JS Contemporáneo")

/*
  Nuestro propio módulo, que permite construir tablas de multiplicar
*/
const {getTabla} = require("./tables-manager/manager"); // Desestructuración de objeto (Ver en PPT "JS Contemporáneo")


let {n, max, ver} = argv; // Desestructuración de objeto (Ver en PPT "JS Contemporáneo") Ver abajo...

const crearArchivoDeTabla = async (fileName, data) => {
  writeFile(`./results/${fileName}`,data);
  console.log(`Archivo \'${fileName}\' generado correctamente`);
}


// https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fspromiseswritefilefile-data-options
try {
  const tabla = getTabla(n, max); // Función importada del módulo 'manager'
  if (ver) {
    console.log(tabla);
  }
  const fileName = `tabla-del-${n}.txt`;
  crearArchivoDeTabla(fileName, tabla);  
} catch(err) {
  console.error(err);
};



/*
ES5 (antes):
  let n = argv.n;
  let max = argv.max;
  let ver = argv.ver;

ES6 (forma moderna):
  let {n, max, ver} = argv;
*/





