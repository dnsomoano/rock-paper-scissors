// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)

//
// Player 1 choice
const playerOneSelection = () => {
  const playerOneChoice = document.querySelector('.player-one-button').textContent;
  console.log(playerOneChoice);
}

// Player 1
document.querySelector('.player-one-button').addEventListener('click', playerOneSelection)
// document.querySelector("playerOnePaper").addEventListener('click', playerOneSelection)
// document.querySelector("playerOneScissors").addEventListener('click', playerOneSelection)

// // Player 2
// document.querySelector("playerTwoRock").addEventListener('click', playerTwoSelection)
// document.querySelector("playerTwoPaper").addEventListener('click', playerTwoSelection)
// document.querySelector("playerTwoScissors").addEventListener('click', playerTwoSelection)
