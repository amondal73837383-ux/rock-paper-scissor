let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
document.querySelector("#reset-btn").addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorepara.innerText = 0;
    compScorepara.innerText = 0;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
});


const drawGame=()=>{
    
    msg.innerText=`draw! both choosed `;
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        
        msg.innerText=`you win! user ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        
        msg.innerText=`computer win! computers ${compChoice} beats ${userChoice}`;
         msg.style.backgroundColor="red";
    }
};
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const playGame=(userChoice)=>{
    console.log("user choise was =",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choise",compChoice);
    if(userChoice===compChoice){
        drawGame();
        return;
    }
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if( userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
            
        }
       else {
        userWin=compChoice==="rock"?false:true;
       }
       showWinner(userWin,userChoice,compChoice);
    };


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);
    });
});