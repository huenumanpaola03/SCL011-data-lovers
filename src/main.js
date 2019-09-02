window.onload =() =>{


const lolData=Object.values(LOL);
for (let i=0; i<lolData.lenght; i++){
    document.getElementById("container").innerHTML+=`
    <img src="${LOL[i].splash}">`
  }