const lolData = Object.values(LOL.data);

let container = document.getElementById("root");


selecTags=addEventListener("change",()=>
 { 
     const selecTags =document.getElementById("select-tags");
    for (let index = 0; index < lolData.length; index++) {
 container.innerHTML+= ` 
 <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img class="imagen-lol" src="${lolData[index].splash}" >
    </div>
    <div class="flip-card-back">
      <h1>Roles: ${lolData[index].info}</h1> 
    
    </div>
  </div>
</div>

`
 }})


