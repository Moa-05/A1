/*
let wins = 0;
let losses= 0;
let draws = 0;
let result = "";
let playerRoll = document.getElementById("playerResult").textContent = `Your Roll: ${playerRoll}`;
let aiRoll = document.getElementById("aiResult").textContent = `AI Roll: ${aiRoll}`;
let button0 = document.getElementById("button0");


button0.addEventListener("click", function () {
  playerRoll12 ();
  aiRoll234 ();
  resultOfRoll ();
});

 document.getElementById("gameResult").textContent = result;
 document.getElementById("score").textContent = `Win = ${wins} | Lost = ${losses} | Draw = ${draws}`;


function playerRoll12 () {
  return Math.floor(Math.random() * 6) + 1;
}

function aiRoll234 () {
  return Math.floor(Math.random() * 6) + 1;
}

function resultOfRoll () {
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
*/
