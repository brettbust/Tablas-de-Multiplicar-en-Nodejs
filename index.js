/* Crear tabla de multiplicar y guardarla en un txt en una ruta especifica */

const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs');

console.clear();
/* 
console.log( procesos ); */ //argv que se encuentra en los procesos propios de node 
 
/* console.log( argv );  */ //argv lo traemos del paquete npm yargs el cual lo trae en un objeto del cual podemos llamar a las propiedades.

/* console.log('valor: yargs', argv.valor ); */
 


//me interesa el tercer elemento
/* 
const [, , arg3 = 'valor=5'] = process.argv; //propiedad para traer valores desde la consola 

const [, numero=5] = arg3.split("=");

console.log(numero); */

  crearArchivo( argv.valor, argv.listar, argv.hasta)
    .then( ok => console.log(ok, 'Archivo Creado'.rainbow))
    .catch(err => console.log(err));

  /*   var colors = require('colors');
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass */

 
   
   