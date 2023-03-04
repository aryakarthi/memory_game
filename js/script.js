// Getting random number

function magicNumber() {
  return Math.ceil(Math.random() * 9);
}

let showNo = document.getElementById("random-no");
let startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", generateRandom);

let count;
function generateRandom() {
  count = 0;
  let randomNo = magicNumber();
  showNo.innerHTML = randomNo;

  let arrRandom = [];

  while (arrRandom.length < 9) {
    let getRandom = magicNumber();
    if (!arrRandom.includes(getRandom)) {
      arrRandom.push(getRandom);
    }
  }

  let createBox = arrRandom
    .map(
      (setBox) =>
        `<div onClick=checkingBox(event) data-target=${setBox}>${setBox}</div>`
    )
    .join("");
  let containerBox = document.getElementById("container");
  containerBox.innerHTML = createBox;
}

function checkingBox(event) {
  count += 1;
  let num = event.target.dataset.target;
  if (count <= 3) {
    if (num == showNo.innerText) {
      event.target.classList.add("active-success");
    } else {
      event.target.classList.add("active");
    }
  } else {
    alert("Your chance is over.!");
  }
}