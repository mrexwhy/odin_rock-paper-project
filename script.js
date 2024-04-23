

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
let playerScore = 0;
let computerScore = 0;
const body = document.querySelector("body");
const buttonArr = ['Rock', 'Paper', 'Scissor'];

  const resultDiv = document.createElement("div");
  resultDiv.id = 'result';
  resultDiv.style.border = '1px solid black';
  resultDiv.style.height = '100px';
  resultDiv.style.weight = '1000px';

  body.appendChild(resultDiv);


function gamePlaySelection(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
    return 'It/s a tie!';
} else if (
    (playerSelection === 'rock' && computerSelection === 'scissor') || 
(playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper')
) {
  playerScore++;
return `Player Win! ${playerSelection} beats ${computerSelection}`;
} else {
  computerScore++;
    return `Computer Win! ${computerSelection} beats ${playerSelection}`;
} 
}

  buttonArr.forEach(selection => {
  const button = document.createElement('button');
  button.textContent = selection;
  body.appendChild(button);

  button.addEventListener('click', () => playGame(selection));
});

function playGame(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = gamePlaySelection(playerSelection, computerSelection);
  winnerScore(result);
  displayResult(result);
}

function displayResult(result) {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = result;
  resultDiv.textContent += `\nPlayer: ${playerScore} - Computer: ${computerScore}`;
}  
  
function winnerScore (winner) {
  if (playerScore === 5 || computerScore === 5) {
    announceWinner();
  }
}

function announceWinner() {
  if (playerScore === 5) {
        alert('Congratulations! You win the game!');
    } else if (computerScore === 5) {
        alert('Sorry! Computer wins the game!');
    }
    // Reset the scores for a new game
    playerScore = 0;
    computerScore = 0;
    
}