const buttons= document.querySelectorAll('button');

const resultE1 = document.getElementById("result");

let playerscore = 0;
let computerscore = 0;

const psE1=document.getElementById("user-score");
const csE1=document.getElementById("c-score");

buttons.forEach(button => {
    button.addEventListener('click',()=>{
      const r= playRound(button.id,cplay());
      resultE1.innerHTML=r;
});
});


function  cplay() {
    const choices =["rock", "paper", "Scissors"];
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice]   
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return("It's a tie");}
    else if((playerSelection == "rock" && computerSelection == "Scissors")|| (playerSelection == "Scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock") )
    {
        playerscore++;
        psE1.innerHTML=playerscore;
        return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else {
        computerscore++;
        csE1.innerHTML=computerscore;
        return ("You lose! " + computerSelection + " beats " + playerSelection);
    }

}
