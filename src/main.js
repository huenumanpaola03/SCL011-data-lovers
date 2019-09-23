// traemos la data convirtiendola en array para poder llamar los datos necesarion desde acá con object value.
// hacemos global la data renombrada.
const lolData = Object.values(window.LOL.data);
window.lolData = lolData;


document.getElementById("next").addEventListener("click", () => {
  document.getElementById("firts-page").style.display = "none";
  document.getElementById("second-page").style.display = "block";
});


//creamos funcion que con characters vacio el cual sera en contenedor de cards el cual contendra las cartas dependiendo la necesidad del usuario 
//su informacion. todo esto se enviara impreso a root el cual contendra todas las impresiones dependiendo su filtro.
const container = document.getElementById("root");
const createCards = (lolData) => {
  let characters = "";
  lolData.forEach(element => {
    const cards =

      `  <div class= "flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <h3 id="namee">${element.name} </h3>
    <img class="imagen-lol" src="${element.splash}" >
    </div>
    

    <div class="flip-card-back">
         <h4>Tipo: ${element.partype}</h4> 
        <h4> Nivel de dificultad:${element.info.difficulty}</h4> 
        <h4> Nivel de ataque:${element.info.attack}</h4> 
        <h4> Nivel de defensa: ${element.info.defense}</h4>
        </div>
  </div>
</div>`

    characters += cards;
  })
  container.innerHTML = characters;
}
createCards(lolData)


document.getElementById("logo").addEventListener("click", () => {
  document.getElementById("firts-page").style.display = "block";
  document.getElementById("second-page").style.display = "none";
});

// creamos funciones que al seleccionar una opcion traiga su valor lo cual se va "comparar" con su filtro y el resultado se mostrara en las cartas ya echas 
const selecTags = document.getElementById("select-tags");
selecTags.addEventListener("change", () => {
  const condition = selecTags.value
  let results = window.filterT(lolData, condition);
  createCards(results);
});
const calculationFunctions = document.getElementById("calculation");
selecTags.addEventListener("change", () => {
  calculationFunctions.style.display = "block";
  let conditionST = selecTags.value;
  let resultCF = window.calculatingT(lolData, conditionST);
  calculationFunctions.innerHTML = "";
  calculationFunctions.innerHTML += `
      <div>
      <h3> Del total de los personajes; ${resultCF} Son de esta etiqueta</h3>
      </div>
      `
});


//creamos funcion que filtre por el filtro de tipo de personaje que el usuario eliga 
const selectpartype = document.getElementById("select-partype");
selectpartype.addEventListener("change", () => {
  const condition2 = selectpartype.value;
  let results2 = window.filterP(lolData, condition2);
  createCards(results2);
});
selectpartype.addEventListener("change", () => {
  calculationFunctions.style.display = "block";
  let conditionSP = selectpartype.value;
  let resultCSP = window.calculatingP(lolData, conditionSP);
  calculationFunctions.innerHTML = "";
  calculationFunctions.innerHTML += `
      <div>
      <h3> Del total de los personajes; ${resultCSP} Son de este tipo</h3>
      </div>
      `
});



// creamos funcion que ordene de la A a Z y de Z a A los personajes dependiendo de la necesidad del usuario
const selectOrder = document.getElementById("name");
selectOrder.addEventListener('change', () => {
  const condition3 = selectOrder.value;
  let result3 = window.sortName(lolData, "name", condition3);
  createCards(result3);
});







