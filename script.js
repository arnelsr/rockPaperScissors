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
       result = 'No one wins! ' + 'You both chose ' + computerSelection;
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
    you  = 'Computer';
    return result = getResult(combination);

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

 


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);

//print whoever wins
console.log(playRound(playerSelection, computerSelection));

