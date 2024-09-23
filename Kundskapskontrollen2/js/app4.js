
let wins = 0;
let losses = 0;
let draws = 0;
let result = "";
let button0 = document.getElementById("button0");

button0.addEventListener("click", function () {
  let playerRollValue = playerRoll();
  let aiRollValue = aiRoll();
  resultOfGame(playerRollValue, aiRollValue);

  document.getElementById("playerResult").textContent = `Your Roll: ${playerRollValue}`;
  document.getElementById("aiResult").textContent = `AI Roll: ${aiRollValue}`;

  document.getElementById("gameResult").textContent = result;
  document.getElementById("score").textContent = `Win = ${wins} | Lost = ${losses} | Draw = ${draws}`;
});

function playerRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

function aiRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

function resultOfGame(playerRoll, aiRoll) {
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

