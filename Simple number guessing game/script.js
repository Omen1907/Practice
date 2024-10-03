let guessInput = document.getElementById("guessInput");
let guessBtn = document.querySelector("button");

let randomNum = Math.floor(Math.random() * 100) + 1;

guessBtn.addEventListener("click", function() {
    let userGuess = Number(guessInput.value);
    
    if(userGuess === randomNum){
        document.getElementById("message").textContent = "You got it!";

        setTimeout(resetGame, 2000);
    } else if(userGuess > randomNum){
        document.getElementById("message").textContent = "Too high!";
    } else if (userGuess < randomNum){
        document.getElementById("message").textContent = "Too low!";
    };
});;

function resetGame(){
    randomNum = Math.floor(Math.random() * 100) + 1;
    guessInput.value = "";
    document.getElementById("message").textContent = "";
};