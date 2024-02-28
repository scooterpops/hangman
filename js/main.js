/*----- constants -----*/


/*----- app's state (variables) -----*/
playerOneWord = [ , , , , , ,]

playerTwoGuessLetter = 
// 1, 2?

playerTwoFinalWord = 

letterArray = []
guessArray = []
usedArray = []

/*----- cached element references -----*/


/*----- event listeners -----*/
when letter guessed, show letter
when word guessed, show green check
when out of guesses AND word not guessed, show red x

/*----- functions -----*/
function renderMessage() {







// player1 enters hiddenWord
//     -max x letters (7?)

// player2 guesses one letter at a time, and doesnt move to next letter until previous letter is guessed correctly 
//     (ie player2 can't guess letter2 until letter1 === letter1 from player1's word)

// each time player2 incorrectly guesses letter, a body part is revealed 
//     (eg bodyPart1 = headOutline, bodyPart2 = chestAndTorso, bodyPart3 = leftArm, etc)

// if player2 correctly reveals all letters (and thus the hidden word) BEFORE all body parts are revealed, player2 wins
//     else player1 wins (try and add hangmanDeath animation? or just reveal all body parts w/ finalBodyPart = xEyes)



/*----- constants -----*/
hiddenWord, hangmanBodyPart1, hangmanBodyPart2, etc., 

/*----- state variables -----*/
letter1, letter2, etc., maxLetters, hangmanBodyPart1Reveal, hangmanBodyPart2Reveal, etc.
hangmanDeathReveal, guessLetter

/*----- cached elements  -----*/
hangmanBodyPartsHidden?
hiddenCorrectLetter1, hiddenCorrectLetter2, etc

/*----- event listeners -----*/
when successful letter guessed, move arrow for next guess over to adjacent letter
when game lost, reveal hangmanDeath
when game won, reveal winningMessage

/*----- functions -----*/
gameWin
gameLose
successfulLetterGuess
unsuccessfulLetterGuess
revealBodyPart
