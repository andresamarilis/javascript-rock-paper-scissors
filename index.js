
//Function called getUserChoice with parameter called userInput
const getUserChoice = (userInput) => {

    //makes all input into lowercase
    userInput = userInput.toLowerCase();

    // checks to see if user input is rock, paper, or scissors. If not, then display error. 
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    else {
        console.log('Error!');
    }

}


//New function with a variable called getComputerChoice that has no parameters. Computer will select a random number value (0 - 2). Each number value has been assigned with either rock,paper, or scissors. 
const getComputerChoice = () => {
    //1)Math.random() function gives a random number in float form e.g. 0.90607088140251
    //2) Random number is multiplied by 3. e.g. 1.0129007077496839
    //3) The Math.floor() function rounds the random float number that has been multiplied by 3 to the nearest whole number.
    const randomNumber = Math.floor(Math.random() * 3);

    //The randomised whole number value = either rock, paper, or scissors, depending on its number value. 
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }


}

const determineWinner = (userChoice, computerChoice) => {

    if (userChoice === computerChoice) {

        return "This game is a tie!";
    }




    if (userChoice === "rock") {

        if (computerChoice === "paper") {
            return "Computer has won!";
        } else {
            return "You have won!";
        }

    }




    if (userChoice === "paper") {

        if (computerChoice === "scissors") {
            return "Computer has won!";
        } else {
            return "You have won!";
        }

    }





    if (userChoice === "scissors") {

        if (computerChoice === "rock") {
            return "Computer has won!";
        } else {
            return "You have won!";
        }

    }


}


const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log("You threw " + userChoice);
    console.log("The computer threw " + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));

}

playGame()






