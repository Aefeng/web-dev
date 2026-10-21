let num1= 10
let num2= 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let result = document.getElementById("result")

function add(){
    answer = num1 + num2
    result.textContent = "Result: "+ answer 
}

function subtract(){
    answer = num1 - num2
    result.textContent = "Result: " + answer 
}

function divide(){
    answer = num1 / num2
    result.textContent = "Result: " + answer 
}

function multiply(){
    answer = num1 * num2
    result.textContent = "Result: " + answer 
}