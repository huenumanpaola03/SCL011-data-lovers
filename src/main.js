const lolData = Object.values(LOL.data);
    

let container = document.getElementById("root");
const selectpartype = document.getElementById("options");



document.addEventListener("load", () => {
    createCards(lolData);
});




let createCards = (array) =>{
    for (let i=0; i< array.length; i++)

for (let i=0; i< lolData.length; i++); {

    let cardContainer = document.createElement("div");
 
    

    let splash = document.createElement("img");
   splash.setAttribute= splas
   
   



    cardContainer.appendChild(splash);
    container.appendChild(cardContainer).innerHTML; 
}}




selectpartype.addEventListener("change",() => {
    const condition = document.getElementById("options").value;
    let results = filterP(lolData, condition);
    createCards(results);
  
})




