/**
 * There are two types of functions, binding functions and declarate functions
 */

//bidings functions are like other bindings, can be use it as a let or const, so it could be use it in other functions.

//Functions as values

const square = function(x){
    return x*x;
}

console.log(square(2))
//4

/**
 * Functions also only look for its scope, sure can look into others but it will operate the values into its scope
 */

const half = function(n){
    return n/2;
};

let n=20;
console.log(half(100));
//50 half
console.log(n);//20

//Nested scope, this next excersie it will show how can Js detects global and local bindings, inside of a function scope we can nest another function as well

const purePapa = function(factor){ //factor = how many people will eat
    const ingredients = function(amount, unit, ingredient){
                let ingredientAmount = amount*factor; // i need to knwo how many ingredients i need to use }
                if (ingredientAmount>1){
                    unit=unit+"s" //This is style, so will be cups insted of cup, unit += "s";
                }// unit will receive a new value after the if scope

             console.log(`${ingredientAmount} ${unit} de ${ingredient}`)   
    };
//Now i have to call the function, i'm going to add my ingredients
   ingredients(3, "cucharada", "Mantequilla");
   ingredients(8, "kg", "Papa");
   ingredients(0.25, "cucharada", "Sal");
   ingredients(6, "pepa", "Almendras");

};

//I have to call the function and give it a parameter or argument
purePapa(3);

/**
 * Now declaration notation, with this is like it doesn't matter where is placed it, the control flow order from top to bottom doesn't apply for this kind of function, it will be run it as soon as the code start runnning
 * 
 * 
*/

console.log(`Declaration function ${add(4,6)}`);

function add(x1,x2){
       return x1+x2;
}

console.log("--------------------------------------------Practicing a bit------------------------------------------")
//Voy a hacer arroz para mi familia
function integrantes(n){
    function ingredientes(cantidad, unidadMedida, ingrediente){
        //Creo una variable para que me multiplique la cantidad con respecto al numero de integrantes
        let cantidadTotal = cantidad*n;
        console.log(`${cantidadTotal} ${unidadMedida} de ${ingrediente}`)
    }
      
    ingredientes(3, "tazas", "agua");
    ingredientes(1.5, "tazas", "arroz");
    ingredientes(2, "piscas", "sal");
    ingredientes(2, "tapitas", "aceite");

}

integrantes(5);

console.log("--------------------------------------------Practicing a bit------------------------------------------")
function factorial(n){
          function add(x1,x2){
          let resultado = (x1+x2)*(n*n)
            return console.log(resultado)
          };
    
     add(4,3)
}

factorial(3);



//Arrow functions
const power = function(base, exponent){
    let result =1 ;
    for (let i =0; i< exponent; i++){
        result = result*base; // Exponent things must multiply by itself
    }
    return result;
};

//With arrow functions i only need to place paranthesis with out the function word, like this


const power1 = (base,exponent) =>{
    let result=1;
    for(let i=0; i< exponent; i++){
        result= result*base;
    }
    return console.log(result);
};

power1(3,2);



//Another way to use an arrow function
const square1 = (x)=>{ return console.log(x*x);}

square1(2);

// if there is only one parameter i can use it without the paranthesis and without the return

const square2 = x => {console.log(x*x);}
square2(3);


//The call stack, when the function it is called goes to a stack in the memory and stayed there until the process it's finish and returns where it belongs


function greet(who){
    console.log("Hello "+ who); 

}

greet("Duvan");
console.log("Bye");

//When i call it it goes to the stack and then,  it goes like this: in greet, then in console.log, then in console is finished and now is in console.log("Bye")
console.log("------------------Optional Arguments------------------")
//Optional Arguments
//We defined square with only 1 parameter, if we call with 2 extra parameters that lengauge doesn't complain, it will ignore the others two and take the main one
function square3(x) {
    return x*x;
}

console.log(square(4, true, "hedgehog")); // in this case it will take only the first one

//We can use it in cases that we only recieve one of the arguments, doing equals to undefined

function minus(a,b){
    if(b==undefined){
        return -a;
    }else{
        return a-b;
    }
}

console.log(minus(20));
console.log(minus(10,30));


//We can also give value to the arguments, so it doesn't matter if we don't set a value in one of the arguments
function power3(base, exponent=3){
    let result= 1;
    for (let i =0; i < exponent; i++){
        result = result*base;
    }
    return result;
}
console.log(power3(3)); 
console.log(power3(3,4)); // it will replace the argument

console.log("-------------------------------------Closure----------------------------------------")

//Here we are creating a function with a binding that it's local
/*
function wrapValue(n){
    let local = n; // Local binding
    // La cree en wrapValue, so this functions is not necesary since local binding belongs to wrapValue
    return function(){
        return local;
    }
}*/

function wrapValue(n){
    let local = n;// Local binding
    // La cree en wrapValue, so this function is not necesary since local binding belongs to wrapValue
    return () => local;
}

//So when we call it 
let wrap1 = wrapValue(1);  //I can set values for args functions and then given them values as variables
let wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());
//It doesn't matter if i'm calling the same function with the same local binding, each time that i call it, it will be re-created because it belongs in its function envioronment when it is close, doesn't belong when i call it 

//Summary (for now), bindings are store in the stack when the function it is call, but it will belong to its own functions enviorenment due to the closure

function multiplier(factor){
    return number => number*factor ;
     
}
//i'm giving a value function, it is not a function anonymous anymore
let twice = multiplier(2); // here i call to multiplier which creates an enviorenment for factor parameter, in this the enviorenment for factor is = 2
console.log(twice(5));


function multiplier(factor){
    return function(number){
        return number*factor;
    }
}


//Using Math.min, create a function min that takes two arguments and returns their minimum
console.log(`---------------------------Exercises-----------------------------`)
function min(num1,num2){
   return console.log(`${Math.min(num1,num2)}`);
}
min(4,2)
