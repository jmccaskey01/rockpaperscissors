function computerPlay() {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0: return "rock";
    break;
    case 1: return "paper";
    break;
    case 2: return "scissors";
  }
}

function playerPlay() {
//listen for button click, return that button click
}

function compareSelection(playerSelection, computerSelection) {
  //return 1 if player wins, return 2 if computer wins, return 0 if tie?
  //refactor with ? operator?
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


function game() {
  let computerSelection;
  let playerSelection;
  let playerScore = 0;
  let computerScore = 0;
  let roundResult;


  computerSelection = computerPlay();
  playerSelection = playerPlay();

  console.log(`Round: ${round}`);
  roundResult = compareSelection(playerSelection, computerSelection);

  if (roundResult == 1) {
    playerScore++;
    console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}. You won this round.`);
    console.log(`The current score is: Player:${playerScore}  Computer:${computerScore}`);
  } else if (roundResult == 2) {
    computerScore++;
    console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}. You lost this round.`);
    console.log(`The current score is: Player:${playerScore}  Computer:${computerScore}`);
  } else if (roundResult == 0) {
    console.log('It was a tie.');
    console.log(`The current score is: Player:${playerScore}  Computer:${computerScore}`);
  }

  console.log(`The final score is: Player: ${playerScore} Computer:${computerScore}`);
  if (playerScore > computerScore) {
    console.log("You won!");
  } else if (playerScore < computerScore) {
    console.log("You lost!");
  } else {
    console.log("The whole game was a tie.");
  }

}

game();
