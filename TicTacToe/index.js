const cells = document.querySelectorAll(".cells");
const message = document.querySelector("#message");
const restartBtn = document.querySelector("#restart");

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOn = false;

initializeGame();

function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  message.textContent = `${currentPlayer}'s Turn`;
  gameOn = true;
}

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");

  if (options[cellIndex] != "" || !gameOn) {
    return;
  }
  updateCell(this, cellIndex);
  checkWinner();
}

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}
function changePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  message.textContent = `${currentPlayer}'s turn`;
}
function checkWinner() {
  let gameOver = false;

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      gameOver = true;
      break;
    }
  }

  if (gameOver) {
    message.textContent = `${currentPlayer} won`;
    gameOn = false;
  } else if (!options.includes("")) {
    message.textContent = "It is DRAW";
    gameOn = false;
  } else {
    changePlayer();
  }
}
function restartGame() {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  message.textContent = `${currentPlayer}'s Turn`;
  cells.forEach((cell) => (cell.textContent = ""));
  gameOn = true;
}
