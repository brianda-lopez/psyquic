
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessNum = [10];
var guessChoice = [];
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesSoFarText= document.getElementById("guesses-so-far-text");

   
function(key);

document.onkeypress = function(key){
    var userGuess = event.key;
    ComputerChoice = alphabet[Math.floor(Math.random()*alphabet.length)];
    console.log(ComputerChoice);

   if (userGuess === ComputerChoice){
       wins++;
       guessNum = 9;
       guessChoice = [];
       winsText.textContent = 'Wins: ' + wins;

   } else {
       if (guessChoice.includes(userGuess)){} else {
        guessNum--;
        guessChoice.push(userGuess);
        guessesLeftText.textContent = 'Guesses Left: ' + guessNum;
        guessesSoFarText.textContent = 'Guesses So Far: ' + guessChoice;
        }
    }
    if (guessNum == 0){
       guessNum++;
       losses++;
       guessChoice = [];
       lossesText.textContent = 'Losses: ' + losses;
    }
}



