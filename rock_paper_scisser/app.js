let userScore = 0;
let compScore = 0;
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const genCompChoice = () =>{
const options = ["rock", "paper" , "scissors"];
const randIndex = Math.floor(Math.random()*3);
return options[randIndex];

}
const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "#F9564F";
}
const showWinner = (userWin,choiceId,compChoice) =>{
if(userWin){
    userScore++;
    user.innerText = userScore;
    msg.innerText = `You Win Your ${choiceId} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
}
else{
    compScore++;
    comp.innerText = compScore;
    msg.innerText = `You Lose ${compChoice} beats yours ${choiceId}`;
    msg.style.backgroundColor = "red";
}
}
const playGame = (choiceId) =>{
console.log("user choice =",choiceId);
const compChoice = genCompChoice();
console.log("Comp choice =",compChoice);

if(choiceId === compChoice){
    drawGame();
}
else{
    let userWin = true;
    if(choiceId==="rock"){
        userWin = compChoice === "paper" ? false : true;
    }
    else if(choiceId==="paper"){
        userWin = compChoice=== "scissors" ? false : true;
    }
    else{
        userWin = compChoice=== "rock" ? false : true;
    }
    showWinner(userWin,choiceId,compChoice);
}
}
choices.forEach((choice) => {
   
    choice.addEventListener("click" , () =>{
        const choiceId = choice.getAttribute("id");
           playGame(choiceId);
    })
})