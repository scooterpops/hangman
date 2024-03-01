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

/*----- event listeners -----*/

/*----- functions -----*/

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
        console.log("correct guess")
        wordToGuessArray.forEach(function(letter, idx) {
            if (letter === letterToGuess) {
            document.getElementById('l' + idx).innerText = letter.toUpperCase()
            }
        })
    } else {
        console.log("incorrect guess")
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
        //checks to see if all elements in wordToGuessArray are in lettersGuessedArray
    }
      if (checkWinner(wordToGuessArray, lettersGuessedArray)) {
        console.log("P2 WINS");
        let blackout = document.getElementById("blackout")
        blackout.classList.remove("hide")
        blackout.classList.add("blackout")
        document.querySelector(".win-message").innerText = "P2 WINS"
        //if P2 wins, remove 'hide' class from 'blackout' id, and change win-message
       } else if (mistakesLeft === 0) {
        console.log("P1 WINS");
        let blackout = document.getElementById("blackout")
        blackout.classList.remove("hide")
        blackout.classList.add("blackout")
        document.querySelector(".win-message").innerText = "P1 WINS"
        //if P1 wins, remove 'hide' class from 'blackout' id, and change win-message
       }
        else {console.log("NO WINNER YET");
       } 
}