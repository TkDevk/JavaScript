function power(base, exponent){
    if(exponent ==0){
        console.log(exponent);
        return 1;
    }else{
        return base*power(base, exponent-1);
       
    }
}
console.log(power(2,3));



//Growing up functions
// in this example we want to count cos and chickes with 3 digits long values so,

function farmInventory(cows, chickens){
    let cowString = String(cows);  //Setting value as String
    while(cowString.length < 3){ //Wit this line i can assure that will be 3 digits
          cowString = "0"+cowString;
    }console.log(`${cowString} Cows`);
    //now i go with the chickens
    let chickenString = String(chickens);

    while(chickenString.length < 3){
        chickenString='0'+chickenString;
    }console.log(`${chickenString} Chickens`)
}

farmInventory(30,21);

//Excersie using the same function but instead of printing only 2 famr animals we can print 3, so in the first function we are going to make the process to count and in the second we are going to create the print function

function zeroPad(number,width){
    let numberAnimals = String(number)
    while(numberAnimals.length<width){
        numberAnimals = '0' + numberAnimals;
    }
    return numberAnimals;
}
//Let's do the print function

function printAnimalsFarm(pigs, cows, chicken){
    console.log(`${zeroPad(pigs,3)} Pigs`);
    console.log(`${zeroPad(cows,3)} Cows`);
    console.log(`${zeroPad(chicken,3)} Chickens`);
}
    
printAnimalsFarm(30,21,87);