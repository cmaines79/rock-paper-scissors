function computerPlay(){
    let choice = Math.floor(Math.random() * 3);

    if(choice == 0){
        return("Rock");
    } else if(choice == 1){
        return("Paper");
    } else{
        return("Scissors");
    }
}

function isValidChoice(choice){
    if(choice != "Rock" && choice != "Paper" && choice != "Scissors"){
        alert("Sorry, " + choice + " is not a valid option.  Please try again...");
        // playRound();
    }
}

function playerPlay(){
    // getting input from the player
    let str1 = prompt("Please enter Rock, Paper, or Scissors...");
    let playerChoice = str1.charAt(0).toUpperCase() + str1.slice(1,str1.length);
    console.log("The Player's choice is " + playerChoice);
    
    // validating the player has entered a valid option
    isValidChoice(playerChoice);

    return(playerChoice);
}

function playRound(player, computer){
    //Logic for who wins
    if(player == computer){
        return("It's a tie, play again!");
    } 
    
    else if(player == "Rock"){
        if(computer == "Scissors"){
            return("You Win! Rock smashes Scissors");
        } else {
            return("You Lose! Paper covers Rock");
        }        
    }

    else if(player == "Paper"){
        if(computer == "Rock"){
            return("You Win! Paper covers Rock");
        } else {
            return("You Lose! Rock smashes Scissors");
        }
    }
    
    else if(player == "Scissors"){
        if(computer == "Paper"){
            return("You Win! Scissors cuts Paper");
        } else {
            return("You Lose! Paper covers Rock");
        }
        console.log("The winner is " + winner +"!");
    }
    
}

function game(){
    let i = 0;
    let computerScore = 0;
    let playerScore = 0;
    
    do {
        // game play
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        console.log("The Computer's choice is " + computerSelection);
        let game = playRound(playerSelection, computerSelection)
        console.log(game);

        // score keeping
        let winner = game.charAt(4);
        // console.log("winner is: " + winner);

        if(winner == "W"){
            playerScore += 1;
        } else {
            computerScore += 1;
        }
        i += 1;
    }
    while (i < 5);

    if(playerScore == computerScore){
        console.log("It's a Tie Game Overall")
    } else if(playerScore > computerScore){
        console.log("Player Wins Overall");
    } else {
        console.log("Computer Wins Overall");
    }
}

game();

