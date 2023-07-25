const squares = document.querySelectorAll(".squares");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
const timeLeft = document.querySelector("#timeLeft");

let result = 0;
let timerId = null;
let hitPos;
let currentTime = 30;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomSquares = squares[Math.floor(Math.random() * 9)];
  randomSquares.classList.add("mole");
  hitPos = randomSquares.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPos) {
      result++;
      score.textContent = result;
      hitPos = null;
    }
  });
});
function moveMole() {
  timerId = setInterval(randomSquare, 250);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime == 0) {
    clearInterval(countDownTimer);
    clearInterval(timerId);
    alert("GAME OVER!!, Your Final Score is " + result);
  }
}

let countDownTimer = setInterval(countDown, 1000);
