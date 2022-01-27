const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error: Wrong user input.');
  }
};

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return 'rock';
  } else if (randomNum === 1) {
    return 'paper';
  } else if (randomNum === 2) {
    return 'scissors';
  } else {
    console.log('Error: There was an error picking computers choice.');
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game was a tie!';
  } else if ((userChoice === 'rock' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'rock')) {
    return 'The computer has won!';
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) {
    return 'You have won!';
  } else if (userChoice == 'bomb') {
    return 'You have won!';
  } else {
    console.log('Error!')
  }
}

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`User Choice: ${userChoice}\nComputer Choice: ${computerChoice}`);
  console.log(`The results are: ${determineWinner(userChoice, computerChoice)}`)
}



playGame();
