//Se inicializa un arreglo de datos
let tareas = [];

//Inicializamos la funcion

function agregarTarea() {
    //Inicializo y declaro variables de entrada
    const tareaInput = document.getElementById("tarea");

    //Crearemos una variable que almacenara el valor del elemento
    const tareaTexto = tareaInput.value; //Crear una variable para pasar la informacion para una comparacion
    //Separo responsabilidad de la variable

    //Verificamos de que si el valor de tareaTexto no es un dato vacio
    if (tareaTexto !== "") {
        //agregaremos los elementos a la lista
        tareas.push(tareaTexto);

        //Estableceremos el valor del elemento input para borrar el contenido del campo de entrada
        tareaInput.value = ""; //Resetea la barra de busquedad
        //Esta funcion nos permitira actualizar la lista cada vez que se ingrese uno nuevo
        mostrarListaTareas();
    }

}

//Declaramos la funcion 
function mostrarListaTareas() {
    //Declaramos una variable que haga referencia al elemento que almacene la lista
    const listaTareas = document.getElementById("lista-tareas");

    //Se borrara el contenido html del elemento listaTareas, dejandolo vacio

    listaTareas.innerHTML = "";

    //Inicializamos un bucle
    for (let i = 0; i < tareas.length; i++) {
        //Declararemos una variable que almacene el valor del elemento actual
        const tarea = tareas[i]; //i guarda la posicion
        // vamos a crear un nuevo elemento HTML que almacenara los datos

        const li = document.createElement("li");

        //Vamos a establecer el texto del elemento li para que me guarde en la lista

        li.textContent = tarea;
        //Guardaremos la lista de las tareas de manera continua
        listaTareas.appendChild(li);
    }
}