// const buttonEl = document.getElementById("button");
const patternEl = document.getElementById("pattern");
var patternString = ""
var triangle = 1
var spaces = 5

function patternShow1() {

    for (let i = 0; i < 6; i++) {

        for (let i = 0; i < 4; i++) {
            // console.log("*");
            patternString = patternString + "*"
        }
        patternString = patternString + "\n"
    }
    console.log(patternString)
    patternEl.innerText = patternString
    patternString = ""
}

function patternShow2() {
    for (let i = 0; i < 6; i++) {

        for (let j = 0; j < i + 1; j++) {
            // console.log("*");
            patternString = patternString + "*"
            // console.log(j)
        }
        patternString = patternString + "\n"
    }
    console.log(patternString)
    patternEl.innerText = patternString
    patternString = ""

}

function patternShow3() {
    for (let i = 0; i < 6; i++) {

        for (let j = 0; j < spaces; j++) {
            patternString = patternString + "\u00A0" + "\u00A0";
            // console.log(patternString)

        }
        for (let k = 0; k < 6 - spaces; k++) {
            patternString = patternString + "*"
            // console.log(patternString)

        }
        for (let l = 0; l < i; l++){
            patternString = patternString + "*"
        }
    
    patternString = patternString + "\n"
    // patternString = patternString +"*".repeat(6 - spaces)+"\n"
    spaces--
}
console.log(patternString)
patternEl.innerText = patternString
patternString = ""
spaces = 5
}


