let userscore = 0;
let cmpscore = 0;
let turn = document.querySelectorAll(".imgg");
let result = document.getElementById("result");

function playgame(userchoice){
    let userchoic = userchoice;
    console.log(userchoic);
    const cmpchoic = cmpchoice();
    console.log(cmpchoic);
    
    if(userchoic === cmpchoic){
        result.innerHTML = "Draw (Both Pick same Move)"
        result.style.backgroundColor = "rgb(0, 74, 50)";
        result.style.color = "white";
    }
    else{
        let userwin;
        if(userchoic === "scissors"){
            userwin = (cmpchoic === "paper") ? true : false; 
            userwin = (cmpchoic === "rock") ? false : true; 
        }
        else if(userchoic === "rock"){
            userwin = (cmpchoic === "paper") ? false : true; 
            userwin = (cmpchoic === "scissors") ? true : false; 
        }
        else if(userchoic === "paper") {
            userwin = (cmpchoic === "rock") ? true : false; 
            userwin = (cmpchoic === "scissors") ? false : true; 
        }
        showwinner(userwin);
    }
}
function showwinner(val){
    if(val){
        console.log("You are Winner");
        ++userscore;
        let myscore = document.getElementById("myscore");
        myscore.innerHTML = userscore;
        result.innerHTML = "You win, Computer loss"
        result.style.backgroundColor = "rgb(7, 146, 7)";
        console.log("Your score"+userscore);
    }
    else if(val === false){
        console.log("You lose");
        ++cmpscore;
        let cmpsc = document.getElementById("cmpscore");
        cmpsc.innerHTML = cmpscore;
        result.innerHTML = "Computer win, You loss"
        result.style.backgroundColor = "rgb(171, 2, 2)";
        console.log("cmp score"+ cmpscore);
    }
    else{
        console.log("select any one");
        result.innerHTML = "Pick Your Move"
        result.style.backgroundColor = "blue";
    }
}
playgame();

turn.forEach(ele => {
    ele.addEventListener("click", () => {
        let namee = ele.getAttribute("id");
        playgame(namee);
    })
});

function cmpchoice() {
    let options = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    let select = options[random];
    return select;
}

