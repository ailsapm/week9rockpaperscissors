//define vars
var rockB = document.getElementById('rock');
var paperB = document.getElementById('paper');
var scissorsB = document.getElementById('scissors');
//recognise player's pick
rockB.addEventListener('click',()=> takeTurn('rockB'));
paperB.addEventListener('click',()=> takeTurn('paperB'));
scissorsB.addEventListener('click',()=> takeTurn('scissorsB'));

//game rules
function takeTurn (pick) {
     //limit goes
     let goes=0;
     while (goes <3){
    var compPick = [Math.floor(Math.random()*3)];
    //who wins
    if ((pick ==='rockB' && compPick==0) || (pick==='paperB' && compPick==1) || (pick==='scissorsB' && compPick==2)) {
        alert ("It's a draw!");
    } 
    else if ((pick ==='rockB' && compPick==1) || (pick==='paperB' && compPick==2) || (pick==='scissorsB' && compPick==0)) {
        alert ("You lose!");
    } 
    else {
            alert ("You win!");
    }
    goes++;
}
}
