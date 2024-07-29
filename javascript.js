let userScore = 0;
let compScore = 0;

const choice1 = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const winSound = new Audio('sound/win sound.wav');
const loseSound = new Audio('sound/lose sound.wav');
const drawSound = new Audio('sound/beep-6-96243.mp3');


const genCompChoice = () => {
    const choose = ["rock", "paper", "sessior"];
    const index = Math.floor(Math.random() * 3);
    return choose[index];
}; 

const draw =() =>{
    console.log("match is draw");
    msg.innerText = "match is draw, Play again";
    msg.style.backgroundColor = "purple";
    drawSound.play();
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = "you win";
        msg.style.backgroundColor = "green";
        winSound.play();
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = "you lose";
        msg.style.backgroundColor = "red";
        loseSound.play();
        }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper"){
        userWin = compChoice === "sessior" ? false : true;
    } else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
}
};

choice1.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
 });
});