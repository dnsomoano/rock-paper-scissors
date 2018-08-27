// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)

//
// Player 1 choice
const playerOneRockSelection = () => {
  const playerOneRock = document.querySelector(".player-one-choice")
    .textContent;
  console.log("player one rock");
};

const playerOnePaperSelection = () => {
  const playerOneRock = document.querySelector(".player-one-choice")
    .textContent;
  console.log("player one paper");
};

const playerOneScissorsSelection = () => {
  const playerOneRock = document.querySelector(".player-one-choice")
    .textContent;
  console.log("player one scissors");
};

// Player 2 choice
const playerTwoRockSelection = () => {
  const playerOneRock = document.querySelector(".player-two-choice")
    .textContent;
  console.log("player two rock");
};

const playerTwoPaperSelection = () => {
  const playerOneRock = document.querySelector(".player-two-choice")
    .textContent;
  console.log("player two paper");
};

const playerTwoScissorsSelection = () => {
  const playerOneRock = document.querySelector(".player-two-choice")
    .textContent;
  console.log("player two scissors");
};
// Assign data values to each button
// Player 1
const playerOneRock = document.querySelector(".player-one-rock-button")
  .textContent;
const playerOnePaper = document.querySelector(".player-one-paper-button")
  .textContent;
const playerOneScissors = document.querySelector(".player-one-scissors-button")
  .textContent;

// // Player 2
const playerTwoRock = document.querySelector(".player-two-rock-button")
  .textContent;
const playerTwoPaper = document.querySelector(".player-two-paper-button")
  .textContent;
const playerTwoScissors = document.querySelector(".player-two-scissors-button")
  .textContent;

const playerOneSelection = () => {
  // Conditions for Rock, Paper, Scissors
  if (
    (playerOneChoice == playerOneRock && playerTwoChoice == playerTwoPaper) ||
    (playerOneChoice == playerOnePaper &&
      playerTwoChoice == playerTwoScissors) ||
    (playerOneChoice == playerOneScissors && playerTwoChoice == playerTwoRock)
  ) {
    console.log("Player 2 wins!");
    if (
      (playerOneChoice == playerOneRock &&
        playerTwoChoice == playerTwoScissors) ||
      (playerOnePaper && playerTwoChoice == playerTwoRock) ||
      (playerOneChoice == playerOneScissors &&
        (playerTwoChoice == playerOneChoice) == player)
    ) {
      console.log("Player 1 wins!");
    } else console.log("Draw!");
  }
};

// Player 1 events
document
  .querySelector(".player-one-rock-button")
  .addEventListener("click", playerOneRockSelection);
document
  .querySelector(".player-one-paper-button")
  .addEventListener("click", playerOnePaperSelection);
document
  .querySelector(".player-one-scissors-button")
  .addEventListener("click", playerOneScissorsSelection);

// // Player 2
document
  .querySelector(".player-two-rock-button")
  .addEventListener("click", playerTwoRockSelection);
document
  .querySelector(".player-two-paper-button")
  .addEventListener("click", playerTwoPaperSelection);
document
  .querySelector(".player-two-scissors-button")
  .addEventListener("click", playerTwoScissorsSelection);
