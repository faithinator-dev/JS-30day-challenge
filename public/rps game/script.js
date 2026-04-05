let pScore = 0;
let cScore = 0;
const mainText = document.getElementById("result-main");
const subText = document.getElementById("result-sub");
const pScoreEl = document.getElementById("player-score");
const cScoreEl = document.getElementById("comp-score");

const emojiMap = { rock: "rock", paper: "paper", scissors: "scissors" };

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const compChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";
  let win = null;

  if (playerChoice === compChoice) {
    result = "It's a draw!";
  } else if (
    (playerChoice === "rock" && compChoice === "scissors") ||
    (playerChoice === "paper" && compChoice === "rock") ||
    (playerChoice === "scissors" && compChoice === "paper")
  ) {
    result = "You win!";
    win = true;
    pScore++;
  } else {
    result = "CPU wins!";
    win = false;
    cScore++;
  }

  // Update UI
  mainText.innerText = result;
  mainText.style.color =
    win === true ? "#10b981" : win === false ? "#ef4444" : "white";
  subText.innerText = `You chose ${emojiMap[playerChoice]} vs CPU ${emojiMap[compChoice]}`;
  pScoreEl.innerText = pScore;
  cScoreEl.innerText = cScore;

  if (pScore === 10 || cScore === 10) {
    mainText.innerText = pScore === 10 ? "('=') CHAMPION!" : "X DEFEATED!";
    document.querySelector(".choices").style.pointerEvents = "none";
    document.querySelector(".choices").style.opacity = "0.3";
  }
}

function resetGame() {
  pScore = 0;
  cScore = 0;
  pScoreEl.innerText = 0;
  cScoreEl.innerText = 0;
  mainText.innerText = "Pick your move!";
  mainText.style.color = "white";
  subText.innerText = "First to 10 wins.";
  document.querySelector(".choices").style.pointerEvents = "all";
  document.querySelector(".choices").style.opacity = "1";
}
