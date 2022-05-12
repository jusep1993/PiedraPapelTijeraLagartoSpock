

let options = ["Rock", "Scissors", "Paper", "Lizard", "Spock"];
let totalRounds = 5;
let computerOption;
let playerOption;
let computerScore = 0;
let playerScore = 0;

function game(){
    
    while(totalRounds != 0){
        // The computer choose his move
        computerOption = options[getRandomInt(0, 2)];
        computerOption = computerOption.toLowerCase();

        // The player choose his move
        playerOption = prompt("Tell me what your play is:")
        playerOption = playerOption.toLowerCase();

        
        roundWinner(playerOption, computerOption);
        console.log(playerScore, computerScore);
        totalRounds--;

    }
    Score(playerScore, computerScore);
}

game();



// Function that determines who wins each round
function roundWinner(player, computer){

    if(player == computer){
        console.log("It's a Tie!");
    } else if (player == "rock" && computer == "paper"){
        console.log("Computer Wins the round!");
        computerScore++;
    }else if (player == "scissors" && computer == "paper"){
        console.log("Player Wins the round!");
        playerScore++;
    }else if (player == "paper" && computer == "rock"){
        console.log("Player Wins the round!");
        playerScore++;
    }else if (player == "scissors" && computer == "rock"){
        console.log("Computer Wins the round!");
        computerScore++;
    }else if (player == "rock" && computer == "scissors"){
        console.log("Player Wins the round!");
        playerScore++;
    }else if (player == "paper" && computer == "scissors"){
        console.log("Computer Wins the round!");
        computerScore++;
    }
}

function Score(player, computer){

    if(player == computer){
        console.log("It's a Tie in this game!");
    } else if(player > computer){
        console.log("Player Wins the game!");
    } else {
        console.log("Computer Wins the game")
    }
}


// Function to make the computer choose a random move inside the array of options
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}