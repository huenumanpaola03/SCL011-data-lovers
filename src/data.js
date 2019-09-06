 const filterT = (lolData, condition) => {

   let result = lolData.filter (element =>{
     return element.tags.includes(condition);
   })
   return result;
 }
window.filterT = filterT;

