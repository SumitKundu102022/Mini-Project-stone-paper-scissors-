let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  //rock,paper,scissors
  const options = ["Rock", "Paper", "Scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
    // console.log("Game was draw");
    msgPara.innerText = "Game Was Draw. Play Again";
    msgPara.style.background = "orange";
    msgPara.style.color = "yellow";
}

const showWinner = (userWin,userChoiceId,compChoice) => {
    if (userWin) {
        // console.log(`You Win!`);
        userScore++;
        userScorePara.innerText = userScore;
        msgPara.innerText = `You Win! Your ${userChoiceId} Beats ${compChoice}`;
        msgPara.style.background = "green";
        msgPara.style.color = "yellow";
    }

    else {
        // console.log("You lose!");
        compScore++;
        compScorePara.innerText = compScore;
        msgPara.innerText = `You Lose! ${compChoice} Beats Your ${userChoiceId}`;
        msgPara.style.background = "red";
        msgPara.style.color = "yellow";
    }
}

const playGame = (userChoiceId) => {
//   console.log("user choice", userChoiceId);
  //Generate Computer choice
  const compChoice = genCompChoice();
    // console.log("comp choice", compChoice);
    
    if (userChoiceId === compChoice) {
        //Draw Game
        drawGame();
    }

    else {
        let userWin = true;
        if (userChoiceId === "Rock") {
            //scissors,paper
            userWin = compChoice === "Paper" ? false : true;
        }

        else if (userChoiceId === "Paper") {
            //rock,scissors
            userWin = compChoice === "Scissors" ? false : true;
        }

        else {
            //rock,paper
            userWin = compChoice === "Rock" ? false : true;
        }

        showWinner(userWin,userChoiceId,compChoice);
    }
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoiceId = choice.getAttribute("id");
    // console.log("choice was clicked", userChoiceId);
    playGame(userChoiceId);
  });
});
