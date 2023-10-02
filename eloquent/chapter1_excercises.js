/**
 * Write a loop that makes seven calls to console.log to output the following triangle
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 * Tip:You can find the length of a string by writting .length after it
 * 
 *I think the best way to go is with a for
 */

let hash = "#";
let iterar = "";
for (let i = 0; i < 7; i++) {
    iterar = iterar + hash // No tuve que indicarle posicion por que el loop corre sin necesidad de especificar su longitud
    console.log(iterar)
}

console.log(`----------------------Next is FizzBuzz-----------------------------`)

/**
 * 1) Write a program that uses console.log to print all the the numbers from 1 to 100, with exceptions. For numbers divisble by 3, print "Fizz" insted of number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 * 2) When you have that working, modify your program to print "FizzBuzz" for numbers that are divisble by both 3 and 5 ( and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
 */

/**
 * First, i'm going to do it step by step
 */

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

/***
 * jeje vamooooooooooooooooh, now goes the second one
 * print "FizzBuzz" for numbers that are divisble by both 3 and 5
 */
console.log(`-----------------Second Fiiz Buzz ------------------------------------------------`)

for (numbers = 1; numbers <= 100; numbers++) {
    if (numbers % 3 == 0 && numbers % 5 == 0) {
        console.log("FizzBuzz")
    } else {
        if (numbers % 3 == 0) {
            console.log("Fizz")
        } else if (numbers % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(numbers)
        }
    }
}


console.log(`---------------------------------------------Third exercise------------------------------------------------`)
console.log(`---------------------------------------CHESSBOARD------------------------------------------------`)

/**
 * Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 */

/** 
 * Step by step, new line is \n
 */
//let square = " #";
//let blank =" ";
for (i = 0; i < 4; i++) {
    console.log(" # # # #\n# # # # ")
}


/**
 *
 * When you have a program that generates this pattern, define a binding size=8 and change the program so that it works for any size, outputting a grid of the given width and height. 
 * 
 */
/*
let inLine = 2; // # #
let outLine = 2; // rows


if (inLine  % 2 == 0) {
  let blank = ""
  let hash="#"
    for (let i = inLine; i < outLine; i++){
        hash = hash + blank
        console.log(hash)
    }
   

     
} else {
    console.log("only pares pa")
}


*/

console.log("----------------------------OverStack Solution for chessBoard excercise---------------------------")

//I need two loops, the bigger one is for Y that will be my rows and the inner will be for the X's this on it will be place by place, the hint to place "" before "#" it's using the conditional with modular ((x+y)%2==0), why? because of each iteration of X i will calculate if my number is par, if not i will place "#""


let size = 8;
let position = "";

for (let y = 0; y < size; y++) {  //Rows loop
    for (let x = 0; x < size; x++) { //Column loop
        if ((x + y) % 2 == 0) {
            position = position + " "; //If %2== 0, so place a " "
        } else {
            position = position + "#"; // if not place a "#"
        }

    }

    position = position + "\n"; //When the loop it's finished i need to break the line so
}
console.log(position)

/*
function test(x1,x2){
    function anotherTEst(){
        let=x1+x2
    }
}
*/ //Why i can not use a var or const ???