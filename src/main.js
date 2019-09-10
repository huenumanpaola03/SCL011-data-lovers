
const lolData = Object.values(LOL.data);
window.lolData = lolData;

const selecTags = document.getElementById("filterType");
selecTags.addEventListener("change",()=>{  
     const condition = selecTags.value 
     let results = window.filterT(lolData, condition);
   createCards(results);

 });


const selectpartype = document.getElementById("filter P");
selectpartype.addEventListener("change",()=>{  
   const condition2 = selectpartype.value 
   let results2 = window.filterP(lolData, condition2);
   createCards(results2);

});


let container = document.getElementById("root");

document.getElementById("next").addEventListener("click", () => {
  document.getElementById("firts-page").style.display = "none";
  document.getElementById("second-page").style.display = "block";
});
 

const createCards = (lolData) => { 
  let characters = ""; 
  lolData.forEach(element => {
    
    card =
` 
 <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <h3>Nombre: ${element.name}</h3>
    <img class="imagen-lol" src="${element.splash}" >
    </div>

    <div class="flip-card-back">
    <h1>${element.name}</h1>
      <h4>Roles: ${element.tags}</h4> 
      <h4>Tipo: ${element.partype}</h4> 
    
        <h4> nivel de dicultad:${element.info.difficulty}</h4> 
    </div>
  </div>
</div>`
     
    characters += card;
  })
  container.innerHTML = characters;
}

createCards(lolData)


// document.getElementById("filterType").addEventListener("change",()=>{ 
//   document
// )