//Hacer una funcion,  function --parametro--(--Argumento--)


function suma(num1, num2){
    return num1 + num2; //Scope
}

console.log(suma)

let hola = "Hola gonorrea";
const MI_EDAD = 26;
console.log(MI_EDAD);

//Var es mas como una variable global, con let la variable sigue el camino de solucion
//Si esta en el mismo fichero se puede console.log(let); antes de que se ejecute, pero solo por que esta en el mismo fichero, pero no se puede hacer
//Si esta definida entre el scope solo ahi me va a dar valor
//Con console.log(typeof let) podemos saber que tipo de dato es la variable

let numero = 10;
numero = numero + 8; //La variable se puede sobreescribir
console.log('Jay que que',numero);
console.log(numero - 7);
console.log(numero);

let booleano = false;
console.log(typeof  booleano);
booleano = true;
console.log(booleano);

// NO le asigno valor then undefined
let myUndefined
console.log(myUndefined)

//Control de flujo

if (miNumero=10) {
    console.log ("El numero es igual a 10")
}else if (miNumero=11){
    console.log ("El numero es igual a 11")
}else{
    console.log ("El valor no es 10")
}

//Puedo comparar si un valor es true o false


booleano = null //646456 // Me  va a leer si booleano tiene un valor, si tiene me imprime, puede ser cualquier cosa, desde un string hasta un numero
if (booleano){
    console.log("null")
}


//Funciones, sirve para acotar codigo

function myFunction (){
    console.log ("Mi funcion")
}

myFunction ()

// con js puedo llamar mi funcion antes de crearla

function secondFunction (){
    return "mera lok"
}

console.log(secondFunction())

//Listas, conjunto de datos ordenados (array)

let myList = ["Duvan", 26, "Rodriguez", "Bogota"]
console.log (myList)
console.log (myList[0], myList[2])

//Set, datos no ordeandos y no acepta repetidos, Set es una palabra reservada

let mySet = ["Duvan", 26, "Rodriguez", "Bogota", "Bogota", "Duvan"]
console.log (typeof mySet) // Es un objeto

//Aplico palabra reservada Set para una nueva variable para poder visualizar el cambio

let mySet2 = new Set(["Duvan", 26, "Rodriguez", "Bogota", "Bogota", "Duvan"]) 
mySet2.add ("Rodriguez") //Le puedo agregar valores a mi set
console.log (mySet2) //Detecta repeticion y los elimina


//Mapas, diccionario

let myMap = new Map([["Duvan", 26], ["Pepito",30], ["PituoAbuelo", 40]]) //Clave valor, "Clave", valor, new Map ([]), no permite repetir clase
myMap.set("Goofy",18)//Agregar un valor
console.log(myMap)
console.log(myMap.get("Pepito") ) // get trae el valor


//Bucles, en estrucuturas con mas de un valor necesito iterar variables y acceder a estos valores

for(const value of mySet){
    console.log(value) // Creo la constante y le asigno un valor para que no cambie, analice mySet y me devuelva los valores
} //Buscar que valor vamos a guardarnos


//While
let myCounter = 0
while (myCounter <  myList.length) { // con <= js mira mas alla del valor especificado entonces dejo solo el <
    console.log(myList)
    console.log(myList[myCounter]) // Estoy ingresando a myList y le digo que compare myCounter con mySet
    myCounter++ //En cada itereacion aumento un valor
}

//clases

class MyClass{  //Definir tipo de objeto
        constructor(name, age){
            
        }
         //Un tipo de objeto concreto va a llevar un construsctor
}

let information = ["Duvan", "Rodriguez", 26, "Bogota", "Colombia"]
console.log("Tu nombre es " + information[0], "Y edad" + information[2])



//Factorial

let factorial = 7;

