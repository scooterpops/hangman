/*----- constants -----*/

/*----- state variables -----*/
let wordToGuess
let letterToGuess
let wordToGuessArray = []
let mistakesLeft = 5
let mistakesMade = 0
document.querySelector('.counter').innerText = mistakesLeft

/*----- cached elements  -----*/
const wordToGuessInput = document.querySelector('#wordToGuess')
const letterToGuessInput = document.querySelector('#letterToGuess')
const guessesLeftElement = document.querySelector('.counter')

/*----- event listeners -----*/

/*----- functions -----*/

// init()

function init() {
    updateGuessesLeft()
}

function getWordToGuess() {
    wordToGuess = wordToGuessInput.value.toUpperCase()
    console.log(wordToGuess)
    wordToGuessArray = wordToGuess.split("")
    console.log(wordToGuessArray)
}

function checkLetterToGuess() {
    console.log(wordToGuessArray)
    letterToGuess = letterToGuessInput.value.toUpperCase()
    console.log(letterToGuess)
    if (wordToGuessArray.includes(letterToGuess)){
        console.log("true")
        wordToGuessArray.forEach(function(letter, idx) {
            if (letter === letterToGuess) {
            document.getElementById('l' + idx).innerText = letter.toUpperCase()
            }
        })
    } else {
        console.log("false")
        document.getElementById('v' + mistakesMade).innerText = letterToGuess.toUpperCase()
        mistakesMade++
        mistakesLeft--
        document.querySelector('.counter').innerText = mistakesLeft
    }
}

// function getLetterToGuess() {
//     letterToGuess = letterToGuessInput.value
//     console.log(letterToGuess)
// }

// function updateGuessesLeft() {
//     guessesLeftElement.innerHTML = guessesLeft
//     console.log(guessesLeftElement)
// }



