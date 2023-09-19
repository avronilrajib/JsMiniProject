let totalAttempts=5;
let  attempts = 0;
let totalWons=0;
let totallost=0;

const cardBody= document.querySelector(".card");
const form = document.querySelector("form");
const inputText=document.querySelector("#guessingNumber");
const resultText=document.querySelector(".resultText");
const remaing =document.querySelector(".remaing");
const chackButton = form.querySelector("#check");
const lostwin=document.createElement("p");

form.addEventListener("submit",function(){
  event.preventDefault();
  let guessingNumber=inputText.value;
   checkResult(guessingNumber);
});
 function checkResult(value){
    const random=getRandom(value);
    if(random==value){
        resultText.innerHTML=`You have Won`;
        totalWons++;

    }else{
        resultText.innerHTML=`You have Lost,Random Number Was: ${random}`;
        totallost++;
    }

    lostwin.innerHTML=`Won ${totalWons}, Lost ${totallost}`;
    lostwin.classList.add("large");
    cardBody.appendChild(lostwin);
 }
function getRandom(limit){
   return Math.floor(Math.random()*limit)+1;

}