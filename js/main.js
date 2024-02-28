// /*----- constants -----*/


// /*----- app's state (variables) -----*/
// playerOneWord = [ , , , , , ,]

// playerTwoGuessLetter = 
// // 1, 2?

// playerTwoFinalWord = 

// letterArray = []
// guessArray = []
// usedArray = []

// /*----- cached element references -----*/


// /*----- event listeners -----*/
// when letter guessed, show letter
// when word guessed, show green check
// when out of guesses AND word not guessed, show red x

// /*----- functions -----*/
// function renderMessage() {


// player1 enters hiddenWord
//     -max x letters (7?)

// player2 guesses one letter at a time, and doesnt move to next letter until previous letter is guessed correctly 
//     (ie player2 can't guess letter2 until letter1 === letter1 from player1's word)

// each time player2 incorrectly guesses letter, a body part is revealed 
//     (eg bodyPart1 = headOutline, bodyPart2 = chestAndTorso, bodyPart3 = leftArm, etc)

// if player2 correctly reveals all letters (and thus the hidden word) BEFORE all body parts are revealed, player2 wins
//     else player1 wins (try and add hangmanDeath animation? or just reveal all body parts w/ finalBodyPart = xEyes)








// document.addEventListener('DOMContentLoaded', function() {
//     // app state variables
//     let wordToGuess = "hangman"; // this should be replaced
//     let guessesLeft = 7;
//     let guessedLetters = [];
// }

// function displayGameState() {
//     // display number of guesses left
//     document.querySelector('.counter').textContent = guessesLeft;

//     // display guessed letters
//     document.querySelector('#guesses').innerHTML = guessedLetters.map(letter => `<div class="guess">${letter}</div>`).join('');


    // 1) player1 inputs word, store word as array
            // 1a) hide word
    // 2) player2 guesses letter1. if guess1 = letter1, reveal letter1. else reduce # of guesses left by 1.
    // 3) if letter1 is successfully guessed, reveal letter1. next guess is for letter2 and so on.
    // 4) game continues until either a) wordToGuess is revealed while guessesLeft > 0, or b) guessesLeft = 0 and wordToGuess is unrevealed

// cache Form , store variable 



/*----- constants -----*/


/*----- state variables -----*/
let wordToGuess
let letterToGuess
let wordToGuessArray =[]
let guessesLeft = 6


/*----- cached elements  -----*/
const wordToGuessInput = document.querySelector('#wordToGuess')
const letterToGuessInput = document.querySelector('#letterToGuess')
const guessesLeftElement = document.querySelector('.counter')

/*----- event listeners -----*/


/*----- functions -----*/
init()
function init() {
    updateGuessesLeft()
}

function getWordToGuess() {
    wordToGuess = wordToGuessInput.value
    console.log(wordToGuess)
    wordToArray()
}

function getLetterToGuess() {
    letterToGuess = letterToGuessInput.value
    console.log(letterToGuess)
}

function wordToArray() {
    wordToGuessArray = wordToGuess.split("")
    console.log(wordToGuessArray)
}

function updateGuessesLeft() {
    guessesLeftElement.innerHTML = guessesLeft
}


