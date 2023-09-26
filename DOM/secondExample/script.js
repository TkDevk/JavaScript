//Realizar un programa que me permita cambiar el titulo cada vez que oprima el boton

//Declaro funcion

function cambiarTitulo(){
    //Inicializaremos la variable que capturara el dato
    const tituloElement = document.getElementById("titulos");
    
    //Iniciar un condicional, innerHTML sirve para mostrar o analizar contenido
    if(tituloElement.innerHTML === " Que me mira lok"){
       tituloElement.innerHTML = " Un programador uwu";
    }else{
       tituloElement.innerHTML = " Que me mira lok"
    }
    //InnerHTML hace la tarea de traer el elemento, that it's why er don't use value in this case.

    //Consejo de buenas practicas, obtenerlo con value

}