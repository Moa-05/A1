
// VARIBLES
//BUTTON
let button0 = document.getElementById("button0");

//TEXT
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let resultText = document.getElementById("result");

//DATA
let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0;
let aiScore = 0;
let drawScore = 0;

//PROCESS
button0.addEventListener("click", function () {
  showPlayerRollResult();
  showAiRollResult();

  if (playerRoll > aiRoll) {
    resultText.innerHTML = "YOU WIN!";
    playerScore++;
  } else if (aiRoll > playerRoll) {
    resultText.innerHTML = "YOU LOST!! :(";
    aiScore++;
  } else {
    resultText.innerHTML = "DRAW";
    drawScore++;
  }

  resultText.innerHTML += `<br> You Win: ${playerScore} | AI Win: ${aiScore} | Draw: ${drawScore}`;
});

// CONTROLLERS
function showPlayerRollResult() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
  playerRollText.innerHTML = `Your Roll: ${playerRoll}`;
}

function showAiRollResult() {
  aiRoll = Math.floor(Math.random() * 6) + 1;
  aiRollText.innerHTML = `AI Roll: ${aiRoll}`;
}
