/**
 * Declaro la funcion que voy a usar
 */

function registrar(){
    const inputNombre = document.getElementById("nombre").value;
    const inputApellido = document.getElementById("apellido").value;
    const lista = document.getElementById("listas");
    
    const fullName = `${inputNombre} ${inputApellido}`
    console.log(fullName)
    
    if (inputApellido!=='' && inputNombre!=='') {
    /**
     * Creo una variable que me va a crear los elementos li
     */
    const newList = document.createElement('li');
    console.log(newList)
    newList.textContent = fullName;
    lista.appendChild(newList);
    }


    
}
