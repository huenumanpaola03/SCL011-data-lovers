//creamos funcion que filtre dependiendo de la condicion que en este caso sera de sus estiquetas 
const filterT = (lolData , condition) => {
  let result = lolData.filter(element => {
    return element.tags.includes(condition);
  });
  return result;
};
window.filterT = filterT;
//
const calculatingT = (lolData, condition) => {
  let calculateResult = filterT(lolData,condition).length;  
  return calculateResult;
 }
 window.calculatingT = calculatingT;



// creamos funcion que filtre que en este caso sera en su condicion de etiquetas 
const filterP = (lolData, condition2) => {
  let result = lolData.filter(element => {
    return element.partype.includes(condition2);
  })
  return result;
}
window.filterP = filterP;
//
const calculatingP = (lolData, condition2) => {
  let calculateResultP = filterP(lolData,condition2).length;  
  return calculateResultP;
 }
 window.calculatingP = calculatingP;

// creamos funcion la cuan ordenara de A a a la Z o de Z a la A dependiendo de la seleccion.
const sortName = (lolData,sort,condition3)=> {
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

