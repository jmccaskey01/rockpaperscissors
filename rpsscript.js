let playerScore = 0;
let computerScore = 0;
let round = 0;
let computerSelection;
let playerSelection;

const buttons = document.querySelectorAll('button');
const scoreBoard = document.querySelector('.scoreBoard');

function computerPlay() {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0: return computerSelection = "rock";
    break;
    case 1: return computerSelection = "paper";
    break;
    case 2: return computerSelection = "scissors";
  }
}

// REFACTOR
function compareSelection(playerSelection, computerSelection) {
  //return 1 if player wins, return 2 if computer wins, return 0 if tie?
  //refactor with ? operator?
  //I trust integers more than strings I guess
  //can be refactored a lot of ways, just ensure function takes two choices for
  //the game, compares them, returns the winner in a consistent way
  if (playerSelection == computerSelection) {
    return 0;
  } else if (playerSelection == "rock") {
      if (computerSelection == "paper") {
        return 2;
      } else if (computerSelection == "scissors") {
        return 1;
      }
  } else if (playerSelection == "paper") {
      if (computerSelection == "scissors") {
        return 2;
      } else if (computerSelection == "rock") {
        return 1;
      }
  } else if (playerSelection == "scissors") {
      if (computerSelection == "rock") {
        return 2;
      } else if (computerSelection == "paper") {
        return 1;
      }
  } else {
    return 0;
  }
}

function playRound(buttonID) {
  playerSelection = buttonID;
  return compareSelection(playerSelection, computerPlay());
}

function updateScoreboard(roundResult) {

  round++;

  if (roundResult == 1) {
    playerScore++;
    scoreBoard.innerHTML =`Round: ${round} <br>
     Player: ${playerSelection} <br>
     Computer: ${computerSelection} <br>
     Winner: Player <br>
     Score: Player:${playerScore}  Computer:${computerScore}`;
  } else if (roundResult == 2) {
    computerScore++;
    scoreBoard.innerHTML =`Round: ${round} <br>
     Player: ${playerSelection} <br>
     Computer: ${computerSelection} <br>
     Winner: Computer <br>
     Score: Player:${playerScore}  Computer:${computerScore}`;
  } else if (roundResult == 0) {
    scoreBoard.innerHTML =`Round: ${round} <br>
     Player: ${playerSelection} <br>
     Computer: ${computerSelection} <br>
     Winner: Tie <br>
     Score: Player:${playerScore}  Computer:${computerScore}`;
     }
}



buttons.forEach((button) => {
    button.addEventListener('click', () => {
    updateScoreboard(playRound(button.id));
    });
});


  /*
  1. listen for button press DONE
  2. on button press, call playRound, passing playerSelection DONE
  3. playRound will return result as described in compareSelection: 1 for player wins round, 2 for computer wins round, 0 for tie
  4. store result in score tally, display on scoreboard - remember to build
  5. announce winner once one side gets 5 points
  */
  //loop for five rounds

  /* LISTENERS */
