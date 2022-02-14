

// Defining our variables related to our game and using the math random with the length property//
const choices = ["rock", "paper", "scissors"]
const compChoice = choices[Math.floor(Math.random()*choices.length)];
let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();



// This function defines the win/loss/tie scenarios//

function playRound(playerChoice, compChoice){
        if (playerChoice == "rock" && compChoice == "paper") {
            return "You Lose!";
        } else if (playerChoice == "paper" && compChoice == "scissors"){
            return "You Lose!!";
        } else if (playerChoice == "scissors" && compChoice == "rock") {
            return "You Lose!!!";
        } else if (playerChoice == "rock" && compChoice == "scissors") {
            return "You Win!";
        } else if (playerChoice == "paper" && compChoice == "rock"){
            return "You Win!";
        } else if (playerChoice == "scissors" && compChoice == "paper"){
            return "You Win!";
        } else if (playerChoice == compChoice){
            return "Tie!";
        } 
}
// This function does all of our console logging //

function results(){
    console.log (playRound(playerChoice, compChoice) + " " + "...Why? I'll tell you why!" + " " 
    + "Because the PC chose" + " " + compChoice + " " + "and you chose" + " " 
    + playerChoice + " " + "nice job...")
}

//Invoking the "results" function//

results()





