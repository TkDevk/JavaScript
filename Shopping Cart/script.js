const addInfoInput = document.getElementsByClassName('card--rate--button')
//As i'm going to receive many values with the buttons i'm going to use a loop for to go and verify the info with each button 
for(let i=0; i<addInfoInput.length; i++){
    const addInfoBtn = addInfoInput[i]; // Voy a recorrer cada posicion de mi entrada y lo voy a igualar a addInfoBtn, en cada iteracion addInfoBtn va a ser igual a esa iteracion 
    //Evento para cuando eso pase
    addInfoBtn.addEventListener('click', function(event){

       const buttonClicked = event.target // this has an event that uses the property target
       console.log('Perro hp')
       buttonClicked.parentElement.parentElement.parentElement.remove(); // with parent element we can remove the parent container
       

    })
}





function prueba(){
    console.log('Gonorrea no sirve')
}



function addInfoForm(){
    const addNameInput = document.getElementsByClassName('add--info--name');
    const addName = addNameInput.value;
    console.log(addName)
    const addLNameInput = document.getElementsByClassName('add--info--lastName');
    const addLName = addLNameInput.value;
    console.log(addLName)
    const addEmailInput = document.getElementsByClassName('add--info--email');
    const addEmail = addEmailInput.value;
    console.log(addEmail)
    const addSkillInput = document.getElementsByClassName('add--info--skill');
    const addSkill = addSkillInput.value;
    console.log(addSkill)
   


}


