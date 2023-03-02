// let startBtn=document.getElementById('start-btn');
// startBtn.addEventListener('click',getRandomNo);



// function magicNo(){
//   return Math.ceil(Math.random()*9);
// }

// let count;
// function getRandomNo(){
//   count=0;
//   let randomNo = magicNo();
//   let showRandom = document.getElementById('random-no');
//   showRandom.innerHTML=randomNo;

// let passingNo = [];

// while(passingNo.length<9){
//   let setRandom = magicNo();
//   if(!passingNo.includes(setRandom)){
//     passingNo.push(setRandom);
//   }
// } 

// console.log(passingNo);


// let createBox = passingNo.map((setBox)=>`<div onClick=checkingBox(event) data-target=${setBox}>${setBox}</div>`).join("");

// let containerBox = document.getElementById('container');
// containerBox.innerHTML=createBox;

// }

// function checkingBox(event) {
//   count += 1;
//   let num = event.target.dataset.target;
//   if (count <= 3) {
//     if (num == showRandom.innerText) {
//       event.target.classList.add("active-success");
//     } else {
//       event.target.classList.add("active");
//     }
//   } else {
//     alert("Your Chance over");
//   }
// }



 // Getting random number
 function magicNumber() {
  return Math.trunc(Math.random() * 10);
}
let displayNo = document.getElementById("random");
let btn = document.getElementById("ran-btn");
btn.addEventListener("click", generateRandom);
let count;
function generateRandom() {
  count = 0;
  let rand = magicNumber();
  displayNo.innerHTML = rand;

  let passingNo = [];
  while (passingNo.length < 10) {
    let setRand = magicNumber();
    if (!passingNo.includes(setRand)) {
      passingNo.push(setRand);
    }
  }

  let insBox = passingNo
    .map(
      (setBox) =>
        `<div onClick=checkingBox(event) data-target=${setBox}>${setBox}</div>`
    )
    .join("");
  let box = document.getElementById("container");
  box.innerHTML = insBox;
}

function checkingBox(event) {
  count += 1;
  let num = event.target.dataset.target;
  if (count <= 3) {
    if (num == displayNo.innerText) {
      event.target.classList.add("active-success");
    } else {
      event.target.classList.add("active");
    }
  } else {
    alert("Your Chance over");
  }
}