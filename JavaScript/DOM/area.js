

const output = document.getElementById("output");

const width = document.getElementById("width");
const breadth = document.getElementById("breadth");

const record = document.getElementById("record");

function area(w,b){
    return w*b;
}

function calculate(){
    const w = width.value;
    const b = breadth.value;
    const result = area(w,b);
    output.innerText = `${result} ft`
    
}

function clearHistory(){

    width.value = null;
    breadth.value= null;
    output.innerText = null;

}

function storeResult(){

    record.innerHTML += `<li>${width.value}ft x ${breadth.value}ft = ${output.innerHTML}</li>`

    width.value = null;
    breadth.value= null;
    output.innerText = null;

}