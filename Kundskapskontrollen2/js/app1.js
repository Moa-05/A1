
/*
let wins = 0;
let losses = 0;
let draws = 0;
let result = "";
//let playerRollText = document.getElementById("playerRollText");
//playerRoll = 0;
//aiRoll = 0;
//let aiRollText = document.getElementById("aiRollText");


let playerResult = document.getElementById("playerResult").textContent = result;
let aiResult = document.getElementById("aiResult").textContent = result;
//let gameResult = document.getElementById("gameResult").textContent = result;
//let score = document.getElementById("score").textContent = `Win = ${wins} | Lost = ${losses} | Draw = ${draws}`;
let playerRoll = document.getElementById("playerResult").textContent = `Your Roll: ${playerRoll}`;
let aiRoll = document.getElementById("aiResult").textContent = `AI Roll: ${aiRoll}`;

//let playerRoll = showPlayerRollResult();
//let aiRoll = showAiRollResult();

document.getElementById("button0").addEventListener("click", () => {
  showPlayerRollResult();
  showAiRollResult();

  if (aiRoll > playerRoll) {
    result = "YOU WON!!";
    wins++;
  } else if (playerRoll < aiRoll) {
    result = "YOU LOST!";
    losses++;
  } else {
    result = "DRAW!";
    draws++;
  }
  document.getElementById("gameResult").textContent = result;
  document.getElementById("score").textContent = `Win =  ${wins} | Lost =  ${losses} | Draw =  ${draws}`;
});



/*
function showPlayerRollResult() {
  let roll = Math.floor(Math.random() * 6) + 1;
  document.getElementById("playerResult").textContent = `Your Roll: ${roll}`;
  return roll;
}

function showAiRollResult() {
  let roll = Math.floor(Math.random() * 6) + 1;
  document.getElementById("aiResult").textContent = `AI Roll: ${roll}`;
  return roll;
}


function showPlayerRollResult() {
  playerResult.innerHTML = Math.floor(Math.random() * 6) + 1;
}

function showAiRollResult() {
  aiResult.innerHTML = Math.floor(Math.random() * 6) + 1;
}

*/
