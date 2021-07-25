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

// format the players choice into the correct text format "Rock", "Paper", or "Scissors"
function validatePlayerChoice(valid){
    let result = valid.charAt(0).toUpperCase() + valid.slice(1,valid.length);
    return(result);
}

// resetting gameplay between rounds
function resetRound() {
    picked.innerText = "?";
    compChoice.innerText = "?";
    win.style.visibility = 'hidden';
}

// playng each round
function playRound(player, computer){
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

// starting playRound based pon event listeners (click on rock, paper, or scissors)
const buttonListener = document.querySelector('.rps').addEventListener('click', function(e){
    // checking to see if click was on a button or not
    const isButton = e.target.nodeName === 'BUTTON';
    if (isButton) {
        // clean up game board
        resetRound();

        // assign validated string value to player's choice
        const playerChoice = validatePlayerChoice(e.target.id);

        // show player pick on game board
        picked.innerText = playerChoice;

        // call playround
        // keep score
        // stop at 5 rounds

    } else {
        return;
    }
});



// ----- MAIN GAME PLAY STARTS HERE -----
// DOM Variables 
const picked = document.querySelector('.playerChoice');
const compChoice = document.querySelector(".computerChoice");
const win = document.querySelector('.roundWinner');
const playAgain = document.querySelector('.playAgain');
const score = document.querySelector('.score');

// variables
let compPick = "";
let winner = "";
gameCount = 0;


//eventListeners waiting for the player to pick his play
// const pickRock = document.getElementById('rock').addEventListener('click', function() {
//     // clean up game board
//     resetRound();

//     // show player pick on game board
//     picked.innerText = "Rock";
    
//     // calling game() with a delay of 1/2 second
//     compPick = computerPlay(); // NEED TO ADD DELAY
//     roundWinner = playRound("Rock", compPick);
//     gameCount += 1;
//     scoreKeeping(roundWinner, gameCount);
// });