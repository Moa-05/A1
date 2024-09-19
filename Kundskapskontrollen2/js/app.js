// Document Elements

// Looks for "text0". Assigns that to the variable called textField0.
const textField0 = document.getElementById("text0");

// VARIABLES


// Buttons
const increaseScoreButton = document.getElementById("button0");
let button0 = document.getElementById("button0");


// Internal Variables
let score = 0;

// Texts
let playerRollText = document.getElementById("playerRollText");

// Process (What is going to happen in what sequence?)
increaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne();
  updateScoreText();
  checkScoreForSeven();

// Data
  let playerRoll = 0;

// PROCESSES
  button0.addEventListener("click", function() {
    getRandomNumberOneToSixForPlayer();
    showPlayerRollResult();
  });


// Controllers
  function increaseScoreByOne() {
    score++;
  }

  function checkScoreForSeven() {
    if (score >= 7) {
      changeScoreTextColorToGreen();
    }
  }

// View
  function updateScoreText() {
    textField0.innerHTML = "Your score is: " + score;

// CONTROLLERS
    function getRandomNumberOneToSixForPlayer() {
      playerRoll = Math.floor(Math.random() * 6) + 1;
    }

    function changeScoreTextColorToGreen() {
      textField0.style.color = "green";
    }

// VIEWS
    function showPlayerRollResult() {
      playerRollText.innerHTML = playerRoll;
    }
