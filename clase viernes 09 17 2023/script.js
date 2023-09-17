//Declarar funcion


//Declarar variables en este caso arreglo

let numeros = [];

//Inicializo la funcion
function obtenerNumeros() {
    //Inicializamos una variable
    const cantidadInput = document.getElementById("cantidad");
    //Si trabajo arreglos necesito dos variables que me esten recibiendo los datos
    //Todo lo que recibe un input es un string
    //Las funciones solo reciben string y dentro de la funciono lo transformo a numero
    const cantidad = parseFloat(cantidadInput.value);

    //Inicializar un condicional que verificar si el dato es mayor a 0
    if (cantidad > 0) {
        //Si el condicional se cumple, entonces crearemos una variable que recibira los datos de los elementos

        const listaNumeros = document.getElementById("lista-numeros");

        //Inicializamos el dato que me insertara la info en el html

        listaNumeros.innerHTML = ""; //Modificar etiqueta que tiene el id= lista numeros

        //innerHTML es para todo el body del html, se usa mas para arreglos y listas, deja entrar cualquier tipo de dato
        // textContent es para valores mas especificos solo texto
        for (let i = 0; i < cantidad; i++) {
            //Nos esta solicitando el numero de datos a ingresar y el i+1 va a hacer que aumente el indice dependiendo de la cantidad de numeros a ingresar
            const numero = prompt("Ingrese el numero " + (i + 1) + ":");
            // Aqui estamos insertando los datos a nuestro arreglo
            numeros.push(parseFloat(numero));
            //Creamos el elemento li para organizar la lista
            const li = document.createElement("li")
            //Aqui creamos el contenido que se visualizara en la lista de numeros
            li.textContent = numero;
            //Aqui creamos para que los numeros ingresen ordenados en columna
            listaNumeros.appendChild(li);
        }
    }
} 

//Inicializacion de la funcion

function calcularPromedio(){
    //Incializacion de una variable que recibira los datos
    const resultadoElemento = document.getElementById("resultado");

    //Crearemos un condicional
    if(numeros.length > 0) // que haya almenos un elemento, cuando en posicion lista exista almenos uno
    {
        const suma = numeros.reduce((total, numero)=> total + numero, 0); //Reduce ayuda a reducir xD para tomar un decimal at least el 0 es 4,50
        const promedio = suma/numeros.length;
        resultadoElemento.textContent = `El promedio es: ${promedio.toFixed(2)}`;
    }
    else{
        resultadoElemento.textContent= `No se ingresaron datos, por favor insertarlos`;
    }
}