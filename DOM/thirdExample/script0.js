//Realizar un programa que me permita registrar datos mediante el boton de enter(intro)

/*Inicializamos los datos que me capture la informacion*/
const input = document.getElementById('myInput');
const list = document.getElementById('myList');

/*El addeventListener nos ayuda agregar una lista de eventos
*El keyup se usa para dar enter al presionar ingresar el contenido
*

*/ 
input.addEventListener("keyup", function(event){
    //Aqui vamos a definir el evento que va a reicbir la info
    //el input.value !== verifica si el valor del documento no esta vacio, que me lo agregue a la lista, sino, nova a ingresar nada.
    if(event.key === 'Enter' && input.value !==''){
       
        /**
         * Crear un nuevo elemento de lista y los argumentos al HTML
         */

        const newItem = document.createElement('li');
        //Insertamos el contenido al HTML
        newItem.textContent = input.value;

        //Agregar los elemetos una por debajo de la otra
        list.appendChild(newItem);

        //Con esto limpio el valor de entrada
        input.value ='';
    }
})

/**
Metodos para crear y exportar informacion
* appenchild

 *textContent

* createTextNode

* addEventListener

* innertHTML
  
 */