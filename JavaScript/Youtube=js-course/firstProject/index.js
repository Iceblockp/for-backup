
const days = document.getElementById("days");
const hours = document.getElementById("hours")
const mins  = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const newYears = '2024,01,1';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const mili = newYearsDate - currentDate;
    const sec = mili / 1000;

    days.innerText = Math.floor(sec /3600/24 );
    hours.innerText = Math.floor(sec /3600 % 24 );
    mins.innerText = Math.floor(sec / 60 % 60);
    seconds.innerText = Math.floor(sec % 60)

    
    console.log(mili);
}


countdown();

setInterval(countdown , 1000);
