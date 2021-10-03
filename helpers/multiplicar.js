const fs = require('fs');

const colors = require('colors');

const crearArchivo = async ( valor=1, listar = false, hasta = 10) => {

   

   /*   if (typeof valor !== "number"){

                    return Promise.reject(`Error el valor ${valor} ingresado no es número`); 
    } */

    try {

    let salida = '';
    let consola = '';

for(let i=1; i<=hasta; i++){

salida += (`${valor} x ${i} = ${(valor*i)}\n`); //para que lo imprima en el archivo

consola += (`${valor} ${'x'.green} ${i} ${'='.green} ${(valor*i)}\n`); //para que salga en consola con colores
}

if(listar){
    console.log(`===================`.red);
    console.log(`   Tabla del`.green + " " + colors.red(valor));
    console.log(`===================`.red);
    console.log(consola);  
}

fs.writeFileSync( `./salida/tabla- ${valor}.txt`, salida); //con ./ruta indico donde se van a guardar los archivos

return(`tabla-${valor}.txt creada`.green);
        
    } catch (error) {
        throw(error);
    }

    
}

module.exports = {
    crearArchivo //propiedad que apunta a una funcion que tiene el mismo nombre
}


    
    
    
    
    