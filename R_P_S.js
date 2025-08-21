function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const choice = Math.floor(Math.random()*3);
  return options[choice];
}


function hasPlayerWonTheRound(player, computer) {
  if((player === "Rock")&&(computer === "Scissors")){
    return true;
  }
  if((player === "Scissors")&&(computer === "Paper")){
    return true;
  }
  if((player === "Paper")&&(computer === "Rock")){
    return true;
  }

  if(player===computer){
    return false;
  }

  else {
    return false;
  }
  
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return "Player wins! " + userOption +" beats " + computerResult;
  } else if (computerResult === userOption) {
    return "It's a tie! Both chose " + userOption;
  } else {
    computerScore++;
    return "Computer wins! " + computerResult + " beats " + userOption;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if(playerScore === 3){
    winnerMsgElement.innerText = "Player has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }

  if(computerScore === 3){
    winnerMsgElement.innerText = "Computer has won the game!🖕";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}


function resetGame() {
   playerScore=0;
   computerScore=0;
   computerScoreSpanElement.innerText = computerScore;
   playerScoreSpanElement.innerText = playerScore;
   resetGameBtn.style.display = "none";
   optionsContainer.style.display = "block";
   winnerMsgElement.innerText = "";
   roundResultsMsg.innerText = "";
};