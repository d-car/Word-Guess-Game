//VARIABLES
//==========================================================================================================================================
var wordBank = ["guitar", "drums", "triangle", "piano", "clarinet", "tuba", "harp"];
var solution = wordBank[Math.floor(Math.random()* wordBank.length)];
var solutionArray = [];
var blankWord = [];
var correctLet = [];
var wrongLet = [];
var valid;
var wins = 0;
var losses = 0;
var guessLeft = 10;



//FUNCTIONS
//==========================================================================================================================================

//selects a word from word bank and displays all info on gamescreen
function runGame()
{
	//Grab random index from wordBank array
	solution = wordBank[Math.floor(Math.random()* wordBank.length)];
    //split chosen index into array
    solutionArray = solution.split("");
	//create for loop to loop through new split array and use the push method to place "_" at each index
	for(i = 0; i < solution.length; i++)
	{
		blankWord.push(" _ "); //push "_" to the indexes of array
	}

	    document.getElementById("arrayBox").innerHTML = blankWord.join("");
        document.getElementById("instructions").innerHTML = "Press Key to Guess Letter";
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessLeft;
        document.getElementById("guessBox").innerHTML = "Guesses:"  + wrongLet;
}

//this function is to check to see if the guessed letter in in the solution

function checkLetter(letter)
{
	var inSolution;
	for (i = 0; i < solutionArray.length; i++)
	{
		if (letter == solutionArray[i])
		{
			inSolution = true;  
			replaceLetter(letter);
			correctLet.push(letter); //Something around here is wrong I think.  Solutions with multiples of letters (cello) only show 1 letter filling in.  It registers all multiples as correct just only displays one
		}
		else
		{
			inSolution = false;
		}
	}
	if (inSolution === false)
	{
		wrongLet.push(letter);
		guessLeft = guessLeft - 1; 
	}
	else
	{	
	}
	document.getElementById("arrayBox").innerHTML = blankWord.join("");
}

//function to reset variables to their original value
function reset()
{
	solution = "";
	solutionArray = [];
	wrongLet = [];
	correctLet = [];
	blankWord = [];
	guessLeft = 10;

}

//function to replace the blank spaces in solution to correct letter
function replaceLetter(letter)
{
	var j = solutionArray.indexOf(letter);
	blankWord.splice(j, 1, letter);
}

//function to check to see if the user has won the game.  If user wins, win variable increases and the alert pops and pauses the code until you clikck ok, then reset and start funtions are called again
function checkForWin()
{
	if (correctLet.length == solutionArray.length)
	{
		wins = wins + 1; //tried to use ++ here but for some reason I couldn't get that to work
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        alert("You Win!");
		reset();
		runGame();
	}
}

//This function is a check to make sure the user input has not already been guessed.

function validateKey(keystroke)
{
    if (correctLet.includes(letterGuessed) || wrongLet.includes(letterGuessed))
	{
		valid = false;
	}
	else
	{
		valid = true;
	}
}


//This calls the funtions to start and run the game
runGame();

document.onkeyup = function(event)
{
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	validateKey();
	if (valid == true)
	{
	checkLetter(letterGuessed);
	document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessLeft;
	document.getElementById("guessBox").innerHTML = "Guesses: " + wrongLet;

	checkForWin();

	if (guessLeft == 0)
	{
        alert("You Lose!")
        losses = losses + 1;
		reset();
		runGame();
		document.getElementById("losses").innerHTML = "Losses: " + losses;
	}
	}
}










