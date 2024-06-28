let gs=[];
let us=[];

let btns=["red","orange","green","blue"];


let started=false;

let h2=document.querySelector("h2");
let level=0;
let hs=0;

let h3=document.querySelector("h3");
h3.innerText=`Your High Score is ${hs}`;

document.addEventListener("keypress",function(){
    if(started==false)
    {
        console.log("Game Started");
        started=true;
    }
    levelUp();
});

function btnFlash(btn)
{
    btn.classList.add("flash");
    //to set background color white for particular interval only
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },250);
}

function levelUp()
{
    us=[];
    level++;
    
    //to set incremented value as default in the specified curly brace place
    h2.innerText=`Level ${level}`;
    let ind=Math.floor(Math.random()*4);
    let c=btns[ind];
    gs.push(c);
    let rbtn=document.querySelector(`.${c}`);
    btnFlash(rbtn);
    // console.log(ind);
    // console.log(c);   
    //to access the rondomly generated color class,we can't explicitly specify which class is generated.so,to generalise it.we use ${}
    
    // console.log(gs);
    // console.log(us);
    // console.log(rbtn);
    
}

function btnPress()
{   
    let btn=this;
    console.log(this);
    btnFlash(btn);
    let name=btn.getAttribute("id");
    us.push(name);
    console.log(us);
    checkAns(us.length-1);
}

let allBtns=document.querySelectorAll(".btn");

for(let btn of allBtns)
{
   btn.addEventListener("click",btnPress);
}

function reset()
{
    level=0;
    started=false;
    gs=[];
    us=[];
}

function checkAns(ind)
{
    // let ind=level-1;
    if(us[ind]===gs[ind])
    {
        if(us.length == gs.length)
        {
            // levelUp();
            setTimeout(levelUp,1000);
        }   
    }
    else
    {
        
        h2.innerHTML=`Game Over! Your Score is <b>${level-1}</b> <br>Enter any key to start new Game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";
        },100);
        if(hs<level-1)
        {
            hs=level-1;
            h3.innerText=`Your High Score is ${hs}`;
        }
        reset();
    }
}


