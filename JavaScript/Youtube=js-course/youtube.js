// Type Conversion = Change the datatype of a a value to another (strings, numbers,booleans)

// let age = window.prompt("How old are you?");
// console.log(typeof age);
// age = Number(age)
// console.log(typeof age);

// age += 1

// console.log("Happy Birthday! You are", age , "years old");

// let x;
// let y;
// let z;

// x =Number("32");
// y = String(62);
// z = Boolean("")
// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);


// const = a variable that can't be changed/ can't reassign

// let pi = 3.14159;
// let radius;
// let circumference;
// //  pi  = 420;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// circumference = 2* pi * radius;
// console.log("The circumference is", circumference);



///? Math.floor &etc

// let x = 3.51;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum
// // x = Math.round(x);
// x = Math.round(x);

// x = Math.floor(x);
// x = Math.ceil(x)
// x = Math.pow(x,2)
// x = Math.sqrt(x);
// x = Math.abs(x)
// maximum = Math.max(x,y,z)

// console.log(maxi);


// TAking user input

// let a;
// let b;
// let c;

// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b= Number(b);

// c = Math.pow(a,2) + Math.pow(b,2);
// c = Math.sqrt(c);

// console.log("Side C:", c);

// document.getElementById("submit").onclick = function(){
//     a = document.getElementById("aTextBox").value;
//     a = Number(a);

//     b = document.getElementById("bTextBox").value;
//     b = Number(b);

//     c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

//     document.getElementById("cLabel").innerHTML = "Side C: " + c;
// }


//Decrease Reset And Increase

// let count = 0;

// document.getElementById("decreaseBtn").onclick = function (){
//     count-=1;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("resetBtn").onclick = function (){
//     count = 0;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("increaseBtn").onclick = function(){
//     count += 1;
//     document.getElementById("countLabel").innerHTML = count;
// }

//ROll Button
// let x;
// let y;
// let z;

// document.getElementById("rollButton").onclick = function (){

//      x = Math.floor(Math.random() * 6 ) +1 ;
//  y = Math.floor(Math.random() * 6 ) +1 ;
//  z = Math.floor(Math.random() * 6 ) +1 ;


//  document.getElementById("xLabel").innerHTML = x;
//  document.getElementById("yLabel").innerHTML = y;
//  document.getElementById("zLabel").innerHTML = z;

// }


// useful string properties & methods

// let userName = "Bro Code";
// let phoneNumber = "123-235-456";

// console.log(userName.length);
// console.log(userName.charAt(0));
// console.log(userName.indexOf("o"));
// console.log(userName.lastIndexOf("o"));

// userName = userName.trim();
// userName = userName.toUpperCase();
// phoneNumber = phoneNumber.replaceAll("-", "");

// console.log(phoneNumber);


// slice () extracts a section of a string
// and returns it as a new string,
// without  modifying the original string

// let fullName = "Phyue kyaw";
// let firstName;
// let lastName;
// firstName = fullName.slice(0,3);

// lastName = fullName.slice(4);
// firstName = fullName.slice(0,fullName.indexOf(" "));
// lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstName);
// console.log(lastName);


// method chaining = calling one method after another
//          in one continuous line of code

// let userName = "bro";

// let letter = userName.charAt(0).toUpperCase().trim();
// console.log(letter);


//if statement = a basic form of decision making
// if a condition is true, then do something
// if not, then don't do it!

// let age = 12;

// if(age>=18){
//     console.log("You are an adult!");

// }else{
//     console.log("You are child");
// }


// let online = true;

// if(online){
//     console.log("You arre online!");
// }
// else{
//     console.log("orlfjl;asjfl;ja;lkfjkl;asjfljwe"
//     );
// }




// document.getElementById("myButton").onclick = function (){
//     const myCheckBox = document.getElementById("myCheckBox");
//     const visaBtn = document.getElementById("visaBtn");
//     const mastercardBtn = document.getElementById("mastercardBtn");
//     const paypalBtn = document.getElementById("paypalBtn");

//     if(myCheckBox.checked){
//         console.log("You are subscribed!");

