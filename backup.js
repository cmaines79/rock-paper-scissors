// Rock Paper Scissors Game
// This project is a project directed by The Odin Project - Fundimentals
// Created by Cordell Maines - MainesIndustries@gmail.com 
// Created 7/24/2021

// Computer is picking either Rock, Paper or Scissors
function computerPlay(){
    // DOM variables
    const compChoice = document.querySelector(".computerChoice");

    // use math to pick a random number from 1-3 to determine if the computer picks Rock, Paper, or Scissors
    let choice = Math.floor(Math.random() * 3);


    // assigning R, P, or S based upon the random number generated and editing the innerText of the appropriate Element
    if(choice == 0){
        compChoice.innerText = "Rock";
        return("Rock");
    } else if(choice == 1){
        compChoice.innerText = "Paper";
        return("Paper");
    } else{
        compChoice.innerText = "Scissors";
        return("Scissors");
    }
}

// playng each round
function playRound(player, computer){
    // DOM variables
    const win = document.querySelector('.roundWinner');
    const playAgain = document.querySelector('.playAgain');
    const score = document.querySelector('.score');
    
    
    // setting initial states of elements
    playAgain.style.visibility = 'visible';
    win.style.visibility = "visible";
    score.style.visibility = 'visible';

    //Logic for who wins & assign the value to the 'winner section'
    if(player == computer){
        win.innerText = "It's a Tie, Play Again";
        win.style.borderBottom = "5px solid white";
        return("It's a tie, play again!");
    } 
    
    else if(player == "Rock"){
        if(computer == "Scissors"){
            win.innerText = "You Win! Rock smashes Scissors";
            win.style.borderBottom = "5px solid #ffb5f3";
            return("You Win! Rock smashes Scissors");
        } else {
            win.innerText = "You Lose! Paper covers Rock";
            win.style.borderBottom = "5px solid red";
            return("You Lose! Paper covers Rock");
        }        
    }

    else if(player == "Paper"){
        if(computer == "Rock"){
            win.innerText = "You Win! Paper covers Rock";
            win.style.borderBottom = "5px solid #45b3ff";
            return("You Win! Paper covers Rock");
        } else {
            win.innerText = "You Lose! Rock smashes Scissors";
            win.style.borderBottom = "5px solid red";
            return("You Lose! Rock smashes Scissors");
        }
    }
    
    else if(player == "Scissors"){
        if(computer == "Paper"){
            win.innerText = "You Win! Scissors cuts Paper";
            win.style.borderBottom = "5px solid #fff75d";
            return("You Win! Scissors cuts Paper");
        } else {
            win.innerText = "You Lose! Paper covers Rock";
            win.style.borderBottom = "5px solid red";
            return("You Lose! Paper covers Rock");
        }
        console.log("The winner is " + winner +"!");
    }
    
}

// // game play in totality
// function game(playerSelection){
//     // DOM Variables
//     pScore = document.querySelector('.playerScore');
//     cScore = document.querySelector('.computerScore');
    
//     // assigning initial variable values
//     let i = 0;
//     let computerScore = 0;
//     let playerScore = 0;
//     let roundCount = 5;
//     let game = "";
    
//     // do while loop for multi-round games.  The number of games is controlled by the roundCount variable
//     // This function is kicked off by button event listeners when the play picks their play
//     do {
//         // DOM Variables
//         const computerSelection = computerPlay();

//         // calling playRound() with a small delay to enhance the game experience
//         setTimeout(function(){
//             game = playRound(playerSelection, computerSelection);
//         }, 250);

//         // score keeping
//         let winner = game.charAt(4);

//         if(winner == "W"){
//             playerScore += 1;
//             pScore.innerText = playerScore;
//         } else {
//             computerScore += 1;
//             cScore.innerText = computerScore;
//         }
//         i += 1;
//     }
//     while (i < roundCount);

//     if(playerScore == computerScore){
//         console.log("It's a Tie Game Overall")
//     } else if(playerScore > computerScore){
//         console.log("Player Wins Overall");
//     } else {
//         console.log("Computer Wins Overall");
//     }
// }

// // ----- MAIN GAME PLAY STARTS HERE -----
// // DOM Variables 
// const picked = document.querySelector('.playerChoice');
// const compChoice = document.querySelector(".computerChoice");
// const win = document.querySelector('.roundWinner');
// const playAgain = document.querySelector('.playAgain');
// const score = document.querySelector('.score');

// // small function resetting gameplay between rounds
// function resetRound() {
//     picked.innerText = "?";
//     compChoice.innerText = "?";
//     win.style.visibility = 'hidden';
// }

// //eventListeners waiting for the player to pick his play
// const pickRock = document.getElementById('rock').addEventListener('click', function() {
//     resetRound();
//     picked.innerText = "Rock";
//     // calling game() with a delay of 1/2 second
//     setTimeout(function(){game("Rock");}, 500);
// });

// const pickPaper = document.getElementById('paper').addEventListener('click', function() {
//     resetRound();
//     picked.innerText = "Paper";
//     // calling game() with a delay of 1/2 second
//     setTimeout(function(){game("Paper");}, 500);
// });

// const pickScissors = document.getElementById('scissors').addEventListener('click', function() {
//     resetRound();
//     picked.innerText = "Scissors";
//     // calling game() with a delay of 1/2 second
//     setTimeout(function(){game("Scissors");}, 500);
// });

// // simple browser reload.  May need to change this if we go to a full 5 round game.
// const playAnother = document.getElementById('playAnother').addEventListener('click', function() {
//     location.reload();
// });
