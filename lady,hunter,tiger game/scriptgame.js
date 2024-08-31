let userScore=0;
let compScore=0;
//sounds//
const backgroundMusic = document.getElementById("backgroundMusic");
const winSound = document.getElementById("winSound");
const loseSound = document.getElementById("loseSound");

//bgmusic starts playing//
const playBackgroundMusic=()=>
{
    backgroundMusic.play();
};

//bgmusic to stop//
const stopBackgroundMusic=()=>
{
    backgroundMusic.pause();
    backgroundMusic.currentTime=0;
};

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice=()=>
{
    const options=["lady","hunter","tiger"];
    const randIndx=Math.floor(Math.random()*3);
    return options[randIndx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
  };
const showWinner=(userWin, userChoice, compChoice)=> {
    if (userWin) {
        userScore++;
        //console.log("you win!!");
        userScorePara.innerText = userScore;
        
        //msg.innerText = "you win!!";
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        winSound.play();

    }

    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        //msg.innerText = "you lose!!";
        msg.style.backgroundColor = "red";
        //console.log("you lose!!");
        loseSound.play();
    }
    if(userScore==5 || compScore==5)
    {
        stopBackgroundMusic();
        setTimeout(() => {
            if (userScore === 5) {
                alert("Congratulations! You win the game!");
            } else {
                alert("Sorry! Computer wins the game!");
            }
            // Reset scores after the alert
            userScore = 0;
            compScore = 0;
            userScorePara.innerText = userScore;
            compScorePara.innerText = compScore;
            playBackgroundMusic();
        }, 100);
    }
};



const playGame=(userChoice)=>
{
    
    //generating computer choice//
    const compChoice=genCompChoice();
    
    if(userChoice===compChoice)
    {
        //console.log("game was draw");
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="lady")
        {
            //compchoice!=lady otherwise draw i.e hunter tiger//
            userWin=compChoice==="hunter"?true:false;
            
        }
        else if(userChoice==="hunter")
        {
            //comp lady tiger//
            userWin=compChoice==="tiger"?true:false;
        }
        else if(userChoice==="tiger")
        {
            //user tiger
            //comp lady hunter
            userWin=compChoice==="lady"?true:false;

        }
        showWinner(userWin,userChoice,compChoice);
    }

};
        


choices.forEach((choice) =>
{
    //console.log(choice);
    choice.addEventListener("click", () =>
    {
        const userChoice=choice.getAttribute("id");
        //console.log("choice was clicked",Userchoice);
        playGame(userChoice);
        
        /*else 
        {
            const winner=userScore>compScore?true:false;
            if(winner)
            {   alert("USER WINS!!");
            }
            else
            {
                alert("COMP WINS!!");
            }
        }*/

    });
});
playBackgroundMusic();