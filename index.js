let scoreboard = document.createElement('h2');
scoreboard.id = "scoreboard";
container.insertBefore(scoreboard, buttons);
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
  playRound("rock");
});
paper.addEventListener('click', () => {
  playRound("paper");
});
scissors.addEventListener('click', () => {
  playRound("scissors");
});

function computerPlay() {
    randomNumber = Math.floor(Math.random()*3) + 1;
    if (randomNumber === 1) {
      return "rock";
    } else if (randomNumber === 2) {
      return "paper";
    } else if (randomNumber === 3) {
      return "scissors";
    } else return "Error";
}

const ul = document.createElement('ul');
ul.id = "resultList";
results.appendChild(ul);
const endGame = document.createElement('li');

function isEndGame() {
  if (playerScore == 5) {
    endGame.textContent = "You win!";
    ul.appendChild(endGame);
  } else if (computerScore == 5) {
    endGame.textContent = "Computer wins!";
    ul.appendChild(endGame);
  } else return;
}

function playRound(playerSelection) {
let computerSelection = computerPlay();
scoreboard.textContent = `${ playerScore } : ${ computerScore }`;
const li = document.createElement('li');
    if (playerSelection === computerSelection) {
      li.textContent = `You both chose ${ playerSelection } - It's a tie!`;
      ul.appendChild(li);
      isEndGame();
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      li.textContent = "You win! Rock beats scissors.";
      ul.appendChild(li);
      playerScore++;
      isEndGame();
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      li.textContent = "You lose! Rock beats scissors.";
      ul.appendChild(li);
      computerScore++;
      isEndGame();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      li.textContent = "You win! Scissors beat paper.";
      ul.appendChild(li);
      playerScore++;
      isEndGame();
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
      li.textContent = "You lose! Scissors beat paper.";
      ul.appendChild(li);
      computerScore++;
      isEndGame();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      li.textContent = "You win! Paper beats rock.";
      playerScore++;
      isEndGame();
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      li.textContent = "You lose! Paper beats rock.";
      computerScore++;
      isEndGame();
      return "lose";
    } else console.log ("That's not one of the three options, silly. Let's pretend it was a tie.");
  }
