// how to accept user input
// EAsy WAy with a window prompt

// let username = window.prompt("what is your name?");
// console.log(username);

// let result;
// document.getElementById("myButton").onclick = function(){
//     let first = document.getElementById("mytext").value;
//     // first =Number(first);
//     let second = document.getElementById("mytext2").value;
//     // second = Number(second)
//     result = first + second;
//     document.getElementById("mylabel").innerHTML = "result :" + result;
// }

// const myImage = document.querySelector("img");

// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/firefox-icon.png") {
//     myImage.setAttribute("src", "images/firefox2.png");
//   } else {
//     myImage.setAttribute("src", "images/lusi.jpg");
//   }
// };

// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");


// function setUserName() {
//     const myName = prompt("Please enter your name.");
//     if (!myName) {
//         setUserName();
//     } else {
        
//         localStorage.setItem("name",myName);
//         myHeading.textContent = `Mozilla is cool, ${myName}`;
//     }
// }

// if (!localStorage.getItem("name")){
//     setUserName();

// } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `Mozilla is cool, ${storedName}`;
// }
// myButton.onclick = () => {
//     setUserName();
// }

// const button = document.querySelector("button");

// button.addEventListener("click", updateName);

// function updateName(){
    
//     const name = prompt("Enter a new name");
//     if (!name){
//         updateName();
//     }else{

//         button.textContent = `Player 1: ${name}`;
//     }
// }

function createParagraph(){
    const para = document.createElement("p");
    para.textContent = "Next one";
    document.body.appendChild(para);

}

const buttons = document.querySelectorAll("button");
for(const button of buttons) {
    button.addEventListener("click",createParagraph);
}