//     }else{
// console.log("You are Not subscribed!");
//     }

//     if(visaBtn.checked){
//         console.log("You are paying with a Visa!");
//     }
//     else if(mastercardBtn.checked){
//         console.log("You are paying with a Mastercard!.");
//     }
//     else if(paypalBtn.checked) {
// console.log("You are paying with Paypal!.");
//     }
//     else{
//         console.log("You must select a payment type!.");
//     }
// }



// switch = statement that examines a value for a match against many case clauses.
// more efficient that many "else if" statements.

// let grade = "Aaz";

// switch (grade) {
//     case "A":
//         console.log("You did great!");
//         break;
//     case "B":
//         console.log("You did good!");
//         break;
//     case "C":
//         console.log("You did okay!");
//         break;
//     case "D":
//         console.log("You passed .... barely");
//         break;
//     case "F":
//         console.log("You FAILED");
//         break;
//     default:
//         console.log(grade , "is not a letter grade");
// }

// gives us the ability to check more than 1 condition concurrently
// && AND (Both conditions must be true)
// || or (Either condition can be true)


// let temp = 15;

// if(temp <= 0 || temp > 30){
//     console.log("The weather is bad!");

// }
// else {
//     console.log("the weather is good!");
// }


// ! Not logical operator
// typically used to reverse a condition's boolean value
// true -> false false -> true

// let temp = 15;
// let sunny = true;

// if(!(temp > 0)){
//     console.log("it's warm outside");
// }
// else{
//     console.log("it's cold outside");
// }

// if (!sunny){
//     console.log("It's sunny outside");
// }
// else{
//     console.log("It's cloudy outsde");
// }


// while loop = repeat some code
//              while some condition is true potentially infinite

// let userName = "";

// while(userName == "" || userName == null){
//     userName = window.prompt("Enter your name");

// }
// console.log("Hello",userName);


// do while loop = do something, then check the condition, repeat if condition is true


// let userName = "";

// do{
//     userName = window.prompt("Enter Your name")

// }while(userName == "" || userName == null);

// console.log("Hello", userName);

// for loop = repeat some code a certain amount of times

// for(let counter = 1 ; counter<= 100; counter ++){
//     console.log(counter);
// }

// break = braaks out of a loop entirely
// contiure = skip an iteration of a loop


// for(let i = 1; i<=20; i++){
//     if(i == 13){
//         continue;
//     }
//     console.log(i);
// }

// nested loop = a loop inside of another loop

// let symbol = window.prompt("Enter a symbol to use");

// let rows = window.prompt("Enter # of rows");
// let columns = window.prompt("Enter # of columns");

// for(let i =1; i<=rows ; i++){
//     for(let j =1; j<=columns ; j++){
//         document.getElementById("myRan").innerHTML += symbol;
//     }
//     document.getElementById("myRan").innerHTML += "<br>";
// }


// function = Define code once, and use it many times.
//  to perform some code, call the function name.


// ternary operator = Shortcut for an 'if/else statement'
//                  Takes 3 operands
//                  1. a condition with ?
//                  2. expression if True :
//                  3. expression if False

// condition ? exprIfTrue : exprIfFalse


// function checkAge(age){
//     return age >= 18 ? "adult" : "child" ;
// }
// console.log(checkAge(21));

// function checkWinner(win){
//     win ? console.log("You win") : console.log("You lose");;
// }


// variable scope = where a variable is accessible

// let = variables are limited to block scope{}
// var  = variables are limited to a function(){}

// for (let i = 1; i<=3; i++){
//     console.log(i);
// }


// ********
// toLocaleString()  = returns a string with a language
//                      sensitive representation of this number

// number.toLocaleString(locale, {options});

// 'locale' - specify that language (undefined = default set in)
// 'options' = object with formatting options

// let myNum = 100;

// myNum = myNum.toLocaleString("en-Us");
// myNum = myNum.toLocaleString("hi-IN");
// myNum = myNum.toLocaleString("de-DE");

// myNum = myNum.toLocaleString("en-Us", {style: "currency", currency: "USD"});
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

