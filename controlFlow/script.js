//Definir la funcion

function generarTabla(){
    //Obtiene los datos que se inserten en el campo del input
    const numero = parseFloat(document.getElementById("numero").value); //No hay necesidad de prompt por que ya lo estoy pidiendo por html
    /*value es un metodo que captura el dato al que estoy teniendo acceso*/
    //podria ser #tabla tbody pero si es etiqueta
    const tablaBody = document.querySelector("table tbody"); //querySelector Nos permite seleccionar tipo de datos en vez de un dato especifico, como que me traiga el id, tag o clase que quiera, solo agarra el padre junto con el hijo, agarra el padre e hijo, tablaBody necesita datos le digo de donde quiero que coja los valores, que los coja de table padre que tiene tbody hijo

    //Inicializamos el proceso
    for(let i=1;i<=10;i++){

        // El valor con el que se va a multiplicar
        const resultado = numero * i;
        //Nos mostrara en forma de tabla los resultados de las multiplicaciones

        const row = document.createElement("tr");
        const numeroCell = document.createElement("td"); 
        const resultadoCell = document.createElement("td");


        //Esta linea nos ayudara a mostrar el numero que se inserto
        numeroCell.textContent = numero;
       
        //Esta linea nos ayuda a mostrar los resultados en la tabla
        resultadoCell.textContent = resultado;

        //El appenChild nos ayuda a ingresar los elementos de forma continua, osea un elemento debajo del otro
        row.appendChild(numeroCell);
        row.appendChild(resultadoCell);

        //uso la constante e ingreso con el metodo appen child
        tablaBody.appendChild(row);
       

    }

} 