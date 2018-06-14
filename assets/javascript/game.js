// VARIABLES
// ==========================================================================

var wordBank = ["guitar", "drums", "cello", "violin", "trumpet", "tuba", "trombone"];
var solution = wordBank[Math.floor(Math.random() * wordBank.length)];
var solutionLength = solution.length; //used for blank word display
var bSolArray = [];//used in checking guessed letters
var wrongGuess = [];
var rightGuess = [];
var rightLet = [];
var displayWord = [];
var displayWordArray = solution.split(""); //splits selected solution into array
var userAttempts = 10; //user attempts left
var userInstructions = document.getElementById("instructions");
var blankSolution = document.getElementById("blankSolution");
var blankSpace = ""; //used for blank word display
var solutionLength = solution.length; //used for blank word display
var blankWord = [solutionLength]; //used for blank word display
var guessesLeft = 10;


// FUNCTIONS
// ==========================================================================
console.log(solution)


// document.onkeyup = function(event) {
//     userInstructions.textContent = "You Have 10 Tries to Guess the Word!"
// }

// window.onload = function() {

//     for (var i=0; i < solution.length; i++) {
//         blankWord[i] = "_ ";
//         blankSpace = blankSpace + blankWord[i];
//     }

//     blankSolution.innerHTML = blankSpace; 
//     blankSpace = "";
// }

function begin()
{
	targetWordArray = solution.split("");
	//transforms word to an array of dashes
	for(i=0; i<solution.length; i++)
	{
		displayWord.push(" _ ");
	}

	document.getElementById("userGuesses").innerHTML = displayWord.join("");
	document.getElementById("instructions").innerHTML = "press any key to guess a letter";
	document.getElementById("wins").innerHTML = "Wins: " + wins;
	document.getElementById("losses").innerHTML = "Losses: " + losses;
	document.getElementById("userGuesses").innerHTML = "Guesses Remaing: " + guessesLeft;
	document.getElementById("guessBox").innerHTML = "Letters Guessed: " + wrongGuess;
}

function checkLetter(letter) {
    var letInWord
    for (j = 0; j < displayWordArray.length; j++) {

        if(letter == displayWordArray[i])
        {
            letInWord = true;
            replaceLetter(letter);
			rightGuess.push(letter);
        }
        else {
            letInWord = false;
        }
    }
	if(letInWord === false)
	{
		wrongGuess.push(letter);
		guessesLeft = guessesLeft - 1;
	}
	else
	{	
	}
	document.getElementById("guessBox").innerHTML = displayWord.join("");
}

function replaceLetter(letter)
{
	var j = displayWordArray.indexOf(letter);
	displayWord.splice(j, 1, letter);
}
    