// myNum = myNum.toLocaleString(undefined, {style: "percent"})

// myNum = myNum.toLocaleString(undefined, {style: "unit", unit : "celsius"})

// console.log(myNum);




// const answer = Math.floor(Math.random() * 10 +1);
// let guesses = 0;

// document.getElementById("submitButton").onclick = function (){
//    let guess = document.getElementById("guessField").value ;
//    guesses ++;

//    if(guess == answer){
//     alert(`${answer} is the correct answer. It took you ${guesses} guesses`)
//    }
//    else if(guess < answer){
//     alert ("Too small!");

//    }
//    else{
//     alert("Too large!")
//    }

// }


// document.getElementById("submitButton").onclick = function(){
//     let temp ;

//     if(document.getElementById("cButton").checked){
//         temp = document.getElementById("textBox").value ;
//         temp = Number(temp);
//         temp = toCelsius(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°C";

//     }
//     else if(document.getElementById("fButton").checked){
//         temp = document.getElementById("textBox").value ;
//         temp = Number(temp);
//         temp = toFahrenheit(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°F";

//     }
//     else{
//         document.getElementById("tempLabel").innerHTML = "Select a unit";
//     }
// }
// function toCelsius(temp) {
//     return (temp -32)* (5/9);

// }

// function toFahrenheit(temp){
//     return (temp * 9/5 )+ 32;

// }

// array = think of it as a variable that can store multiple values


// let fruit = ["apple","orange","banana"];

// fruit.push("lemon");  // add an element
// fruit.pop();  // removes last element
// fruit.unshift("mango"); // add element to beginning
// fruit.shift(); // removes element from beginning

// let length = fruit.length;
// let index = fruit.indexOf("apple");

// console.log(fruit);

// let prices = [5,10,15,20];

// for(let i = 0; i<prices.length; i++){
//     console.log(prices[i]);

// }

// let fruits = ["banana", "apple","orange","mango"];

// fruits = fruits.sort().reverse();

// for(let fruit of fruits){
//     console.log(fruit);
// }


// 2D array = An array of arrays

// let fruits = ["apples", "oranges","bananas"];
// let vegetables = [ "carrots", "onions", "potatoes"];
// let meats = ["eggs", "chicken","fish"];

// let groceryList = [fruits, vegetables, meats];

// for(let list of groceryList){
//     for(let food of list){
//         console.log(food);
//     }
// }

// spread operator ...= allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected (unpacks the elements)

// let userName = "Bro Code";
// let numbers = [1,2,3,4,5,6,7,8,9];
// console.log(...userName);

// let numbers = [1,2,3,4,5,6,7,8,9];

// let maximum = Math.max(...numbers);
// console.log(maximum);

// let class1 = ["Spongebob", "Patrick","Sandy"];
// let class2 = [ "Squidward","Mr.Krabs","Plankton"];

// class1.push(...class2)

// console.log(...class1);


// rest parameters = represents an indefinite number
// ...               of parameters
//                      (packs arguments into an array)


// let a = 1;
// let b = 2;
// let c =3;
// let d = 4;
// let e = 5;


// console.log(sum(a,b,c,d,e));


// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number
//     }
//     return total;
// }

// callback = a function passed as an argument to another function.

// let total = sum(2,3);
// displayDOM(total);
// sum (2,3, displayDOM);

// function sum(x,y){
//     let result = x+y;
//     return result
// }

// function sum(x,y, callback){
//     let result = x+ y;
//     callback(result)

// }

// function displayConsole(output){
//     console.log(output);
    
// }
// function displayDOM(output){
//     document.getElementById("myLabel").innerHTML = output;
// }


//array.forEach() = executes a provided callback function 
// once for each araray

// let students = ["spongebob","patrick", "squidward"];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index,array){
//     array[index]= element[0].toUpperCase() + element.substring(1);
// }

// console.log(students[0]);

// function print(element){
//     console.log(element);

// }


// array.map() = executes a provided callback function once for each array element AND creates a new array



// let numbers = [1,2,3,4,5,6];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube)

