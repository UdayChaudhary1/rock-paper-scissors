let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  let choice = "";
  if (random === 0) {
    choice = "rock";
  } else if (random === 1) {
    choice = "paper";
  } else choice = "scissors";

  return choice;
}

function getHumanChoice() {
  let choice = prompt("Enter your choice");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase().trim();
  if (!["rock", "paper", "scissor"].includes(humanChoice)) {
    console.log("Enter a valid choice: rock, paper, scissors");
    return;
  }
  if (humanChoice === computerChoice) {
    console.log("Yay, you won!");
    humanScore++;
  } else {
    console.log("you lost");
    computerScore++;
  }
}

function playGame() {
  while (humanScore + computerScore !== 5) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
  if (humanScore > computerScore)
    console.log("Congratulations! You won this round!");
  else console.log("You lost, better luck next time!");
}

playGame();
