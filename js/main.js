/*----- constants -----*/

/*----- state variables -----*/
let wordToGuess
let letterToGuess
let wordToGuessArray = []
let mistakesLeft = 5
let mistakesMade = 0
let lettersGuessedArray =[]

document.querySelector('.counter').innerText = mistakesLeft

/*----- cached elements  -----*/
const wordToGuessInput = document.querySelector('#wordToGuess')
const letterToGuessInput = document.querySelector('#letterToGuess')
const guessesLeftElement = document.querySelector('.counter')
const showPlayerTwoWinner = document.querySelector()

/*----- event listeners -----*/

/*----- functions -----*/

// init()

function init() {
}

function getWordToGuess() {
    wordToGuess = wordToGuessInput.value.toUpperCase()
    console.log(wordToGuess)
    wordToGuessArray = wordToGuess.split("")
    console.log(wordToGuessArray)
}

function checkLetterToGuess() {
    letterToGuess = letterToGuessInput.value.toUpperCase()
    console.log(letterToGuess)
    if (!lettersGuessedArray.includes(letterToGuess)) {
        lettersGuessedArray.push(letterToGuess);
    } 
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

    console.log(wordToGuess)
    console.log(mistakesLeft)
    console.log(mistakesMade)
    console.log(wordToGuessArray)
    console.log(lettersGuessedArray)

    function checkWinner(wordToGuessArray, lettersGuessedArray) {
        return wordToGuessArray.every(element => lettersGuessedArray.includes(element));
      }
      if (checkWinner(wordToGuessArray, lettersGuessedArray)) {
        console.log("P2 WINS");
      } else {
        console.log("NO WINNER YET");
      }     
}








// function getLetterToGuess() {
//     letterToGuess = letterToGuessInput.value
//     console.log(letterToGuess)
// }

// function updateGuessesLeft() {
//     guessesLeftElement.innerHTML = guessesLeft
//     console.log(guessesLeftElement)
//