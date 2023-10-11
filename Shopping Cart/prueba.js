let containInfo=[];
function addInfoForm(){
    const addNameInput = document.getElementById('addInfoFormN');
    const addName = addNameInput.value;
    containInfo.push(addName);
    console.log(containInfo)
    const addLNameInput = document.getElementById('addInfoFormL');
    const addLName = addLNameInput.value;
    containInfo.push(addLName);
  
    const addEmailInput = document.getElementById('addInfoFormE');
    const addEmail = addEmailInput.value;
    containInfo.push(addEmail);

    const addSkillInput = document.getElementById('addInfoFormS');
    const addSkill = addSkillInput.value;
    containInfo.push(addSkill);
     
    
}

