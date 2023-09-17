/*Escribir un programa que permita ingresar nombres de personas en una lista, si el nombre del usuario ya existe que no se puede ingresar por que ya esta dentro de la lista
*/
let promedio = [];


function calcularPromedio() {

    const notaInput = document.getElementById("notas");
    const nota = parseFloat(notaInput.value);
    if ((nota !== "") && (nota < 10) && (nota > 0)) {

        promedio.push(nota);

    } else { alert("Por favor ingresa cinco notas"); }
    console.log(nota);
}


function total() {
    let suma = 0;
    let resultado = 0;
    for (let i = 0; i < promedio.length; ++i) {

        suma = suma + promedio[i]
        resultado = suma / 5;
    }
    const mostrarPromedio = document.getElementById("mostrarResultados");
    mostrarPromedio.textContent = "Tu promedio es: " + resultado;

}