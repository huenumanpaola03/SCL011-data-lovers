const lolData = Object.values(LOL.data);
window.lolData = lolData;


document.getElementById("next").addEventListener("click", () => {
  document.getElementById("firts-page").style.display = "none";
  document.getElementById("second-page").style.display = "block";
});


const container = document.getElementById("root");
const createCards = (lolData) => {
  let cards = "";
  lolData.forEach(element => {
    cards +=
      `  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <h3>${element.name} </h3>
    <img class="imagen-lol" src="${element.splash}" >
    </div>

    <div class="flip-card-back">
   
      <h4>Tipo: ${element.partype}</h4> 
    
        <h4> Nivel de dicultad:${element.info.difficulty}</h4> 
        <h4> Nivel de ataque:${element.info.attack}</h4> 
        </div>
  </div>
</div>`

  })
  container.innerHTML = cards;
}
createCards(lolData)




const selecTags = document.getElementById("select-tags");
selecTags.addEventListener("change", () => {
  const condition = selecTags.value
  let results = window.filterT(lolData, condition);
  createCards(results);
});


const selectpartype = document.getElementById("select-partype");
selectpartype.addEventListener("change", () => {
  const condition2 = selectpartype.value
  let results2 = window.filterP(lolData, condition2);
  createCards(results2);
});


const selectOrder = document.getElementById("name");
selectOrder.addEventListener('change', () => {
  let condition3 = selectOrder.value;
  let result3 = sortName(lolData, "name", condition3);
  createCards(result3);
});


document.getElementById("logo").addEventListener("click", () => {
  document.getElementById("firts-page").style.display = "block";
  document.getElementById("second-page").style.display = "none";
});
