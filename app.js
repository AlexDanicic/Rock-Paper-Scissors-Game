// user choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
      return userInput;
    } else {
      console.log('Error happened...');
    };
  };
  
  // test is the input working
  console.log(getUserChoice('Paper'));
  //this test should fail!
  console.log(getUserChoice('Fork')); 
  
  // computer choice
  const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors'
        break
    }
  };
  
  // test the computer choice
  console.log(getComputerChoice());
  
  // determine a winner
  const determineWinner = (userChoice, computerChoice) => {
    // cheat for the game with 'bomb'
    if(userChoice === 'bomb'){
      return 'Cheater...You Won :/ Please play by rules ;)';
    }
    // regular code
    if(userChoice === computerChoice) {
      return 'The Game Is A Tie!';
    }
    if(userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The Computer Won!';
      } else {
        return 'You Won!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The Computer Won!';
      } else {
        return 'You Won!';
      }
    }
    if(userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The Computer Won!'
      } else {
        return 'You Won!'
      }
    }
  };
  
  // test the winner function
  console.log(determineWinner('paper', 'scissors'));
  console.log(determineWinner('paper', 'paper'));
  console.log(determineWinner('paper', 'rock'));
  
  // game play function
  const playGame = () => {
    const userChoice = getUserChoice('rock') // rock, scissors or paper
    const computerChoice = getComputerChoice();
    // log the game result to console
    console.log(`You Threw: ${userChoice}`);
    console.log(`The Computer Threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  // call the gameplay 
  playGame();