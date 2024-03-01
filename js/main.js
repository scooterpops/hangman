let wordToGuess
let letterToGuess
let wordToGuessArray = []
let lettersGuessedArray =[]
let mistakesLeft = 5
let mistakesMade = 0

document.querySelector('.counter').innerText = mistakesLeft

const wordToGuessInput = document.querySelector('#wordToGuess')
const letterToGuessInput = document.querySelector('#letterToGuess')
const guessesLeftElement = document.querySelector('.counter')

function init() {
}

function getWordToGuess() {
    wordToGuess = wordToGuessInput.value.toUpperCase()
    wordToGuessArray = wordToGuess.split("")
    wordToGuessInput.value = ''
    wordToGuessInput.disabled = true
    
    if (wordToGuessArray.length < 7) {
        for (let i = 6; i >= wordToGuessArray.length; i--) {
        document.getElementById('l' + i).innerText = '-'
        }
    }
}

function checkLetterToGuess() {
    letterToGuess = letterToGuessInput.value.toUpperCase()
    
    if (!lettersGuessedArray.includes(letterToGuess)) {
        lettersGuessedArray.push(letterToGuess);
    } 
    if (wordToGuessArray.includes(letterToGuess)){
        wordToGuessArray.forEach(function(letter, idx) {
            if (letter === letterToGuess) {
            document.getElementById('l' + idx).innerText = letter.toUpperCase()
            }
        })
    } else {
        document.getElementById('v' + mistakesMade).innerText = letterToGuess.toUpperCase()
        mistakesMade++
        mistakesLeft--
        document.querySelector('.counter').innerText = mistakesLeft
    }

    letterToGuessInput.value = ''

    function checkWinner(wordToGuessArray, lettersGuessedArray) {
        return wordToGuessArray.every(element => lettersGuessedArray.includes(element));
    }
      if (checkWinner(wordToGuessArray, lettersGuessedArray)) {
        let blackout = document.getElementById("blackout")
        blackout.classList.remove("hide")
        blackout.classList.add("blackout")
        document.querySelector(".win-message").innerText = "P2 WINS"
       } else if (mistakesLeft === 0) {
        let blackout = document.getElementById("blackout")
        blackout.classList.remove("hide")
        blackout.classList.add("blackout")
        document.querySelector(".win-message").innerText = "P1 WINS"
       }
} 
