let userScore = 0;
let computerScore = 0;
const userScore_div = document.getElementById("userScore");
const computerScore_div = document.getElementById("computerScore");
const result_div = document.getElementById("result");
const rock = document.getElementById("r")
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function convertLetter(computerChoice){
    if (computerChoice === "r") {return "Rock"};
    if (computerChoice === "s") {return "Scissors"};
    if (computerChoice === "p") {return "Paper"};
}

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {return "r"}
    else if (randomNumber === 1) {return "p"}
    else return "s"
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    if (userChoice === "r" && computerChoice === "p") {lose(userChoice, computerChoice)};
    if (userChoice === "r" && computerChoice === "s") {win(userChoice, computerChoice)};
    if (userChoice === "r" && computerChoice === "r") {draw(userChoice, computerChoice)};
    if (userChoice === "p" && computerChoice === "s") {lose(userChoice, computerChoice)};
    if (userChoice === "p" && computerChoice === "r") {win(userChoice, computerChoice)};
    if (userChoice === "p" && computerChoice === "p") {draw(userChoice, computerChoice)};
    if (userChoice === "s" && computerChoice === "r") {lose(userChoice, computerChoice)};
    if (userChoice === "s" && computerChoice === "p") {win(userChoice, computerChoice)};
    if (userChoice === "s" && computerChoice === "s") {draw(userChoice, computerChoice)};
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_div.innerHTML = userScore;
    result_div.innerHTML = "Computer chose " + convertLetter(computerChoice) + " You Win!";
    document.getElementById(userChoice).classList.add("greenGlow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("greenGlow")}, 300);
}

function lose(userChocie, computerChoice){
    computerScore++;
    computerScore_div.innerHTML = computerScore;
    result_div.innerHTML = "Computer chose " + convertLetter(computerChoice) + " You Lose!";
    document.getElementById(userChocie).classList.add("redGlow");
    setTimeout(function(){document.getElementById(userChocie).classList.remove("redGlow")}, 300);
}

function draw(userChoice, computerChoice){
    result_div.innerHTML = "Computer also chose " + convertLetter(computerChoice) + " It's a draw!";
    document.getElementById(userChoice).classList.add("greyGlow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("greyGlow")}, 300);
}

function main(userScore){
    rock.addEventListener(`click`, function(){
        game("r");
    })
    scissors.addEventListener(`click`, function(){
        game("s");
    })
    paper.addEventListener(`click`, function(){
        game("p");
    })
}

main()