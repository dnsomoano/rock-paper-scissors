// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)

let playerOneChoice;
let playerTwoChoice;

// const rockResults = () => {
// 	if (playerOneChoice == playerOneRockSelection && playerTwoChoice == playerTwoScissorsSelection) {
// 		console.log('Player 1 has won');
// 	}
// 	if (playerOneRockSelection == playerOneRockSelection && playerTwoChoice == playerTwoPaperSelection) {
// 		console.log('Player 2 wins!');
// 	} else {
// 		console.log('tie..');
// 	}
// };

// const paperResults = () => {
// 	if (playerOneChoice == playerOnePaperSelection && playerTwoChoice == playerTwoScissorsSelection) {
// 		console.log('Player 2 has won');
// 	}
// 	if (playerOneChoice == playerOneRockSelection && playerTwoChoice == playerTwoPaperSelection) {
// 		console.log('Player 2 wins!');
// 	} else {
// 		console.log('tie..');
// 	}
// };

//
// Player 1 choice
const playerOneRockSelection = () => {
<<<<<<< HEAD
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
=======
	console.log('Rock for player 1!');
	playerOneChoice = document.querySelector('.player-one-rock-button').value;
	console.log(playerOneChoice);
	checkWinner();
};

const playerOnePaperSelection = () => {
	console.log('We have liftoff for player 1!');
	playerOneChoice = document.querySelector('.player-one-paper-button').value;
  console.log(playerOneChoice);
  checkWinner();
};

const playerOneScissorsSelection = () => {
	console.log('We have liftoff for player 1!');
	playerOneChoice = document.querySelector('.player-one-scissors-button').value;
  console.log(playerOneChoice);
  checkWinner();
>>>>>>> 22078b49165c17bf19c4a5814ede3e1a02dc0858
};

// Player 2 choice
const playerTwoRockSelection = () => {
<<<<<<< HEAD
  const playerOneRock = document.querySelector(".player-two-choice")
    .textContent;
  console.log("player two rock");
};

const playerTwoPaperSelection = () => {
  const playerOneRock = document.querySelector(".player-two-choice")
    .textContent;
  console.log("player two paper");
=======
	console.log('We have liftoff for player 2!');
	const playerTwoChoice = document.querySelector('.player-two-rock-button').value;
  console.log(playerTwoChoice);
  checkWinner();
};

const playerTwoPaperSelection = () => {
	console.log('We have liftoff for player 2!');
	const playerTwoChoice = document.querySelector('.player-two-paper-button').value;
  console.log(playerTwoChoice);
  checkWinner();
};

const playerTwoScissorsSelection = () => {
	console.log('We have liftoff for player 2!');
	const playerTwoChoice = document.querySelector('.player-two-scissors-button').value;
  console.log(playerTwoChoice);
  checkWinner();
};

// Game rules
let checkWinner = () => {
	if (!(playerOneChoice && playerTwoChoice)) {
		return;
  }
  if (playerOneChoice == playerTwoChoice) {
		console.log('tie');
	}
	if (
		(playerOneChoice == 'Rock' && playerTwoChoice == 'Scissors') ||
		(playerOneChoice == 'scissors' && playerTwoChoice == 'Paper') ||
		(playerOneChoice == 'Paper' && playerTwoChoice == 'Rock')
	) {
		Console.log('p1 wins');
	} else {
		console.log('p2 wins');
	}
>>>>>>> 22078b49165c17bf19c4a5814ede3e1a02dc0858
};

const playerTwoScissorsSelection = () => {
  const playerOneRock = document.querySelector(".player-two-choice")
    .textContent;
  console.log("player two scissors");
};
// Assign data values to each button
// Player 1
<<<<<<< HEAD
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
=======
document.querySelector('.player-one-rock-button').addEventListener('click', playerOneRockSelection);
document.querySelector('.player-one-paper-button').addEventListener('click', playerOnePaperSelection);
document.querySelector('.player-one-scissors-button').addEventListener('click', playerOneScissorsSelection);

// Player 2
document.querySelector('.player-two-rock-button').addEventListener('click', playerTwoRockSelection);
document.querySelector('.player-two-paper-button').addEventListener('click', playerTwoPaperSelection);
document.querySelector('.player-two-scissors-button').addEventListener('click', playerTwoScissorsSelection);
>>>>>>> 22078b49165c17bf19c4a5814ede3e1a02dc0858