// cubes.forEach(print);

// function square(element){
//     return Math.pow(element,2);
// }

// function cube(element){
//     return Math.pow(element, 3)
// }

// function print(element){
//     console.log(element);
// }




// array.filter() = creates a new array with all elements that pass the test provided by a function

// let ages = [18, 16, 21,,17, 19,90];
// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function print(x){
//     console.log(x);
// }

// function checkAge(element){
//     return element >= 18;
// }



// array.reduce() = reduces an array to a single value

// let prices = [5, 10, 15,20,25];

// let total = prices.reduce(checkOut);
// console.log(`The total is ${total}`);

// function checkOut(total, element){
//     return total + element;
// }


// let grades = [100, 50, 90,60,80,70];



// grades = grades.sort(descendingSort)
// grades.forEach(print);
// function print(j){
//     console.log(j);
// }
// function descendingSort(x,y){
//     return y-x;
// }

// console.log(Math.random());

// function expression = function without a name (anonymous function) avoid  polluting the global scope with names write it, then forget about it

// let count = 0;

// document.getElementById("increaseButton").onclick = function(){
//         count ++;
//     document.getElementById("myLabel").innerHTML = count;

// }

// document.getElementById("decreaseButton").onclick = function(){
//     count--;
//     document.getElementById("myLabel").innerHTML = count;
// }

// let count =0;
// function increaseCount(){
// count ++;
// document.getElementById("myLabel").innerHTML =count;
// }

// function decreaseCount(){
//     count --;
//     document.getElementById("myLabel").innerHTML = count;
// }



// let cards = ["A","2","3","4", "5", "6", "7", "8", "9","J","Q","K"];
// console.log(cards);


// const shuffle = arr =>{
//     const temp = [];
//     let totalIndex = arr.length -1;
//     while(totalIndex >=0){

//         let randomIndex = Math.floor(Math.random() * arr.length);



//         temp.unshift(arr[randomIndex]);
//         arr.splice(randomIndex,1);
        
//         totalIndex --;
//     }

//    return temp
// }

// console.log(shuffle(cards));


// cards.pop();
// cards.shift();
// cards.fill("hello",3,4);
// console.log(cards[2]);
// cards.splice(2,1)
// console.dir(Array)





// const arr = [];

// arr[0] = "a";
// arr[3] = "bb";

// console.log(arr[1]);


// console.log(arr);





// console.log(cards);

// shuffle(cards);


// function  shuffle(array) {
//     let currentIndex = array.length;

//     while( currentIndex != 0){
//         let randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex -= 1;

//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//         // console.log(temp);
//         // console.log(array[randomIndex]);
//     }
//     return array;
// }

//     // console.log(cards);
//     // console.log(cards[2]);
//     cards.forEach( x => console.log(x))




// nested functions = functions inside other functions.
//                      Outer functions have access to inner function
//                      Inner functions are "hidden " from outside the outer function.
//                      used in closures (future video topic)


// let  userName ="Bro";
// let userInbox = 0;

// login();

// function login(){
//     displayUserName();
//     displayUserInbox();

//     function displayUserName(){
//         console.log(`Welcome ${userName}`);
//     }
    
//     function displayUserInbox(){
//         console.log(`You have ${userInbox} new messages`);
//     }
// }



// Map = object that holds key-value pairs of any data type

// const store = new Map([
//     ["t-shirt", 20]
//     ,["jeans", 30]
//     ,["socks",10]
//     ,["underwear", 50]
// ])

// let shoppingCart = 0;
// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("underwear")
// store.set("hat",80);
// console.log(store.has("jeans"));
// console.log(store.size);

// console.log(shoppingCart);

// store.forEach((value,key) => console.log(`${key} $${value}`))




// object = A group of properties and methods 
        // properties = what an object has
        //  methods = what an object can do
//         //  use . to access properties/methods

//         const car = {
//             model : "Mustang",
//             color: "red",
//             year: 2023,
//             drive: function(){
//                 console.log("You drive the car");

//             },
//             brake: function(){
//                 console.log("You step on the brakes");
//             }
//         }
// console.log(car.model
//     );

