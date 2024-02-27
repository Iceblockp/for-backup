

const one = document.getElementById("num1");
const two = document.getElementById("num2");
const three = document.getElementById("num3");
const four = document.getElementById("num4");
const five = document.getElementById("num5");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const input = document.getElementById("input");
const equal = document.getElementById("equal");
const answer = document.getElementById("resultLabel");

input.textContent = "";



one.addEventListener("click",function(){
    input.textContent += one.innerText ;
})
two.addEventListener("click",function(){
    input.textContent +=2
})
three.addEventListener("click",function(){
    input.textContent +=3
})
four.addEventListener("click",function(){
    input.textContent +=4
})
five.addEventListener("click",function(){
    input.textContent +=5
})
plus.addEventListener("click",function(){
    input.textContent += "+";
})
minus.addEventListener("click",function(){
    input.textContent += "-";
})

let result = 0;
equal.addEventListener("click", function(){
result = eval(input.textContent)
answer.textContent = "result: " + result;
input.textContent = "";
})
