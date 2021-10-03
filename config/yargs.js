

//importancion de yargs

const { describe } = require('yargs');

const argv = require('yargs')
                   .options({
                     'v': {
                     alias: 'valor', //v y alias es lo mismo
                     demandOption: true, //con esta opcion el valor de v se tiene que enviar obligatoriamente
                     /*default: '/etc/passwd',
                     describe: 'x marks the spot', */
                     type: 'number',
                     describe: 'Recibe valor para tabla de multiplicar'
                        }
                     })
                   .options({
                     'l': {
                     alias: 'listar', //v y alias es lo mismo
                     //con esta opcion el valor de v se tiene que enviar obligatoriamente
                     type: 'boolean',
                     default: false,
                     describe: 'Lista tabla de multiplicar'
                        }
                     })
                   .options({
                     'h': {
                     alias: 'hasta', //v y alias es lo mismo
                     //con esta opcion el valor de v se tiene que enviar obligatoriamente
                     type: 'number',
                     default: 10,
                     describe: 'Define el limite de la tabla de multiplicar'
                        }
                     })
                     .options({
                      'v': {
                      alias: 'valor', //v y alias es lo mismo
                      demandOption: true, //con esta opcion el valor de v se tiene que enviar obligatoriamente
                      /*default: '/etc/passwd',
                      describe: 'x marks the spot', */
                      type: 'number',
                      describe: 'Recibe valor para tabla de multiplicar'
                         }
                      })
                     .check((argv, options) => {
                       
                        if (isNaN(argv.v)) {
                          throw new Error("El valor tiene que ser un número")
                        } else {
                          return true // tell Yargs that the arguments passed the check
                        }
                      })
                     .argv;           
 
/* enviar listar como parametro al metodo crear archivo y si el parametro es enviado ejecutar
el console.log(salida) en el caso de que no se envie no ejecutarlo*/

// option('l')
// listar: opcional
// boolean
// default: false
/* 
const procesos = process.argv; */

module.exports = argv; //se exporta directamente el objeto argv


