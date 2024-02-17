let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector(".reset");
let message=document.querySelector(".message");
let newGame=document.querySelector(".newGame");
let turnX=true;
const winPatterns=[
    [0,1,2],   
    [0,3,6],   
    [0,4,8],   
    [1,4,7],    
    [2,5,8],    
    [2,4,6],    
    [3,4,5],    
    [6,7,8],    
];

const resetGame=()=>{
    turnX=true;
    enableBoxes();
    message.classList.add("hide");
    newGame.classList.add("hide");
    reset_btn.classList.remove("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnX) {
            box.classList.remove("Yproperties");
            box.classList.add("Xproperties")
            box.innerText="X";
            turnX=false;
            
        } 
        else {
            box.classList.remove("Xproperties");
            box.classList.add("Yproperties");
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;

        checkWinner();
        checkDraw();
    })
})
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    message.innerText=`Congratulations!!\n ${ winner} is the Winner`
    message.classList.remove("hide");
    reset_btn.classList.add("hide");
    newGame.classList.remove("hide");
}
const checkWinner=()=>{
    for(let patterns of winPatterns){
        let pos1Val= boxes[patterns[0]].innerText;
        let pos2Val= boxes[patterns[1]].innerText;
        let pos3Val= boxes[patterns[2]].innerText;

        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                disableBoxes();
                showWinner(pos1Val);

            
            }
        
        }
     
    }
}
const checkDraw=()=>{
    let count=1;
    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            count=count+1;
            if(count==9){
                message.classList.remove("hide");
                message.innerText="The Game is a Draw";
            }
        })
        
    })
    
    
}

newGame.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);
