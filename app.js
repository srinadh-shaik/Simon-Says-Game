let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];
let started = false;
let level =0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});
 
function levelUp(){
    userSeq = [];
    level++;
    h3.innerHTML = `<b>level ${level}</b>`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    //console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
      btn.classList.remove("flash");  
    },300);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
      btn.classList.remove("userFlash");  
    },300);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        let body = document.querySelector("body");
        body.classList.add("danger");
        h3.innerHTML = `<b>Game over! Your score is ${level}</b> <br>To restart press any key`;
        setTimeout(function(){
            body.classList.remove("danger");
        },150);
        reset();
    }
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
let h1 = document.querySelector("h1");
let light = document.querySelector(".light");
if (light) {
    light.addEventListener("click", function () {
        let body = document.querySelector("body");
        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
            h1.classList.remove("white-font");
            light.innerHTML = "Enable Dark Mode"; // Update button text
        } else {
            body.classList.add("dark");
            h1.classList.add("white-font");
            light.innerHTML = "Enable Light Mode"; // Update button text
        }
    });
}
