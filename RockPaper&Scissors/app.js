const computerDisplay = document.getElementById('computerChoice');
const userDisplay = document.getElementById('yourChoice');
const resultDisplay = document.getElementById('resultDisplay');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(choices=> choices.addEventListener('click',(e)=> {
   userChoice =  e.target.id;
   userDisplay.innerHTML = userChoice

   generateComputerChoice();
   displayResult();
}))

function generateComputerChoice(){
    computerChoice = Math.floor(Math.random()*3)+1;
    if(computerChoice === 1){
        computerChoice = 'Rock';
    }
    if(computerChoice === 2){
        computerChoice = 'Paper';
    }
    if(computerChoice === 3){
        computerChoice = 'Scissors';
    }

    computerDisplay.innerHTML = computerChoice

}

function displayResult(){
    if(userChoice === computerChoice){
        result = "It's a Draw!!"
    }
    if(userChoice === "Rock" && computerChoice === "Paper"){
        result = "You loose!!"
    }
    if(userChoice === "Rock" && computerChoice === "Scissors"){
        result = "You Winn!!"
    }
    if(userChoice === "Paper" && computerChoice === "Rock"){
        result = "You Winn!!"
    }
    if(userChoice === "Paper" && computerChoice === "Scissors"){
        result = "You Lose!!"
    }if(userChoice === "Scissors" && computerChoice === "Rock"){
        result = "You Lose!!"
    }
    if(userChoice === "Scissors" && computerChoice === "Paper"){
        result = "You Winn!!"
    }
    
    resultDisplay.innerHTML = result

}

