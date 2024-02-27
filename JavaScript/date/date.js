// console.dir(Date);
// console.log(Date.now());


// const date = new Date();
// console.dir(date);

// console.log(date.toDateString());
// console.log(date.toTimeString());

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// // jan 1 1970 ---> millisecond

// console.log(date.getTime());
// console.log(Date.now());
// console.log(date.getTime());
// console.log(date.getTimezoneOffset());

// // date.setFullYear(2030);
// console.log(date.getFullYear());
// console.log(date.getUTCFullYear());
// console.log(date.getDate());
// console.log(Date.parse());
// console.log(Date.UTC());
// console.log(Date.now());
// console.log(date.constructor());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());
// console.log(date.toString());


// const today = new Date();
// const birthday = new Date("April 24, 2001 03:24:00");
// // const birthday2 = new Date("2001-4-2T03:24:00");
// const birthday3 = new Date(1995, 11, 17);

// console.log(today);
// console.log(birthday);
// console.log(birthday3);

// const start = new Date();

// const end = new Date();
// const elapsed = end.getDate() - start.getDate();
// console.log(elapsed);



// function printElapsedTime(testFn) {
//     const startTime = Date.now();
//     const result = testFn();
//     const endTime = Date.now();

//     console.log(`Tlapsed time: ${String(endTime - startTime)} milliseconds`);

//     return result;
// }




// const seconds = Math.floor(Date.now()/1000);
// console.log(seconds);


// const date1 = new Date()
// console.log(date1);

// const date2 = new Date('2001-04-24T03:24:00')
// console.log(date2);

// console.log(date1 === date2);

// console.log(date2 - date1);



// const time = document.querySelector(".time");

// time.textContent = `Countdown to new years`;


// const secondTime = document.querySelector(".second");
// const dayTime = document.querySelector(".day");
// const hourTime  = document.querySelector(".hour");
// const minuteTime = document.querySelector(".minute");
// function updateCountdown(){
//     const newYear = new Date('2024-01-01T00:00:00');

// const Today = new Date();

// const countdown = newYear - Today;
// console.log(countdown);

// const time = document.querySelector(".time");
// time.textContent = `Countdown to new years`;

// const second = countdown/1000;
// secondTime.textContent = Math.floor(second)%60 + " seconds";

// const day = second/60/60/24;
// dayTime.textContent = Math.floor(day) +" days";

// const hour = (second/60/60)%24;
// hourTime.textContent = Math.floor(hour) + " hours"

// const minute = (second/60)%60;
// minuteTime.textContent = Math.floor(minute) + " minutes";
// }

// updateCountdown();
// setInterval(updateCountdown, 1000);



// const date = new Date("1994-7-22");
// const date = new Date(2050,8,15);
// console.log(date);
// console.log(date.toString());


// next 300 hours?

const date = new Date();


// next 300hours?
// date.setHours(date.getHours() + 300)

//next 4 month
// date.setMonth(date.getMonth() +4);

// 50/2 = 25day
date.setDate(date.getDate() + 25)


console.log(date);



