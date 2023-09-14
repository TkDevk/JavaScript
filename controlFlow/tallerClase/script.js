//Declaro funcion
function calcularNumero(){
    //Declaro variable de entrada
    const numero = parseFloat(document.getElementById("numero").value);
     //Declaro un array o arreglo el cual quiero comparar
    const arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let comparar= false;
    let contador = 0;
    //Me pide entonces que compare el valor ingresado con el array que declare
    //const regex = /[0-9]/g;
    for(let i=0; i < arreglo.length; i++){ //comparo la posicion del arreglo no del numero
    //Debo asegurar que tome el numero ingresado y lo recorra por cada index de mi arreglo
    
   
    if( arreglo[i] === numero){
         
        contador++;
        comparar=true;
        break;
            
    }

}   

const repiteNumero = document.getElementById("resultado"); 
repiteNumero.textContent = "Tu numero aparece" + contador + " veces en el arreglo";
console.log(contador);

}