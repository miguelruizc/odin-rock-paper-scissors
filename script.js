function getComputerChoice()
{
    let random = Math.floor(Math.random() * 3) + 1;

    if (random === 1)
    {
        return "rock";
    }
    else if (random === 2)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection)
{
    // Convert strings to Capitalized
    let player = playerSelection.toLowerCase();
    player = player.charAt(0).toUpperCase() + player.slice(1);
    let computer = computerSelection.toLowerCase();
    computer = computer.charAt(0).toUpperCase() + computer.slice(1);

    // Check if player wins
    if 
    (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    )
    {
        let str = "Player wins! " + player + " beats " + computer;
        return str;
    }
    // Check if computer wins
    else if 
    (
        (computer === "Rock" && player === "Scissors") ||
        (computer === "Scissors" && player === "Paper") ||
        (computer === "Paper" && player === "Rock")
    )
    {
        let str = "Computer wins! " + computer + " beats " + player;
        return str;
    }
    // Check tie
    else if 
    (
        (computer === "Rock" && player === "Rock") ||
        (computer === "Scissors" && player === "Scissors") ||
        (computer === "Paper" && player === "Paper")
    )
    {
        let str = "Tie!";
        return str;
    }
    // Check invalid input
    else 
    {
        return "Invalid input";
    }
}

// Add event listeners to rock/paper/scissors buttons
let buttons = new Array(3);
buttons[0] = document.querySelector(".buttonRock");
buttons[1] = document.querySelector(".buttonPaper");
buttons[2] = document.querySelector(".buttonScissors");

// Set elements and variables to show score and round results
let scoreDiv = document.querySelector(".scoreDiv");
let resultsDiv = document.querySelector(".resultsDiv");
let playerScore = 0;
let computerScore = 0;
let playerScoreSpan = document.querySelector(".playerScore");
let computerScoreSpan = document.querySelector(".computerScore");
let gameComplete = false;

//Click events for the 3 buttons
buttons[0].addEventListener("click", function(){
    // Play round & show result
    let roundResult = document.createElement("p");
    roundResult.textContent = playRound("rock", getComputerChoice());
    resultsDiv.appendChild(roundResult);  
    // Update score ("P" player won // "C" computer won)
    if(roundResult.textContent.charAt(0) === "P"){
        playerScore++;
        playerScoreSpan.textContent = playerScore;
    }
    else if(roundResult.textContent.charAt(0) === "C"){
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }
    
    checkWinner();
});
buttons[1].addEventListener("click", function(){
    // Play round & show result
    let roundResult = document.createElement("p");
    roundResult.textContent = playRound("paper", getComputerChoice());
    resultsDiv.appendChild(roundResult); 
    // Update score ("P" player won // "C" computer won)
    if(roundResult.textContent.charAt(0) === "P"){
        playerScore++;
        playerScoreSpan.textContent = playerScore;
    }
    else if(roundResult.textContent.charAt(0) === "C"){
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }

    checkWinner();
});
buttons[2].addEventListener("click", function(){
    // Play round & show result
    let roundResult = document.createElement("p");
    roundResult.textContent = playRound("scissors", getComputerChoice());
    resultsDiv.appendChild(roundResult); 
    // Update score ("P" player won // "C" computer won)
    if(roundResult.textContent.charAt(0) === "P"){
        playerScore++;
        playerScoreSpan.textContent = playerScore;
    }
    else if(roundResult.textContent.charAt(0) === "C"){
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }

    checkWinner();
});

function checkWinner()
{
    if(!gameComplete)
    {
        if(playerScore === 5){
            scoreDiv.textContent = "Player wins!";
            gameComplete = true;
        }   
        else if(computerScore === 5){
            scoreDiv.textContent = "Computer wins!";
            gameComplete = true;
        }
    }     
}
