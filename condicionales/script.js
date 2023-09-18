//Realizaremos un programa que me diga si aprobo o reprobo un semestre

// Ejercicio mediante condicionales   if-else

//Incializacion de variables

/*
let calificacion = 3.0;
let resultado;

/* Incializacion de condicional*/
/*
if(calificacion >= 3.0){
    resultado="Aprobado";
} else{
    resultado = "Reprobo";
}
console.log(`El estudiante esta ${resultado}`);

*/


/*Con ternarios seria: */ 
/*
let calificacion = 3.0;
let resultado = calificacion>=30 ? "Aprobado" : "Reprobado";

console.log(`El estudiante esta ${resultado}`);
*/


//Numero par o impar
/*
let numero=4;
let resultado;  /*let resultado = numero%2 == 0? "Par" : "Impar"; //

if (numero%2==0){
    resultado = "Par"
}else{
    resultado = " impar"
}
console.log(`Su n



let numero = 7;
let resultado = numero%2 == 0? true : false;
console.log(resultado? "El numero es par" : "El numero es impar");



let diaDeLaSemana = "Miercoles";
let actividad;

if(diaDeLaSemana === "Lunes"){
    actividad = "Sapo XD";
}else if (diaDeLaSemana === "Miercoles"){
    actividad = "Mira pa sha";
}else{
    actividad = "solo descanso papa";
}

console.log(`Hoy es ${diaDeLaSemana} y se hace ${actividad}`);
*/

let diaDeLaSemana = "Miercoles";
let actividad = (diaDeLaSemana === "Lunes") ? "Reunion de equipo de trabajo" : (diaDeLaSemana === "Miercoles") ? "Clase de Python" : "A mimir";
console.log(`Hoy es ${diaDeLaSemana} y se hace ${actividad}`);