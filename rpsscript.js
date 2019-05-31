function computerPlay {
  let choice = Math.floor(Math.random() * 3);

  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else if (choice == 2) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if playerSelection != ("rock" || "scissors" || "paper") {
    return ""
  }
  if (playerSelection == computerSelection) {
    return "Tie! Play again!";
  }
}
