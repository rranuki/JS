const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");
const dateEl = document.getElementById("date");
const txthourEl = document.getElementById("texthours");
const txtminuteEl = document.getElementById("txtmin");
const txtsecondEl = document.getElementById("txtsec");
const txtdateEl = document.getElementById("txtdate");
const bodyEl = document.getElementById("body");
let currentImage = "url('https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')";

function updateClock()
{
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    let ampm = "AM"

    if (h >= 12) {
        ampm = "PM"
    }

    if (h > 12) {
        h = h -12
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    // ampmEl,(innerText = ampm);
    ampmEl.innerText = ampm;

  
    setTimeout(() => {
        updateClock()
    },1000);

    // console.log(mo);
}


function updateDate(){

    let d = new Date().getDate()
    let mo = new Date().getMonth() + 1
    let y = new Date().getFullYear()

    // let x = new Date.now;
    console.log("x :");

    d = d < 10 ? "0" + d : d
    mo = mo < 10 ? "0" + mo : mo

    // console.log("d :" + d);


    let displayDate = d + "/" + mo + "/" + y

    dateEl.innerHTML = displayDate;

    setTimeout(() => {
        updateDate()
    }, 1000);

    // console.log("month is " + mo);
}



function changeColour(){
    console.log("hello");

if (hourEl.style.backgroundColor == "rgb(84, 169, 0)") {
    hourEl.style.backgroundColor = "orangered";
    minuteEl.style.backgroundColor = "orangered";
    secondEl.style.backgroundColor = "orangered";
    dateEl.style.backgroundColor = "rgb(223, 0, 211)"; 
ampmEl.style.backgroundColor = "rgb(205, 0, 191)"
txthourEl.style.backgroundColor = "red"
txtminuteEl.style.backgroundColor = "red"
txtsecondEl.style.backgroundColor = "red"
txtdateEl.style.backgroundColor = "rgb(106, 42, 165)" 
} else {
 hourEl.style.backgroundColor = "rgb(84, 169, 0)";
    minuteEl.style.backgroundColor = "rgb(84, 169, 0)";
    secondEl.style.backgroundColor = "rgb(84, 169, 0)";
    dateEl.style.backgroundColor = "rgb(2, 149, 255"; 
ampmEl.style.backgroundColor = "darkcyan"
txthourEl.style.backgroundColor = "green"
txtminuteEl.style.backgroundColor = "green"
txtsecondEl.style.backgroundColor = "green"
txtdateEl.style.backgroundColor = "rgb(0, 81, 139)"
}
}

function changeBackground(){
    
        // bodyEl.style.backgroundImage = "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')";


let imageLogText = "null";
console.log("1 currentImage is:" + currentImage);

let imageoriginal = "url('https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')";


let imagenew = "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')"

if (currentImage == imageoriginal) {
    
bodyEl.style.backgroundImage = imagenew;
imageLogText = "image old";
currentImage = imagenew;


} else {

    bodyEl.style.backgroundImage = imageoriginal;
    imageLogText = "image new";
    currentImage = imageoriginal;
}

        

    console.log("currentImage is:" + imageLogText);
}



updateClock()
updateDate()