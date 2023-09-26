//obj calculadora, atributos numeros, acciones operaciones
let numbContainer = [];
function number(n){
   
    numbContainer.push(n);
    
    console.log(numbContainer);
    }


function plusOperator(){
    let result = 0;
    for (let i=0; i<numbContainer.length; i++){
          result = result+numbContainer[i]; // result acumula
    console.log(result);
        }
    const total = document.getElementById("showResults");
    total.textContent = `: ${result}`;
}