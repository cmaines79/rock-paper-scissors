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

// Playing each Round and the game
function playRound(player, computer){
    // DOM variables
    const win = document.querySelector('.roundWinner');
    const playAgain = document.querySelector('.playAgain');
    const score = document.querySelector('.score');
    pScore = document.querySelector('.playerScore');
    cScore = document.querySelector('.computerScore')
    
    // setting initial states of elements
    playAgain.style.visibility = 'visible';
    win.style.visibility = "visible";
    score.style.visibility = 'visible';

    // assigning initial variable values for play and score keeping loop
    let i = 0;
    let computerScore = 0;
    let playerScore = 0;
    let roundCount = 5;
    let game = "";

}

// ----- MAIN GAME PLAY STARTS HERE -----
// DOM Variables 
const picked = document.querySelector('.playerChoice');
const compChoice = document.querySelector(".computerChoice");
const win = document.querySelector('.roundWinner');
const playAgain = document.querySelector('.playAgain');
const score = document.querySelector('.score');

// small function resetting gameplay between rounds
function resetRound() {
    picked.innerText = "?";
    compChoice.innerText = "?";
    win.style.visibility = 'hidden';
}

//eventListeners waiting for the player to pick his play
const pickRock = document.getElementById('rock').addEventListener('click', function() {
    resetRound();
    picked.innerText = "Rock";
    // calling game() with a delay of 1/2 second
    let compPick = computerPlay();
    playRound("Rock", compPick);
});