function capitalize(s){
    let first = s.substring(0, 1);
    first = first.toUpperCase();
    let second = s.substring(1, s.length);
    second = second.toLowerCase();
    return (first + second);
}

function getComputerChoice(){
    let rando = Math.floor(Math.random() * 3);
    if (rando == 0){
        return 'Rock';
    }
    else if (rando == 1){
        return 'Paper';
    }
    else{
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection){
    let player = capitalize(playerSelection);
    if (player == "Scissors" && computerSelection == "Paper"){
        return 1;
    }
    else if (player == "Paper" && computerSelection == "Rock"){
        return 1;
    }
    else if (player == "Rock" && computerSelection == "Scissors"){
        return 1;
    }
    else if (player == "Scissors" && computerSelection == "Rock"){
        return 0;
    }
    else if (player == "Paper" && computerSelection == "Scissors"){
        return 0;
    }
    else if (player == "Rock" && computerSelection == "Paper"){
        return 0;
    }
    else{
        return -1;
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let playerChoice = prompt("Please enter rock, paper, or scissors:");
        playerChoice = capitalize(playerChoice);
        let computerSelection = getComputerChoice();
        if (playRound(playerChoice, computerSelection) == 1){
            playerScore++;
            console.log("You win! "+playerChoice+" beats "+computerSelection+". Current Score is "+playerScore+"-"+computerScore+"");
        }
        else if (playRound(playerChoice, computerSelection) == 0){
            computerScore++;
            console.log("You lose! "+computerSelection+" beats "+playerChoice+". Current Score is "+playerScore+"-"+computerScore+"");
        }
        else{
            console.log("Draw! You both picked "+playerChoice+". Current Score is "+playerScore+"-"+computerScore+"")
        }
    }
    if (playerScore > computerScore){
        console.log("You've won! Final Score is "+playerScore+"-"+computerScore+"")
    }
    else if (playerScore < computerScore){
        console.log("You've lost! Final Score is "+playerScore+"-"+computerScore+"")
    }
    else{
        console.log("It's a tie! Final Score is "+playerScore+"-"+computerScore+"")
    }
}

game();