let errorParagraph = document.getElementById("error")
let num1 = 8
let num2 =2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function purchase(){
    console.log("button clicked")
    errorParagraph.textContent = "Something went wrong, try again"
}

function add(){
   addition =  num1 + num2
   document.getElementById("sum-el").textContent = addition
}

function substract(){
    substraction =  num1 - num2
    document.getElementById("sum-el").textContent = substraction
 }

 function divide(){
   division =  num1 / num2
    document.getElementById("sum-el").textContent = division
 }
 function multiply(){
    mull =  num1 * num2
    document.getElementById("sum-el").textContent = mull
 
 }