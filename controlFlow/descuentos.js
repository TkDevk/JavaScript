//Declarar la funcion
function calcularDescuento(){

    //Obtener en valor ingresado por el usuario
    const precio = parseFloat(document.getElementById("precio").value);
    //Declaro una variable para calcular el descuento basado en el precio
    let descuento;
     //Calcular el descuento

     if(precio >=100000 && precio < 500000){
         descuento=10;
     }else if (precio >= 500000 && precio < 1000000){
         descuento=20;
     }else if (precio >= 10000000){
         descuento=30;
     }else{  //Pero si ninguna de las anteriores
        descuento=0;
     }
     //Calcular el precio final despues del descuento
     const precioFinal = precio - (precio*(descuento/100));
     
     //Mostrar el document
     const resultadoElement = document.getElementById("resultado");
     resultadoElement.textContent = "El precio final con descuento es de: $" + precioFinal.toFixed(2);
     //El tofixed se utiliza para formatear un numero deciaml y especificar la cantidad de decimales que se deben ingresar despues del punto

}

