const lolData = Object.values(LOL.data);
window.lolData = lolData;


let container = document.getElementById("root");
 





// falta for no se donde posicionarlo aun 
const createCards = (lolData) => { 
  let characters = ""; 
  lolData.forEach(element => {
    
    card =
    ` 
    <div class="flip-card">
     <div class="flip-card-inner">
       <div class="flip-card-front">
       <div id = "name"> <p class="textAlign">${element.name}</p> </div>
       <img class="imagen-lol" src="${element.splash}" >
       </div>
       <div class="flip-card-back">
         <h1>Roles: ${element.info}</h1> 
       
       </div>
     </div>
   </div>
   `
     
     
    characters += card;
  })
  container.innerHTML = characters;
}

createCards(lolData);




const selecTags = document.getElementById("select-tags");
 selecTags.addEventListener("change",()=>{  
    const condition = selecTags.value 
    let results = window.filterT(lolData, condition);
    createCards(results);

 });


 

 

