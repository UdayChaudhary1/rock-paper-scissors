const play = document.querySelector(".play");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
let humanChoice = "";
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;
let click = 0;

play.addEventListener("click", () => {
  play.style.display = "none";
  rock.style.display = "inline";
  paper.style.display = "inline";
  scissors.style.display = "inline";
});

rock.addEventListener("click", () => {
  humanChoice = "rock";
  computerChoice = getComputerChoice();
  compareAndShowResult();
  click++;
  checkRounds();
});

paper.addEventListener("click", () => {
  humanChoice = "paper";
  computerChoice = getComputerChoice();
  compareAndShowResult();
  click++;
  checkRounds();
});

scissors.addEventListener("click", () => {
  humanChoice = "scissors";
  computerChoice = getComputerChoice();
  compareAndShowResult();
  click++;
  checkRounds();
});

function checkRounds() {
  if (click === 5) {
    play.style.display = "inline";
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
    if (humanScore > computerScore) result.textContent = "You won this round!";
    else if (humanScore < computerScore)
      result.textContent = "Computer won this round! Better luck next time!";
    else result.textContent = "It was tie! Play again!";
  }
}

function compareAndShowResult() {
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      result.textContent = "Computer won!";
      return;
    } else if (computerChoice === "scissors") {
      result.textContent = "You won!";
      humanScore++;
      return;
    } else {
      result.textContent = "It's a tie!";
    }
  }
  if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      result.textContent = "Computer won!";
      computerScore++;
      return;
    } else if (computerChoice === "rock") {
      result.textContent = "You won!";
      humanScore++;
      return;
    } else {
      result.textContent = "It's a tie!";
    }
  }
  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      result.textContent = "Computer won!";
      computerScore++;
      return;
    } else if (computerChoice === "paper") {
      result.textContent = "You won!";
      humanScore++;
      return;
    } else {
      result.textContent = "It's a tie!";
    }
  }
}

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

