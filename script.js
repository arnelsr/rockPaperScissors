//declare computer selection var
//random computer Selection( 1 to 3: 1-rock, 2-paper, 3-scissors)
let computerSelection=getComputerChoice();
console.log(computerSelection);
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


