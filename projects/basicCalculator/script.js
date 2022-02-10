let num1 = 10;
let num2 = 3;

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function addBtn() {
    console.log("btn clicked")
    document.getElementById("sum-el").textContent = "sum: "
    let sumvalue2 = num1 + num2
    console.log(sumvalue2)
    output = document.getElementById("sum-el").textContent
    console.log(output)
    printValue = output + sumvalue2
    console.log(printValue)
    document.getElementById("sum-el").textContent = printValue
    output = "sum: "
    
}

function subBtn() {
    console.log("btn clicked")
    document.getElementById("sum-el").textContent = "sum: "
    
    let sumvalue2 = num1 - num2
    console.log(sumvalue2)
    output = document.getElementById("sum-el").textContent
    console.log(output)
    printValue = output + sumvalue2
    console.log(printValue)
    document.getElementById("sum-el").textContent = printValue
    output = "sum: "
    
}

function divBtn() {
    console.log("btn clicked")
    document.getElementById("sum-el").textContent = "sum: "
    
    let sumvalue2 = num1 / num2
    console.log(sumvalue2)
    output = document.getElementById("sum-el").textContent
    console.log(output)
    printValue = output + sumvalue2
    console.log(printValue)
    document.getElementById("sum-el").textContent = printValue
    output = "sum: "
    
}

function multBtn() {
    console.log("btn clicked")
    document.getElementById("sum-el").textContent = "sum: "
    
    let sumvalue2 = num1 * num2
    console.log(sumvalue2)
    output = document.getElementById("sum-el").textContent
    console.log(output)
    printValue = output + sumvalue2
    console.log(printValue)
    document.getElementById("sum-el").textContent = printValue
    output = "sum: "
    
}