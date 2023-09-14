// Definir una funcion
function tablaDeMultiplicacion(){
    // Solicita al usuario que ingrese un numero
    const numero = parseInt(prompt('Ingrese un numero: '));
    // Inicia un bucle que se ejectura 10 veces
    for(let i=1; i<=10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
//`` es una forma de concatenar sin necesidad de poner extra informacion, back sticks

//Invocacion a la funcion para ejecutarla
tablaDeMultiplicacion();

//Hacer impresiones por consola

