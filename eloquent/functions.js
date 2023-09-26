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