// window.addEventListener("resize", () => {
//     console.clear()
//     console.log("inner width", window.innerWidth);
//     console.log("inner Height", window.innerHeight);
//     console.log("outer width", window.outerWidth);
//     console.log("outer Height", window.outerHeight);
// })


// addEventListener("scroll", () => {
//     // console.clear()
//     // console.log(scrollY); 

//     const el = document.querySelector("p");

//     const computedStyle = getComputedStyle(el);
//     const elHeight = parseInt(computedStyle.height);
//     if(scrollY > elHeight * 0.91){
//         console.log("Thank for reading");
//     }
// })

// addEventListener("offline", () => {
//     console.log("U r offline");
// })

// addEventListener("online",() => {
//     console.log("You are online");
// })

// const clock = document.querySelector("#clock");

// const run = () => {
//     // console.log("I'm run");
//     const d = new Date();
//     clock.innerText = d.toTimeString()
// }


// const timer = setTimeout(run,5000);
// const interval = setInterval(run,1000);


// document.querySelector("#btn").addEventListener("click", () => {
//     clearInterval(interval);
//     console.log("timer clear");
// })

// document.querySelector("#googleBtn")

// const here = document.querySelector("#here");
// console.log(here.getBoundingClientRect().top);

// const scroll =document.querySelector("#scroll");

// scroll.addEventListener("click", () => {
//     scrollTo(0,here.getBoundingClientRect().top)
//     console.log(scrollY);
// })

console.log(screen.orientation);