// // this = reference to a particular object the object depends on the immediate context


// const car = {
//                 model : "Mustang",
//                 color: "red",
//                 year: 2023,
//                 drive: function(){
//                     console.log(`You drive the ${this.model}`);
    
//                 },
//                 brake: function(){
//                     console.log("You step on the brakes");
//                 }
//             }
    
//             const car2 = {
//                 model: "Convette",
//                 color: "blue",
//                 year: 2024,

//                 drive: function(){
//                     console.log(`You drive the car`);
//                 }
//             }
//             console.log(car.drive());


// class = a blueprint for creating objects
//          define what properties and methods they have 
//          use a constructor for unique properties

// class Player{
//     score = 0;
//     pause(){
//         console.log("You paused the game");
//     }
//     exit(){
//         console.log("You exited the game");
//     }
// }

// const player1 = new Player();
// player1.score +=5;
// console.log(player1.score
//     );

//     player1.pause();

// constructor = a special method of a class,
//              accepts arguments and assigns properties

// class Student{
//     constructor(name,age,gpa){
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;

//     }
//     study(){
//         console.log(`${this.name} is studying`);
//     }
// }


// const student1 = new Student("Spongebob", 30, 3.2);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();


// static = belongs to the class, not the objects
//          properties: useful for caches, fixed-consiguration
        //  methods: useful for utility functions


        // class Car{

        //     static numberOfCars =0 ;
        //     constructor(model){
        //         this.model = model;
        //         Car.numberOfCars ++;
                
        //     }
        // }

        // const car1 = new Car("Mustang");
        // const car2 = new Car("corvette");
        // const car3 = new Car("BMW");
        // const car4 = new Car("helel")

        // console.log(Car.numberOfCars);


        // inheritance = a child class acan inherit all the methods and properties from another class


        // class Animal{
        //     alive = true;

        //     eat(){
        //         console.log(`This ${this.name} is eating`);
        //     }
        //     sleep(){
        //         console.log(`This ${this.name} is sleeping`);
        //     }
            

        // }

        // class Rabbit extends Animal{
           
        //     name= "rabbit";

           
        //     run(){
        //         console.log(`This ${this.name} is running`);
        //     }
        // }

        // class Fish  extends Animal{
         
        //     name= "fish";

          
        //     swim(){
        //         console.log(`This ${this.name} is swimming`);
        //     }
        // }

        // const rabbit = new Rabbit();
        // const fish = new Fish();
        // rabbit.eat();
        // fish.sleep();
        // fish.swim();
      
// super = refers to the parent class.
//          Commonly used to invoke constructor of a parent class



// class Animal {

//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

// }

// class Rabbit extends Animal{
//     constructor(name,age,runSpeed){
//         super(name,age);
//         this.runSpeed = runSpeed;

//     }

// }
// class Fish extends Animal{
//     constructor(name,age,swimSpeed){
//         super(name,age);
//         this.swimSpeed = swimSpeed;
//     }

// }
// class Hawk extends Animal{
//     constructor(name,age, flySpeed){
//         super(name,age);
//         this.flySpeed = flySpeed;
//     }

// }

// const rabbit = new Rabbit("rabbit", 1, 40);
// const fish = new Fish("fish",3, 80);
// const hawk = new Hawk("hawk",3, 800);

// console.log(rabbit.name);
// console.log(fish.age);
// console.log(hawk.flySpeed);

// get = binds an object property to a function 
//      when that property is accessed


//set = binds an object property to a function
//      when that property is assigned a value

class Car{
    constructor(power){
        this._gas = 25;
        this.pow = power;

    }
    get power(){
        return `${this.pow} hp`
    }
    get gas(){
        return `${this._gas} L  (${this._gas / 50 * 100} %)`
    }
    set gas(value){if(value >= 50){
        this._gas =50;
    }else if (value <=0){
        this._gas = 0;
    }

        

    }
}

let car = new Car(400);
car.power = 1222;
console.log(car.power);
car.gas = -5665;
console.log(car.gas);












