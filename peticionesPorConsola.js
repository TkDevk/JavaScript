//Importamos el modulo de readline de node.js para interactuar con los datos de entrada

const readlinea = require('readline');//importo modulo 

//Es readline pero lo puse readlinea para probar si puedo usar cualquier palabra

//Creamos una interfaz de lectura para los datos de entrada
const rl = readlinea.createInterface({ //Funcion, accedo a createInterface
        input:process.stdin, //Se utiliza para leer los datos por teclado
        output: process.stdout //Se utiliza para escribir o mostrar los datos por consola<
}); //pongo en el bloque los parametros


//Defino una funcion
function tablaDeMultiplicacion(){
    //Solicitar al usuario que ingrese un dato y espere la respuesta
    rl.question('Ingrese un numero:  ', (numero) =>{ //  question viene del modulo readline, con => indico que numero va a recibir los siguientes valores, por que? por que tengo que inicializar numero
      //Almacenamos el dato y lo convertimos en entero. numero es parametro
    //Question pregunta xD

      numero = parseInt(numero);
      
      //Inicializar el bucle
      for(let i=1; i<=10; i++){
      //Imprimo concatenando
        console.log(`${numero} x ${i} = ${numero * i}`); //Muestro por consola
      }
      //Cerramos la interfaz de lectura, lo que nos permitira que el programa termine

      rl.close(); //Close viene del modulo

    } );

}

//Invocamos

tablaDeMultiplicacion();

//para ejecutar me posiciono en la carpeta donde tiene el js y ejecuto con node nameScript.js