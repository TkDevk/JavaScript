//Incializamos el programa

//Solicitamos datos de entrada

//prompt palabra reservada para mostrar peticiones en pop-up
const nombre = prompt("Por favor ingresa tu nombre: ");

const edad = parseInt(prompt("Ingresa edad: ")); //parseInt para que convierta el valor de string a int

const ciudad = prompt("Ingrese la ciudad donde habita xD:  ");

//Objeto

const persona = {
    nombre: nombre, //Propiedad
    edad: edad,     //Propiedad
    ciudad: ciudad  //Propiedad
};

const esMayor = edad >= 18;


//Se puede hacer un if sin if solo con datos booleanos

console.log("Tu nombre es: ", persona.nombre); //El objeto me permite tener parametros dentro de el

//Trabajamos varios datos = orientacion al detalle
console.log("Tu edad es: ", persona.edad);
console.log("Tu ciudad es: ",persona.ciudad);
console.log("Es mayor de edad?", esMayor);

/*alert("El nombre ingresado es: " +persona.nombre + "La edad es: "+ persona.edad );*/