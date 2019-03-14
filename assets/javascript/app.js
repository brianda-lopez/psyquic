var winCounter = 0
var lossCounter = 0
var guessCount;
var guessArray;
var RandomLetter;
var alphabetOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function handlekeyup (event){
    console.log(event.key);
    var letterChosen = event.key;
    
   if(guessArray.indexOf(letterChosen) < 0){
    guessArray.push(letterChosen);
    guessCount --;
   }

   if(guessCount <=
    0) {
    
    alert('computer won');
    
    resetStart();
    
    }
      
    if (RandomLetter ===
        letterChosen){
        
        increaseWinCounter(); 
        
        alert('winner');
        
        resetStart();
        
        } else {
        
        increaseLossCounter();
        
        }
        
        document.getElementById('user-score').innerHTML =
        "winCounter: " + 
        winCounter;
        
        document.getElementById('computer-score').innerHTML =
        "lossCounter: " + 
        lossCounter;
        
        // letterChosen.innerText = letterChosen.innerText + event.key;
        
        console.log(letterChosen);
        
        console.log(guessArray);
        
        
        }
        
        
        
        function 
        increaseWinCounter(){
        
        // winCouter = 
        
        winCounter++;
        
        
        
        }
        
        function 
        increaseLossCounter(){
        
        // lossCounter = 
        
        lossCounter--;
        
        }
        
        
        
        var 
        resetStart = function(){
        
        // reset the guessCount, 
        
        guessCount = 
        10;
        
        // reset the guessArray,
        
        guessArray = [];
        
        // choose a random new letter,
        
        RandomLetter = 
        alphabetOptions[Math.floor(Math.random()*alphabetOptions.length)];
        
        console.log(RandomLetter);
        
        }
        

    
 


