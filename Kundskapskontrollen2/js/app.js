let wins = 0;
let losses= 0;
let draws = 0;

document.getElementById("button0").addEventListener("click", () => {
  const playerRoll = Math.floor(Math.random() * 6) + 1;
  const aiRoll = Math.floor(Math.random() * 6) + 1;

  document.getElementById("playerResult").textContent = `Player Roll: ${playerRoll}`;
  document.getElementById("aiResult").textContent = `AI Roll: ${aiRoll}`;

  let result = "";

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

  document.getElementById("gameResult").textContent = result;
  document.getElementById("score").textContent = `Win = ${wins} | Lost = ${losses} | Draw = ${draws}`;
});
