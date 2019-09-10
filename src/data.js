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



let sortName = (lolData,sort,condition3)=> {
 let orderName = lolData;
 if (condition3 == "a-z"){
orderName.sort((a,b)=> {
 if (a[sort] < b[sort]) {return -1;}
 if (a[sort] > b[sort]) {return  1;}
 return 0;
})
}
if (condition3 == "z-a"){
  orderName.sort((a,b)=> {
   if (a[sort] > b[sort]) {return -1;}
   if (a[sort] < b[sort]) {return  1;}
   return 0;
  })
}
return orderName;
}

window.sortName = sortName;




