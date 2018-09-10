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


    // Set user wins at 0
    var userWins = 0;
    // Set user guesses at 15.
    var userGuesses = 15;
    // Create an empty array for wrong letters guessed.
    var lettersGuessed = []
    // Create an array with letters of the game word.
    var gameWord = ["c", "a", "t", "s"];
    // Create an array of spaces which will be filled in by correct letters
    var blankWord = ["_", "_", "_", "_"];

    document.getElementById("blank-word").innerHTML = blankWord;

    document.getElementById("letters-guessed").innerHTML = userGuesses;

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      //check to see what userGuess is
      console.log(userGuess)

      //Subtract 1 from userGuesses

      --userGuesses;
      console.log("Guesses left: ", userGuesses)

      //Is user guess in gameWord?
        var j = gameWord.indexOf(userGuess)
        console.log("index of user guess in game word: ", j)

      // Add userGuess to appropriate location in gameWord.
        blankWord[j] = userGuess;

        document.getElementById("blank-word").innerHTML = blankWord;

        if (j === -1) {
            lettersGuessed.push(userGuess);

            console.log(lettersGuessed)

        }

        document.getElementById("user-guesses").innerHTML = lettersGuessed;
    };
 