const lolData = Object.values(LOL.data);

let container = document.getElementById("root");


// <<<<<<< HEAD
// selecTags = addEventListener("change", () => {
//   const selecTags = document.getElementById("select-tags");
//   for (let index = 0; index < lolData.length; index++) {
//     container.innerHTML += ` 
//  <div class="flip-card">
//   <div class="flip-card-inner">
//     <div class="flip-card-front">
//     <h3>Nombre: ${lolData[index].name}</h3>
//     <img class="imagen-lol" src="${lolData[index].splash}" >
//     </div>



//     <div class="flip-card-back">
//     <h1>${lolData[index].name}</h1>
//       <h4>Roles: ${lolData[index].tags}</h4> 
//       <h4>Tipo: ${lolData[index].partype}</h4> 

//         <h4> nivel de dicultad:${lolData[index].info.difficulty}</h4> 
//     </div>
//   </div>
// </div>`
//   }
// })


document.getElementById("who").addEventListener("click", () => {
  document.getElementById("firts-page").style.display = "none";
  document.getElementById("second-page").style.display = "block";
});

// falta for no se donde posicionarlo aun 
const createCards = (lolData) => {
  let characters = "";
  lolData.forEach(element => {

    card =
      ` div class="flip-card">
       <div class="flip-card-inner">
         <div class="flip-card-front">
         <h3>Nombre: ${lolData[index].name}</h3>
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
    //   }
    // })






    //   <div class="flip-card">
    //    <div class="flip-card-inner">
    //      <div class="flip-card-front">
    //      <div id = "name"> <p class="textAlign">${element.name}</p> </div>
    //      <img class="imagen-lol" src="${element.splash}" >
    //      </div>
    //      <div class="flip-card-back">
    //        <h1>Roles: ${element.info}</h1> 

    //      </div>
    //    </div>
    //  </div>
    //  `


    characters += card;
  })
  container.innerHTML = characters;
}

createCards(lolData);




const selecTags = document.getElementById("select-tags");
selecTags.addEventListener("change", () => {
  const condition = selecTags.value;
  let results = window.filterT(lolData, condition);
  createCards(results);

});



