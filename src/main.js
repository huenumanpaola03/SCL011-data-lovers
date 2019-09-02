const lolData=Object.entries(LOL.data);
console.log(lolData);
let name = '';
for (let index = 0; index < lolData.length; index++) {
   for (name in lolData) {
      name = lolData[name];
   }
   console.log(name);   
}


// for (let index = 0; index < lolData.length; index++) ;
   
