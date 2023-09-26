//Realizar un programa que me permita cambiar el titulo de un texto en HTML

//Inicializar la funcion
/*
function cambiarTitulo(){
    //Inicializamos un nuevo elemento 
    let  nuevoElemento = document.createElement("li");
    // El document.createTextNode ayuda a ingresar un texto en especifico
    let textoElemento = document.createTextNode("Mundo");//Agregar termimno especifico en la etiqueta
    
    

    //Añadir el dato creado al elemento li

    //Nos ayuda agregar elementos una por debajo de la otra
    nuevoElemento.appendChild(textoElemento);

    //Obtiene la lista mediante su id
    let lista = document.getElementById("lista");

    // Agregando el nuevo dato a la lista
    lista.appendChild(nuevoElemento);


    //Extra partner
    document.getElementById('titulo').textContent = textoElemento.nodeValue;
}
*/
function cambiarTitulo(){
    //Voy al id que quiero cambiar
    let tituloElement = document.getElementById("titulo");

    //Cambiaremos el contenido del elemento

    //Tengo que darle el lugar al cual va a cambiar la ubicacion

    tituloElement.textContent = "La chupa xD"; //InnerHTML borra lo
}
