const lolData = Object.values(window.LOL.data);
window.lolData = lolData;


document.getElementById("next").addEventListener("click", () => {
  document.getElementById("firts-page").style.display = "none";
  document.getElementById("second-page").style.display = "block";
});
 
//creamos funcion que crea cartas con los elementos y las enviamos al contenedor root
const container = document.getElementById("root");
const createCards = (lolData) => { 
  let characters = ""; 
  lolData.forEach(element => {
  const card =
`  <div class="flip-card">
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



// creamos funciones que al seleccionar una opcion traiga su valor lo cual se va "comparar" con su filtro y el resultado se mostrara en las cartas ya echas 
const selecTags = document.getElementById("select-tags");
 selecTags.addEventListener("change", ()=> {  
    const condition = selecTags.value 
    let results = window.filterT(lolData, condition);
    createCards(results);
 });


const selectpartype = document.getElementById("select-partype");
selectpartype.addEventListener("change", ()=> {  
   const condition2 = selectpartype.value 
   let results2 = window.filterP(lolData, condition2);
   createCards(results2);
});
  

  const selectOrder= document.getElementById("name");
  selectOrder.addEventListener('change', ()=> {
    let condition3 = selectOrder.value;
    let result3 = window.sortName(lolData,"name",condition3);
    createCards(result3);
  });