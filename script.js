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

function playGame()
{
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        let playerSelection = prompt("Round " + (i+1) + "\n Choose Rock/Paper/Scissors");
        let roundResult = playRound(playerSelection, getComputerChoice());
        console.log(roundResult);
        
        if(roundResult.charAt(0) === "P") playerScore++;
        else if(roundResult.charAt(0) === "C") computerScore++;
    }

    console.log("Player: " + playerScore + "\nComputer: " + computerScore);
}

playGame();
