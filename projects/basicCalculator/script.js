let num1 = 10;
let num2 = 3;

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function addBtn() {
    
    document.getElementById("sum-el").textContent = "sum: "
    let sumvalue2 = num1 + num2
    output = document.getElementById("sum-el").textContent
    printValue = output + sumvalue2
    document.getElementById("sum-el").textContent = printValue
    
}

function subBtn() {
    
    document.getElementById("sum-el").textContent = "sum: "
    let sumvalue2 = num1 - num2
    output = document.getElementById("sum-el").textContent
    printValue = output + sumvalue2
    document.getElementById("sum-el").textContent = printValue
    
}

function divBtn() {
    document.getElementById("sum-el").textContent = "sum: "
    let sumvalue2 = num1 / num2
    output = document.getElementById("sum-el").textContent
    printValue = output + sumvalue2
    document.getElementById("sum-el").textContent = printValue
    
}

function multBtn() {
    document.getElementById("sum-el").textContent = "sum: "
    let sumvalue2 = num1 * num2
    output = document.getElementById("sum-el").textContent
    printValue = output + sumvalue2
    document.getElementById("sum-el").textContent = printValue
    
}