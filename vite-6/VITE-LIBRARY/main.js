import Typed from 'typed.js';
import Chart from 'chart.js/auto'
import AOS from 'aos';
import './style.css';
import WOW from 'wow.js';
import Glide from '@glidejs/glide';
import "./node_modules/waypoints/lib/noframework.waypoints";



const myText = document.querySelector("#myText");
const adObj = document.querySelector("#adObj");
const nextSection = document.querySelector("#nextSection");

const myNewWaypoint = new Waypoint({
    element: myText,
    handler(direction){
        // console.log("hello",direction);
        if(direction === "down"){
            adObj.classList.remove("translate-x-full");

        }else if(direction === "up"){
            adObj.classList.add("translate-x-full");

        }

    },
    offset : "50%"
});

const nextSectionWaypoint = new Waypoint({
    element : nextSection,
    handler(direction){
        if(direction === "down"){
            adObj.classList.add("translate-x-full");

        }
        else if(direction === "up"){
            adObj.classList.remove("translate-x-full")

        }
    },
    offset : "50%"
})


const myChartUi = document.querySelector("#myChart");

const chart = new Chart(myChartUi,{

    
    type: "line",
    data: {
        labels: ["html","css","js","python","phhp","sql","java","rust"],
        datasets: [
            {
            label : "2002 per-use",
            data: [12,3,21,6,13,9,17,8],
            borderWidth: 1
        },
            {
            label : "2002 per-use",
            data: [12,17,8,3,21,6,13,9],
            borderWidth: 1
        }
    ]
    }
  
})


const typeUi = document.querySelector("#typeUi");


const typed = new Typed(typeUi,{
    strings : ["Companies <span class='text-primary-500'>.</span>","House","Organizations"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 50,
    backDelay : 1000,
    contentType : 'html'
})

AOS.init();

const wow = new WOW({
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated',
    resetAnimation: false
});

wow.init();


new Glide('.glide',{
    type : 'carousel',
    perView: 3,
    focusAt: 'center',
    breakpoints: {
        400:{
            perView: 1
        },
        800:{
            perView: 2
        },
        1000:{
            perView: 3
        }
    }
}).mount()
