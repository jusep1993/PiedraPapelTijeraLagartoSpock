

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

//game();



// Function that determines who wins each round
function roundWinner(player, computer){

    if(player == computer){
        console.log("It's a Tie!");
    } else if (player == "rock" && computer == "paper"){
        console.log("Paper covers Rock. Computer Wins the round!");
        computerScore++;
    }else if (player == "scissors" && computer == "paper"){
        console.log("Scissors cuts Paper. Player Wins the round!");
        playerScore++;
    }else if (player == "lizard" && computer == "paper"){
        console.log("Lizard eats Paper. Player Wins the round!");
        computerScore++;
    }else if (player == "spock" && computer == "paper"){
        console.log("Paper disproves Spock. Computer Wins the round!");
        computerScore++;
    }else if (player == "paper" && computer == "rock"){
        console.log("Paper covers Rock. Player Wins the round!");
        playerScore++;
    }else if (player == "scissors" && computer == "rock"){
        console.log("Rock crushes Scissors. Computer Wins the round!");
        computerScore++;
    }else if (player == "lizard" && computer == "rock"){
        console.log("Rock crushes Lizard. Computer Wins the round!");
        computerScore++;
    }else if (player == "spock" && computer == "rock"){
        console.log("Spock vaporizes Rock. Player Wins the round!");
        computerScore++;
    }else if (player == "rock" && computer == "scissors"){
        console.log("Rock crushes Scissors. Player Wins the round!");
        playerScore++;
    }else if (player == "paper" && computer == "scissors"){
        console.log("Scissors cuts Paper. Computer Wins the round!");
        computerScore++;
    }else if (player == "lizard" && computer == "scissors"){
        console.log("Scissors decapitates Lizard. Computer Wins the round!");
        computerScore++;
    }else if (player == "spock" && computer == "scissors"){
        console.log("Spock smashes Scissors. Player Wins the round!");
        computerScore++;
    }else if (player == "rock" && computer == "lizard"){
        console.log("Rock crushes Lizard. Player Wins the round!");
        playerScore++;
    }else if (player == "paper" && computer == "lizard"){
        console.log("Lizard eats Paper. Computer Wins the round!");
        computerScore++;
    }else if (player == "spock" && computer == "lizard"){
        console.log("Lizard poisons Spock. Computer Wins the round!");
        computerScore++;
    }else if (player == "scissors" && computer == "lizard"){
        console.log("Scissors decapitates Lizard. Player Wins the round!");
        playerScore++;
    }else if (player == "lizard" && computer == "spock"){
        console.log("Lizard poisons Spock. Player Wins the round!");
        playerScore++;
    }else if (player == "paper" && computer == "spock"){
        console.log("Paper disproves Spock. Player Wins the round!");
        playerScore++;
    }else if (player == "rock" && computer == "spock"){
        console.log("Spock vaporizes Rock. Computer Wins the round!");
        computerScore++;
    }else if (player == "scissors" && computer == "spock"){
        console.log("Spock smashes Scissors. Computer Wins the round!");
        computerScore++;
    }
}

// Function to determine who wins the game

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