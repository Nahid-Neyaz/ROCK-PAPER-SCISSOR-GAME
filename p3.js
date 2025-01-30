const buttons= document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click',()=>{
        console.log('user choice', button.id,
            "computer choice",cplay()
        );
});
});


function  cplay() {
    const choices =["rock", "paper", "Scissors"];
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice]   
}

function playRound(player){
    
}
