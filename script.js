//computer selection part
//declare computer selection var
//random computer Selection( 1 to 3: 1-rock, 2-paper, 3-scissors)

function getComputerChoice() {
    //get random integer
    //declare random int var
    let randomInt = Math.floor(Math.random()*3) + 1;
    //declare randomString variable
    let randomString = ' ';
    //assign rock paper scissors
    if (randomInt === 1) {
       randomString = 'Rock';
    }  else if (randomInt===2) {
       randomString = 'Paper';
    }  else {
        randomString = 'Scissors';
    }
    return randomString;
 
}
//single round part
//declare player selection variable, case-insensitive
//compare player and computer selections based on rock paper scissor rules
function playRound(playerSelection, computerSelection) {
    //variables
    let lowerPlayerSelection= ' ';
    let lowerComputerSelection= ' ';
    let result = ' ';
    let combination = '';
    lowerPlayerSelection=playerSelection.toLowerCase();
    lowerComputerSelection = computerSelection.toLowerCase();
    
    
    //return if tie
    if (lowerPlayerSelection === lowerComputerSelection) {
       result = "It's a tie! " + 'You both chose ' + computerSelection;
       return result;
    }
    //combine strings
    combination= (lowerPlayerSelection+lowerComputerSelection);
    
    
   
    
    let resultCombination = getResult(combination);
    
    let you  = 'You ';
    //call getresult function
    result = getResult(combination);
    //return if theres result already
    if (result !== ' '){
        result= you+result;
        return result;
    }
    //retry if theres no result from previous call
    combination=lowerComputerSelection+lowerPlayerSelection;
    resultCombination = getResult(combination);
    you  = 'Computer ';
    return result = you+getResult(combination);

}
//get result function determines who won based on combi
function getResult(combination) {
    let resultCombination= ' ';
    switch (combination) {
        
        case 'rockpaper':
            resultCombination = 'Lost! Paper beats Rock.';
            break;
        case 'rockscissors':
            resultCombination = 'Won! Rock beats Scissors.';
            break;
        case 'paperscissors':
            resultCombination = 'Lost! Scissors beats Paper.';
        default:
            break;

    }
    return resultCombination;
}

 


//const playerSelection = "ROCK";
//const computerSelection = getComputerChoice();
//console.log(computerSelection);

//print whoever wins
//console.log(playRound(playerSelection, computerSelection));


//game
function game() {
    //variables
    let playerSelection2 = '';
    let computerSelection2 = '';
    let result2 ='';
    let youScore = 0;
    let computerScore=0;
    for (let i=0;i<5;i++){
        //prompt for user input
       playerSelection2 = prompt ('Rock, Paper or Scissors?');
       computerSelection2 = getComputerChoice();
       //call round
       result2 = playRound(playerSelection2, computerSelection2);
       //display
       console.log(result2);
       //count scores
       switch (true) {
        case (result2.includes('You') && result2.includes('Won')):
            youScore++;
            break;
        case (result2.includes('Computer') && result2.includes('Lost')):
            youScore++;
            break;
        case (result2.includes('You') && result2.includes('Lost')):
            computerScore++;
            break;
        case (result2.includes('Computer') && result2.includes('Won')):
            computerScore++;
            break;
       }
    }
       //compare scores
    //console.log(youScore);
    //console.log(computerScore);
    if (youScore == computerScore) {
        console.log(`It's a tie! Both scored ${youScore} out of 5!`)
        return;
    }
    if (youScore>computerScore) {
      console.log(`You won 5 rounds scoring ${youScore} out of 5!`);
    } else {
      console.log(`Computer won 5 rounds scoring ${computerScore} out of 5!`);
    }
}
game();