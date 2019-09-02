/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const lolData=Object.values(LOL)
console.log(lolData);

let result = lolData.filter(e =>{
  return e.tags.includes(tags);
})
console.log(result);
window.LOL=lolData;


// (dataLovers,tags)=> { 
// let result=dataLovers.filter(element => {
//   return element.tags.includes(tags);
// })
// return result 
// }
// window.dataLovers=LOL;

