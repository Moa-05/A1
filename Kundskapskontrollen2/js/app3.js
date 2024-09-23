

let wins = 0;
let losses= 0;
let draws = 0;
let result = "";
let button0 = document.getElementById("button0");

button0.addEventListener("click", function () {
  playerRoll ();
  aiRoll ();
  resultOfGame ();

  document.getElementById("playerResult").textContent = `Your Roll: ${playerRoll}`;
  document.getElementById("aiResult").textContent = `AI Roll: ${aiRoll}`;

  document.getElementById("gameResult").textContent = result;
  document.getElementById("score").textContent = `Win = ${wins} | Lost = ${losses} | Draw = ${draws}`;
});

function playerRoll () {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

function aiRoll () {
  aiRoll = Math.floor(Math.random() * 6) + 1;
}

function resultOfGame () {
  if (playerRoll > aiRoll) {
    result = "YOU WON!!";
    wins++;
  } else if (playerRoll < aiRoll) {
    result = "YOU LOST!";
    losses++;
  } else {
    result = "DRAW!";
    draws++;
  }
}

