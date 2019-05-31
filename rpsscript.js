function computerPlay() {
  let choice = Math.floor(Math.random() * 3);

  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else if (choice == 2) {
    return "scissors";
  }
}
function playerPlay() {
  return prompt("Rock, Paper, or Scissors?", "Choose your weapon.").toLowerCase();
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

  //loop for five rounds
  for (let round = 1; round <= 5; round++) {
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

  }

  console.log(`The final score is: Player: ${playerScore} Computer:${computerScore}`);
  if (playerScore > computerScore) {
    console.log("You won!");
  } else if (playerScore < computerScore) {
    console.log("You lost!");
  } else {
    console.log("The whole game was a tie.");
  }
  //display winner and score after 5 rounds
}

game();
