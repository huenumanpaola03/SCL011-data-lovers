const lolData = Object.values(LOL.data);

let container = document.getElementById("root");


selecTags = addEventListener("change", () => {
  const selecTags = document.getElementById("select-tags");
  for (let index = 0; index < lolData.length; index++) {
    container.innerHTML += ` 
 <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <h3>Nombre: ${lolData[index].name}</h3s>
    <img class="imagen-lol" src="${lolData[index].splash}" >
    </div>



    <div class="flip-card-back">
    <h1>${lolData[index].name}</h1>
      <h4>Roles: ${lolData[index].tags}</h4> 
      <h4>Tipo: ${lolData[index].partype}</h4> 
    
        <h4> nivel de dicultad:${lolData[index].info.difficulty}</h4> 
    </div>
  </div>
</div>`
  }
})


document.getElementById("who").addEventListener("click", () => {
  document.getElementById("firts-page").style.display = "none";
  document.getElementById("second-page").style.display = "block";
});
