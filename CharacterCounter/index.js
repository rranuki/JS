const txtareaEl = document.getElementById("textarea");
const counterEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining-counter");

txtareaEl.addEventListener("keyup",()=>{
console.log("key is pressed")
updateCounter()
})

function updateCounter(){
    counterEl.innerText = txtareaEl.value.length
    remainingEl.innerText = txtareaEl.getAttribute("maxlength") - txtareaEl.value.length
}