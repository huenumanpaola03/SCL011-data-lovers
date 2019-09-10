const filterT = (lolData, condition) => {

  let result = lolData.filter (element =>{
    return element.tags.includes(condition);
  })
  return result;
}
window.filterT = filterT;



const filterP = (lolData, condition2) => {

 let result = lolData.filter (element =>{
   return element.partype.includes(condition2);
 })
 return result;
}
window.filterP = filterP;


// const calculType =(lolData,tags)=>{
//   let calculateResult = selecTags(lolData,tags).length;  
//   return calculateResult;

// }

