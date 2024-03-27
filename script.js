

function getComputerChoice() {
const randomNumber = Math.floor(Math.random()*3);

      if (randomNumber === 0) {
        return 'rock';
      } else if (randomNumber === 1) {
        return 'paper';
      } else if(randomNumber === 2) {
        return 'scissor';        
      } 
}


function gamePlaySelection(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
    return 'It/s a tie1';
} else if (
    (playerSelection === 'rock' && computerSelection === 'scissor') || 
(playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper')
) {
return `You win! ${playerSelection} beats ${computerSelection}`;
} else {
    return `You loose! ${computerSelection} beats ${playerSelection}`;
} 
}

function playGame() {
  const computerSelection = getComputerChoice();
  const playerSelection = prompt('Rock, Paper or Scissor?', 'Rock');
  console.log(gamePlaySelection(playerSelection, computerSelection));
}

playGame();
playGame();
playGame();
playGame();
playGame();



