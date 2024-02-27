

// const btn = document.querySelector("#btn");
// // console.log(btn);

// const btnHandler = () => {
//     console.log("run");
// }


// btn.addEventListener('click', btnHandler)

// const heading = document.querySelector("#heading");

// heading.addEventListener('click',() =>{
//     console.log("You click");
// })
// heading.addEventListener('mouseenter',() =>{
//     console.log("You enter");
// })
// heading.addEventListener('mouseout',() =>{
//     console.log("You out");
// })
// heading.addEventListener('mousemove',() =>{
//     console.log("You move");
// })

// const input = document.querySelector("#input");

// input.addEventListener("focus",  () => { 
//     console.log("input focus");
//  })
// input.addEventListener("blur",  () => { 
//     console.log("input blur");
//  })
// input.addEventListener("change",  () => { 
//     console.log("input change");
//  })
// input.addEventListener("keyup",  () => { 
//     console.log("input keyup");
//  })
// input.addEventListener("keydown",  () => { 
//     console.log("input keydown");
//  })



// window.addEventListener("scroll",(event) => { 
//     console.log("U scroll");
//     console.log(window.scrollY);
//  })

window.addEventListener("load",() => { 
    console.log("one");
 })
 


console.log("two");
console.log("three");

// const nation = document.querySelector("#nation")

// nation.addEventListener("change",() =>{
//     console.log(nation.files);
// })


const output = document.querySelector("#output");
const textInput = document.querySelector("#textInput");
const colorInput = document.querySelector("#colorInput");
const fontSizeRange = document.querySelector("#fontSizeRange");
const fontSelect = document.querySelector("#fontSelect");
const controller = document.querySelector("#controller");

controller.addEventListener("submit",(event) => {
    event.preventDefault();
    console.log(textInput.value);
    console.log(colorInput.value);
    console.log(fontSizeRange.value);
    console.log(fontSelect.value);
})


textInput.addEventListener("keyup", (event) => { 
    output.innerText = textInput.value;
    console.log(event.key);
 })

 colorInput.addEventListener("change", () => { 
    output.style.color = colorInput.value;
  });

  fontSizeRange.addEventListener("change", () => { 
    output.style.fontSize = fontSizeRange.value+"px";
   });

   fontSelect.addEventListener("change", (  ) => { 
    output.style.fontFamily = fontSelect.value;
    })




