let firstBatch = 5;
let secondBAtch = 7;

// let count = firstBatch + secondBAtch

// count = "I am a King"
const myPi = 3.43434

// myPi = "pi tester"

let count = 0;


function increment(){
    count += 1
    document.getElementById("count-el").textContent = count
    
}

function save() {
    saveEl = document.getElementById("save-el").textContent
    currentCount = document.getElementById("count-el").textContent + " - "
    saveEl += currentCount

    document.getElementById("save-el").textContent = " " + saveEl
    count = 0
    document.getElementById("count-el").textContent = count
}