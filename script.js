// Rock Paper Scissors Game
// This project is a project directed by The Odin Project - Fundimentals
// Created by Cordell Maines - MainesIndustries@gmail.com 
// Created 7/24/2021

// Global DOM Variables
const picked = document.querySelector('.playerChoice');
const compChoice = document.querySelector(".computerChoice");
const win = document.querySelector('.roundWinner');
const cScore = document.querySelector('.computerScore');
const pScore = document.querySelector('.playerScore');
const ultimateWinner = document.querySelector('.ultimateWinner');
const playAgain = document.querySelector('.playAgain');
const score = document.querySelector('.score');
const choiceSection = document.querySelector('.choices');
const winnerSection = document.querySelector('.winner');

// Global variables
let games = 5;
let roundCount = 0;
let computerScore = 0;
let playerScore = 0;

// Computer is picking either Rock, Paper or Scissors
function computerPlay(){
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
    // setting to visible for gameplay
    win.style.visibility = 'visible';

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

function keepScore(decision){

    //score keeping
    let winner = decision.charAt(4);

    if (roundCount < 5);
        if(winner == "W"){
            playerScore += 1;
            pScore.innerText = playerScore;
            roundCount += 1;
        } else {
            computerScore += 1;
            cScore.innerText = computerScore;
            roundCount += 1;
        }

        // making the score box visible
        score.style.visibility = 'visible';
}

// ----- MAIN GAME PLAY STARTS HERE -----
// starting playRound based upon event listeners for all buttons within the .rps div (click on rock, paper, or scissors)
const buttonListener = document.querySelector('.rps').addEventListener('click', function(e){
    
    // checking to see if click was on a button or not
    const isButton = e.target.nodeName === 'BUTTON';
    if (isButton) {
        
        // if logic to play each round
        if (roundCount < games){

            // clean up game board
            resetRound();

            // assign validated string value to player's choice
            const playerChoice = validatePlayerChoice(e.target.id);

            // show player pick on game board
            picked.innerText = playerChoice;

            // get computer's Play and show on game board
            const computerChoice = computerPlay();

            // call playRound() to see who the winner is.
            const decision = playRound(playerChoice, computerChoice);
            console.log(decision);

            // Score Keeping
            keepScore(decision);
        } 
        
        // is the game over and do we need to display the ultimate winner?
        if (roundCount == games){
            // make ultimateWinner visible
            ultimateWinner.style.visibility = 'visible';

            // remove .choice and .winner sections when the game play is complete
            choiceSection.remove();
            winnerSection.remove();


            // who won overall
            if(playerScore == computerScore){
                ultimateWinner.innerText = "It's a Tie Game Overall";
            } else if(playerScore > computerScore){
                ultimateWinner.innerText = "Player Wins Overall";
            } else {
                ultimateWinner.innerText = "Computer Wins Overall";
            }

            // game over, would you like to play again?
            playAgain.style.visibility = 'visible';
            playAgain.addEventListener('click', (e) => {
                location.reload();
            });
        }

    } else {
        return;
    }
});