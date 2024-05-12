const userInput = 'bomb';

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock') { 
      return 'rock';
  } else if (userInput === 'paper') {
      return 'paper';
  } else if (userInput === 'scissors') {
    return 'scissors';
  } else if (userInput === 'bomb') {
      return 'bomb';
  } else {
    return 'Invalid choice, please choose again.';
  }
};

const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const userChoice = getUserChoice(userInput); 
const computerChoice = getComputerChoice();

console.log(`player chose: ${userChoice}\ncomp chose: ${computerChoice}`);

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie";
  } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') || 
      (userChoice === 'paper' && computerChoice === 'rock') ||      
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'bomb')
  ) {
    return 'Player wins!';
  } else if (
      (userChoice === 'rock' && computerChoice === 'paper') || 
      (userChoice === 'paper' && computerChoice === 'scissors') ||      
      (userChoice === 'scissors' && computerChoice === 'rock')
  ) { 
    return 'Computer wins!';
  }
}

const playGame = () => {console.log(determineWinner(userChoice, computerChoice))};
playGame();
