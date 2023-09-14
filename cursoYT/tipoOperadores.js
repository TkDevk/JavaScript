//Relacionales: >, <, -->=, <=, ==, ===,, !=, !==
//En js te arroja por conola el valor de una vez

console.log(8>9);
console.log(11>9);

//Compuesto

console.log(8>=9);
console.log(9>=8); //Cumple al menos una

/*
= igual es asignacion al lado del igual
== con dos compara valores, como un if me devuelve un true o false
=== con 3 comparamos tipo de dato y valor, la buena practica es usar 3

*/

//Con 2==, compara valor

console.log(7==7); // va  a devolver un true
console.log("7"==7); // va  a devolver un true incluso siendo uno un string y el otro un numero
console.log(0==false); // devuelve un true por que 0 tiende a false

// pero con 3 === ya comparo el ti´po de valor y el dato coincidan

console.log(7===7);  //true
console.log("7"===7); //false
console.log(0===false); //false

//Operador unario

let i=2;

i++; // Da 3
i--; // Da 2 por que aqui i=3

console.log(i);