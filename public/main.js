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
};

// Player 2 choice
const playerTwoRockSelection = () => {
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
};

// Player 1
document.querySelector('.player-one-rock-button').addEventListener('click', playerOneRockSelection);
document.querySelector('.player-one-paper-button').addEventListener('click', playerOnePaperSelection);
document.querySelector('.player-one-scissors-button').addEventListener('click', playerOneScissorsSelection);

// Player 2
document.querySelector('.player-two-rock-button').addEventListener('click', playerTwoRockSelection);
document.querySelector('.player-two-paper-button').addEventListener('click', playerTwoPaperSelection);
document.querySelector('.player-two-scissors-button').addEventListener('click', playerTwoScissorsSelection);
