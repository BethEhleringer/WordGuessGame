/*!-- Instructions
    3. Use key events to listen for the letters that your players will type.

4. Display the following on the page:

5. Press any key to get started!

6. Wins: (# of times user guessed the word correctly).

   * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

   * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

7. Number of Guesses Remaining: (# of guesses remaining for the user).

8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

9. After the user wins/loses the game should automatically choose another word and make the user play it.

-->*/



  
// VARIABLES
// ==========================================================================


// We start the game with a score of 0.
var score = 0;
document.getElementById("user-wins").innerHTML = score;
var wordIndex = 0;


//for each word, set guesses to 15
var letterGuesses = 15;

//create an empty array of letters used. (This is reset each round.)
var lettersGuessed = [];

// The array of words for our word game.
var words = ["zombie", "ghost", "monster"];
 // Variable to hold the index of current question.
 //var wordIndex = words[0];
 var images = []

var k = 0;
    //Change string in words[i] into an array of letters.
var gameWord = words[k];
console.log("testing123", gameWord);
gameWordArray = gameWord.split("");
console.log(gameWordArray);
//Make an array of blanks that is the same length as the array gameWord.
var blankWord = [];

for (i = 0; i < gameWordArray.length; i++) {
    blankWord.push("_");
}; 

var blankSpaces = blankWord.join(" ");
document.getElementById("blank-word").innerHTML = blankSpaces;

document.getElementById("guesses-remaining").innerHTML = letterGuesses;

document.getElementById("already-guessed").innerHTML = lettersGuessed;

 var guessString = blankWord.join("");
if (guessString === gameWord) {
 alert("You won this round!")
 userWins = (userWins + 1);
 document.getElementById("user-wins").innerHTML = userWins;
 wordIndex++;
 console.log(wordIndex);
}




// FUNCTIONS
// ==============================================================================

// Function to render words.
function renderWord() {
  // If there are still more words, render the next one.
  if (wordIndex <= (words.length - 1)) {
    document.querySelector("#word").innerHTML = words[wordIndex];
  }
  // If there aren't, render the end game screen.
  else {
    document.querySelector("#word").innerHTML = "Game Over!";
    document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + words.length;
  }
}

//Function to change string from words[i] to array of letters (gameWord).

//Function to record key stroke

//Function to check if character typed is located in array gameWord.

//If character typed is located in array gameword, then record the index and replace the index in blankWord with this character.
//If blankWord[] === gameWord[], then alert ("You won this round!"), change image, and add one to user score.
//If character typed is not located in array gameWord, then push the character into array lettersGuessed.
//Also subtract 1 from letterGuesses.
// If letterGuesses < 1, alert the player that they lost that round, show words[i] (or gameWord[]) and start new round with the next word.
//If 

// Function that updates the score...
function updateScore() {
  document.querySelector("#user-wins").innerHTML = "Score: " + score;
}


// MAIN PROCESS
// ==============================================================================

// Calling functions to start the game.
renderWord();
updateScore();

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

//check to see what userGuess is
console.log(userGuess)

//Subtract 1 from userGuesses

letterGuesses = (letterGuesses - 1);
console.log("Guesses left: ", letterGuesses)

//Is user guess in gameWordArray?
var j = gameWordArray.indexOf(userGuess)
console.log("index of user guess in gameWordArray: ", j)

// Add userGuess to appropriate location in blankWord.
blankWord[j] = userGuess;

//reset blankSpaces to show letter that user has guessed.

//Is user guess in gameWordArray?
var j = gameWordArray.indexOf(userGuess)
console.log("index of user guess in gameWordArray: ", j)

// Add userGuess to appropriate location in blankWord.
blankWord[j] = userGuess;

//reset blankSpaces to show letter that user has guessed.


document.getElementById("blank-word").innerHTML = blankWord;

if (j === -1) {
  lettersGuessed.push(userGuess);
  //userGuesses = userGuesses - 1;
  document.getElementById("guesses-remaining").innerHTML = letterGuesses;
  console.log(lettersGuessed)
  document.getElementById("already-guessed").innerHTML = lettersGuessed;

}
else {
  lettersGuessed.push(userGuess);
  //userGuesses = userGuesses - 1;
  document.getElementById("guesses-remaining").innerHTML = letterGuesses;
  console.log(lettersGuessed) 
  document.getElementById("already-guessed").innerHTML = lettersGuessed;

}

console.log("the guess is ", blankWord);
console.log('the word is ', gameWordArray);
(blankWord === gameWordArray) ;
}

/*if {
  (gameWord[0]===blankWord[0])
      alert("User wins this round!");
      userWins++;
      document.getElementById("user-wins").innerHTML = userWins;
  }*/

