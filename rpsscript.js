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

//deprecated - wipe when done
//function playerPlay() {
//  return prompt("Rock, Paper, or Scissors?", "Choose your weapon.").toLowerCase();
//}

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

function playRound(playerSelection) {
  return compareSelection(playerSelection, computerPlay());
}

function game() {
  let computerSelection;
  let playerSelection;
  let playerScore = 0;
  let computerScore = 0;
  let roundResult;
  /*
  1. listen for button press
  2. on button press, call playRound, passing playerSelection
  3. playRound will return result as described in compareSelection: 1 for player wins round, 2 for computer wins round, 0 for tie
  4. store result in score tally, display on scoreboard - remember to bui
  5. announce winner once one side gets 5 points
  */
  //loop for five rounds

  /* LISTENERS */
  const buttons = document.querySelectorAll('button')

  buttons.forEach(button) => {
      btn.addEventListener('click', playRound(button.id));
  }



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
