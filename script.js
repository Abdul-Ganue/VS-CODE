let num1 = document.getElementById("num1"),
  num2 = document.getElementById("num2"),
  btnStart = document.getElementById("btnStart"),
  addNum = document.getElementById("addNum"),
  limit = document.getElementById("initial-num");

limit.innerHTML = Math.floor(Math.random() * 100 + 1);

let totalNum = 0;
function nextRand() {
  btnStart.innerText = "Next Number";
  num1.innerText = Math.floor(Math.random() * 10 + 1);
  num2.innerText = Math.floor(Math.random() * 10 + 1);
  // addRands();
  checkLimit();

  function addRands() {
    let rand = Number(num1.innerText) + Number(num2.innerText);
    totalNum += rand;
    addNum.innerText = totalNum;
  }

  function checkLimit() {
    addRands();
    if (totalNum > Number(limit.innerText)) {
      // stopGame();
      alert("You lost Sorry!");
    } else if (total === Number(limit.innerText)) {
      alert("Hurray, Your numbers matched!");
    }
  }
}

function stopGame() {
  btnStart.innerText = "Start Game";
  num1.innerText = 0;
  num2.innerText = 0;
  totalNum = 0;
  addNum.innerText = 0;
  limit.innerHTML = Math.floor(Math.random() * 100 + 1);
}

// nextRand();
