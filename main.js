console.log();

const getComputerChoice = () => {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const getHumanChoice = () => {
  let choice;

  do {
    choice = prompt("Rock, paper, scissors:  ");
    if (
      choice.toLowerCase() !== "rock" &&
      choice.toLowerCase() !== "paper" &&
      choice.toLowerCase() !== "scissors"
    ) {
      alert("Invalid choice, please re-enter.");
    }
  } while (
    choice.toLowerCase() !== "rock" &&
    choice.toLowerCase() !== "paper" &&
    choice.toLowerCase() !== "scissors"
  );

  return choice.toLowerCase();
};

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  console.log(`I picked ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("Tie");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win, ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`I win, ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
};

for (let i = 0; i < 5; i++) {
  console.log(`Game ${i+1}`);
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  playRound(humanChoice, computerChoice);
  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
}
