//Definir la funcion
//const calculadora = function() con tipo flecha solo tengo que hacer: () =>
//Funciones tipo flecha siempre trabaja como constante
const calculadora =  () => { //
    //Solicitamos datos de entrada
    const num1 = parseFloat(prompt('Ingrese el primer numero: '));
    const num2 = parseFloat(prompt('Ingrese el segundo numero: '));
    // Creamos una variable que recibira el tipo de operacion
    const operacion = prompt('Ingrese la operacion que desea ingresar:(+, -, *, /)');

    switch(operacion){
        case '+':
            console.log(`${num1} + ${num2} = ${num1+num2}`);
            //Esta instruccion nos permite cerrar el caso cuando se cumple
            break; //Sino se cumple sigue pidiendo datos
        case '-':
            console.log(`${num1} - ${num2} = ${num1-num2}`);
            break;
        case '*':      
            console.log(`${num1} * ${num2} = ${num1*num2}`);
            break;
        case '/':    
            console.log(`${num1} / ${num2} = ${num1/num2}`);
            break;
            default: //Excepcion, sino cumple ningun caso
            //Sino se cumple entonces que imprima:
            console.log('La operacion es invalida');              
    }
};

//Invocamos la funcion
calculadora();