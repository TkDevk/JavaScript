/*let containInfo=[];
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


*/
let usersArray=[]
let idUpdate=0;
const profileImg = document.getElementById('addImg'), input = document.getElementById('addImgInput');
input.addEventListener("change", function() {
  profileImg.src = URL.createObjectURL(input.files[0]);
});
function addInfoForm(){
const addInfoService = document.getElementById('addInfoService').value;
const addDescription  = document.getElementById('addInfoDescription').value;
const addInfoPrice = document.getElementById('addInfoPrice').value;
const addInfoPortFolio = document.getElementById('addInfoPortFolio').value;
const list = document.getElementById('list');



//Instanciando re duro el array
let usersArray= [ // Uso los brackets por que para el for each tiene que ser solo con arrays
     {
     id:idUpdate++, //Si no lo incio en 0 no incrementa xD
     serviceName: addInfoService,
     descriptionName: addDescription,
     priceInfo: addInfoPrice,
     portfolioInfo: addInfoPortFolio,
     img: profileImg.src,
    
     },


     
] // Sigue siendo array que contiene dos objetos los cuales van a recibir strings

console.log(usersArray)

/*
const newCard = document.getElementById('user');
newCard.innerHTML = '';

usersArray.forEach(user => { //forEach(value, index)
  const cardHTML = `<article class="card--container">
    <header class="card-figures">
      <button class="saved--icon">
        <i class="fa-solid fa-bookmark aside-icon"></i>
      </button>
    </header>
    <footer class="card--description">
      <h3 class="card--user-name">${user.serviceName}</h3>
      <span class="card--skill"> ${user.descriptionName}</span>
      <p class="card--price">Price ${user.priceInfo}</p>
      <p class="card--price">Price ${user.portfolioInfo}</p>
      <picture class="card--rate--button--container">
        <button id="avatar-perfil--button" type="">
          <i class="fa-solid fa-star"></i> 4.4
        </button>
        <button class="card--rate--button">Contact</button>
      </picture>
    </footer>
  </article>`;

  newCard.innerHTML += cardHTML;
});
*/
let listUsers =[];
//Init function
   usersArray.forEach((user, key)=>{
   let newInfo = document.createElement('article');
   newInfo.innerHTML = `<article class="card--container">
   <header class="card-figures">
     <button class="saved--icon">
       <i class="fa-solid fa-bookmark aside-icon"></i>
     </button>
   </header>
   <footer class="card--description">
     <h3 class="card--user-name">${user.serviceName}</h3>
     <span class="card--skill"> ${user.descriptionName}</span>
     <p class="card--price">Price ${user.priceInfo}</p>
     <p class="card--price">Check my portfolio ${user.portfolioInfo}</p>
     <img id="#addImg" src="${user.img}">
     <picture class="card--rate--button--container">
       <button id="avatar-perfil--button" type="">
         <i class="fa-solid fa-star"></i> 4.4
       </button>
       <button class="card--rate--button">Contact</button>
     </picture>
   </footer>
 </article>`;
  list.appendChild(newInfo);
        
});
const jsonButton = document.getElementById('btn');
jsonButton.addEventListener('click', function() {
  const key = 0; 
  if (listUsers[key] == null) {// Si no existe crea una copia en
    listUsers[key] = JSON.parse(JSON.stringify(usersArray[key]));//usersArray
    listUsers[key].quantity = +1;
    console.log(`Json ? ${listUsers.length}`);
  }

});
//Adding profile img });

}


