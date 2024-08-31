let boxes=document.querySelectorAll(".box");//invidual blocks/button of tictactoe
let resetBtn=document.querySelector("#reset");//reset button
let msgContainer=document.querySelector(".msg-container");//winner and newgame
let msg=document.querySelector("#msg");//winner

let turn0=true;//player x,player 0

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
    console.log("box was clicked");
    if(turn0==true)
    {   box.innerText="O";
        turn0=false;
    }
    else{
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;
    checkWinner();

    });
});
const resetGame=()=>
{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const enableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
    }
    box.innerText="";

};
const disableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }

};

const showWinner=(winner)=>
{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};
const checkWinner=()=>
{
    for(let pattern of winPatterns)
    {
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
            );
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!="")
        {
            if(pos1Val==pos2Val&&pos2Val==pos3Val)
            {
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }

    }

};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame); 