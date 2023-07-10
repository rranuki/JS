const InputEl = document.getElementById('txtid');
const SubmitEL = document.getElementById("submit");
const DashEl = document.getElementById("dash");
const BottomEl = document.querySelector("bottom")
const GuessBoxEl = document.getElementById("GuessBox")
const TurnsLeftEl = document.getElementById("turns-left")
const HangmanEl = document.getElementById("image1")
const WrongsRecordEl = document.getElementById("wrong-guesses")

let word = "";
let length = "";
var displayString = "";
var guess = ""
var array = ""
var letter = ""
var duplicateArray = ""
var turnsLeft = "6"
var guessedLettersRecord = []
var numberOfGuesses = 0
var wrongGuessesRecord = []


function getWord() {
    console.log(guessedLettersRecord)
    word = InputEl.value;
    InputEl.disabled = true;
    word = word.toLowerCase()
    console.log(word);
    length = InputEl.value.length;
    // console.log("word is "+ word+", length is "+length);
    InputEl.value = "";
    var inputAsArray = Array.from(word);
    array = Array.from(word);
    // console.log(inputAsArray);
    // console.log(inputAsArray[2]);
    duplicateArray = inputAsArray;
    // console.log(duplicateArray);

    for (let i = 0; i < length; i++) {
        duplicateArray[i] = '_';
    }
    // console.log(duplicateArray)
    displayString = duplicateArray.join(" ");
    DashEl.innerText = displayString;
}

function Guess() {

    guess = GuessBoxEl.value;
    guess = guess.toLowerCase()
    GuessBoxEl.value = ""
    var wrong = 0
    console.log(guess)

    // for (let j = 0; j < numberOfGuesses; j++){
    //     if ( guess = guessedLettersRecord[j]){
    //         console.log("You have already guessed this letter. Try another one!")
    //     } else{

    //     }
    // }

    if (guessedLettersRecord.includes(guess)) {
        console.log("Try another letter")
    } else {
        for (let i = 0; i < length; i++) {
            // console.log(array)
            if (guess == array[i]) {
                duplicateArray[i] = array[i]
                if (!duplicateArray.includes("_")) {
                    HangmanEl.src = "happyman.jpg"
                    GuessBoxEl.disabled = true

                }
            }
            else {
                console.log(" ")
                wrong++
            }
            if (i == length - 1) {
                guessedLettersRecord.push(guess)
                console.log(guessedLettersRecord)
            }
        }

        if (wrong == length) {
            turnsLeft--
            wrongGuessesRecord.push(guess)
            console.log("Change image here! :D")
            console.log(wrongGuessesRecord)

            switch (turnsLeft) {
                case 5:
                    HangmanEl.src = "head.jpg"
                    break;

                case 4:
                    HangmanEl.src = "body.jpg"
                    break;

                case 3:
                    HangmanEl.src = "arm1.jpg"
                    break;

                case 2:
                    HangmanEl.src = "arm2.jpg"
                    break;

                case 1:
                    HangmanEl.src = "leg1.jpg"
                    break;

                case 0:
                    HangmanEl.src = "deadman.jpg"
                    break;

                default:
                    HangmanEl.src = "stand.jpg"
            }
        }
        if (turnsLeft == 0) {
            GuessBoxEl.disabled = true
        }

        console.log(duplicateArray)
        displayString = duplicateArray.join(" ")
        DashEl.innerText = displayString
        TurnsLeftEl.innerText = turnsLeft
        WrongsRecordEl.innerText = wrongGuessesRecord.join("  ")
    }


}
