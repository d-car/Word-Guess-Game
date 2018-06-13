// VARIABLES
// ==========================================================================

var wordBank = ["guitar", "drums", "cello", "violin", "trumpet", "tuba", "trombone"];
var compChoice = Math.floor(Math.random() * wordBank.length);
var solution = wordBank[compChoice]; //This picks a random solution by choosing the string in the wordBank array that is equal to the index of what compChoice determines.  Did I get around making a loop by using this variable?
var userAttempts = 10; //user attempts left
var userInstructions = document.getElementById("instructions");
var blankSolution = document.getElementById("blankSolution");
var blankSpace = ""; //used for blank word display
var solutionLength = solution.length; //used for blank word display
var blankWord = [solutionLength]; //used for blank word display

// FUNCTIONS
// ==========================================================================
console.log(solution)

document.onkeyup = function(event) {
    userInstructions.textContent = "You Have 10 Tries to Guess the Word!";
};

window.onload = function() {
    for (var i=0; i < solution.length; i++) {
        blankWord[i] = "_ ";
        blankSpace = blankSpace + blankWord[i];
    }

    blankSolution.innerHTML = blankSpace; 
}




