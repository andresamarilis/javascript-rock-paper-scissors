
//Function called getUserChoice with parameter called userInput
const getUserChoice = (userInput) => {

    //makes all input into lowercase
    userInput = userInput.toLowerCase();

    // checks to see if user input is rock, paper, or scissors. It not, then display error. 
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    else {
        console.log('Error!');
    }

}

// Calls the function. Has 'paper' as its value. 
console.log(getUserChoice('Paper'));





//New function with a variable called getComputerChoice that has no parameters. Computer will select a random value (0 - 2). Each value has been assigned with either rock,paper, or scissors. 
const getComputerChoice = () => {
    //1)Math.random() function gives a random number in float form e.g. 0.90607088140251
    //2) Random number is multiplied by 3. e.g. 1.0129007077496839
    //3) The Math.floor() function rounds the random float number that has been multiplied by 3 to the nearest whole number.
    const randomNumber = Math.floor(Math.random() * 3);


    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }


}