// VARIABLES
// ==========================================================================
    
var wordBank = ["guitar", "drums", "cello", "violin", "trumpet", "tuba", "trombone"];
var choice = Math.floor(Math.random() * 8); //picks random number between 0-7
var answer = wordBank[choice]; //variable S
var aLength = answer.length;
var display = [aLength];
var win = aLength;
var letters = answer.split(''); //this takes an index from wordBank array and creates an array of that index made up of the letters 
var triesRemaining = 10;
var output = "";
var userLetter = "";


// FUNCTIONS
// ==========================================================================

var setup = function()
{

    for (var i=0; i < answer.length; i++)
    {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("blankWord").innerHTML = output;
    output ="";

}
