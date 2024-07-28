let gameSeq=[];
let userSeq=[];


let btns=["yellow","red","purple","green"];


let started=false;
let level=0;

let h2=document.querySelector("h2");



document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;


        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}


function userFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //random btn choose
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);


    
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}


function checkAns(){
    //console.log("Current Level: ",level);
    let idx=level-1;
    if(userSeq[idx] === gameSeq[idx]){
        console.log("Same Value");
        }
     
    else{
        h2.innerText= `Game Over!`;
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");

    //console.log(userColor);
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
}


let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

// function reset(){
//     started=false;
//     gameSeq=[];
//     userSeq=[];
//     level=0;

// }