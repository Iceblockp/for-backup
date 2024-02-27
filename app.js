console.log("App JS")
// const myName = "Pyae Phyo Nyo";
// let age = 21;

// console.log(`My name is ${myName} and ${age} years old.`);

// let x=5;
// console.log(x);


// function triangle() {
//     console.log(`*`);
//     console.log(`* *`);
//     console.log(`* * *`);
//     return "triangle function";
//     console.log(`hello, I'm here`);
// }

// console.log(triangle());

// triangle()
// triangle()
// triangle()
// triangle()

// function run(x=0,y=0){
//     return x+y;
// }

// console.log(run(5,10));
// console.log(run(10,20));
// console.log(run(5,7));
// console.log(run());

// function plus(x=0,y=0){
//     console.log(x+y);
// }
// plus(5,8)
// plus(12,8)
// plus()

// const records = [];
// let recordIndex =0;

// function roomArea(width,breadth){
//     const result = width * breadth + ` Sqft`;
//     records[recordIndex++] = {
//         width : width + "ft",
//         breadth : breadth + "ft",
//         result
//     }
//     return result;
// }
// console.log(roomArea(18,60));
// console.log(roomArea(20,50));
// console.log(roomArea(40,30));
// console.log(roomArea(90,60));

// console.table(records);

// //usd (exchange rate) to mmk
// let usd = 2100;
// let sgd = 1534;
// let eur  =2210;

// function fromUsdToMmk(amount = 0){
//     return amount * usd + ` mmk`;
// }
// function fromSgdToMmk(amount = 0){
//     return amount * sgd + ` mmk`;
// }
// function fromEurToMmk(amount = 0){
//     return amount * eur + ` mmk`;
// }

// console.log(fromUsdToMmk(300));
// console.log(fromSgdToMmk(300));
// console.log(fromEurToMmk(300));


// // 500000 mmk to usd?

// // function fromMmkToUsd(amount = 0){
// //     return amount / usd + ` USD`;
// // }
// // function fromMmkToSgd(amount = 0){
// //     return amount / sgd + ` SGD`;
// // }
// // function fromMmkToEur(amount = 0){
// //     return amount / eur + ` EUR`;
// // }

// // console.log(fromMmkToUsd(500000));
// // console.log(fromMmkToSgd(500000));
// // console.log(fromMmkToEur(500000));
// // console.log(fromMmkToSgd());

// let apple = 500;
// let orange = 700;
// let total = 0;

// function buyApple(quantity = 0){

//     const cost = apple * quantity ;
//     total+=cost;
//     return `Apple * ${quantity} = ${cost} mmk`;
// }
// function buyOrange(quantity = 0){
//     const cost = orange * quantity;
//     total+=cost;
//     return `Orange * ${quantity} = ${cost} mmk`;
// }
// function costTotal(){
// return `Cost Total = ${total} mmk`
// }
// function calcTax(totalAmount,percent = 5){
// return totalAmount * percent/100;
// }
// function tax(percent = 5){
//     return `Tax = ${calcTax(total,percent)} mmk`
// }
// function netTotal(){
//     return `Net Total = ${calcTax(total,10) + total} mmk`
// }



// console.log(buyApple(4));
// console.log(buyOrange(3));
// console.log(costTotal());
// console.log(tax(10));
// console.log(netTotal());





// let car = 5000;
// let bike = 3500;
// let totalCost = 0;

// function buyCar(amount = 0){
//     const cost = car * amount;
//     totalCost += cost;
//     return `Car * ${amount} = ${cost} mmk`;
// }

// function buyBike(amount = 0){
//     const cost = bike * amount;
//     totalCost += cost;
//     return  `bike * ${amount} = ${cost} mmk`;
// }
// function totalBill(){
//     return `Total Bill = ${totalCost} mmk`;
// }
// function taxCalc(totalAmount,percentage = 5){
//     return totalAmount * percentage/100;
// }
// function yinTax(percentage = 5){
//     return `Tax =  ${taxCalc(totalCost,percentage)} mmk`
// }
// function billTotal(){
//     return `Total Bill = ${totalCost + taxCalc(totalCost,10)}`
// }


// console.log(buyCar(7));
// console.log(buyBike(5));
// console.log(totalBill());
// console.log(yinTax(10));
// console.log(billTotal());



// JavaScript Array

// const shop = ["apple","orange","mango"];

// console.log(typeof shop);
// console.log(shop);

// shop[0] = "banana";
// shop[3] = "lime";
// shop[4] = "lemon";
// shop[6] = "pupple"

// console.log(shop [0]);
// console.log(shop [1]);
// console.log(shop [2]);
// console.log(shop [3]);
// console.log(shop);



// const arr= [];

// arr[0] = "a"
// arr[1] = "b"
// arr[2] = "c"
// arr[4] = "d"

// arr[7] = "e"


// console.log(arr);
// console.log(arr.length);

const mySelf = {
    name : "hein htet zan",
    age  : 29,
    township : "hlaing",
    job : "developer",
    relationshipStatus : false,
}

// console.log(mySelf);
// console.log(typeof mySelf);
// console.log(mySelf.age);

// console.log(`My name is ${mySelf.name} and ${mySelf.age} years old ${mySelf.job} from ${mySelf.township}`);

mySelf.name = "Ko Htet";
mySelf.netWorth = ["bahan home", "Hledan condo" , "MMS IT"]

// console.log(mySelf.name);
// console.log(mySelf["name"]);
// console.log(mySelf);

// const obj ={};

// obj.a ="x";
// obj.b= "y";
// obj.c ="z";
// console.log(obj);

// console.log([]);
// console.log({});


// const name = "mg mg";
// let age = 15;
// let township = "kyauk myaung";
// let pocketMoney = 200;
// let orangePrice = 50;

// pocketMoney-=orangePrice

// console.log(pocketMoney);


// const bag=["mm book","eng book","bio book"];

// console.log(bag);

// const Bag = {
//     mmBook : true,
//     engBook : true,
//     bioBook : true,
//     pen : false
// }
// console.log(Bag);
// console.log(Bag.pen);

// let canMgMgFriSmoke = true;
// let canMgMgSmoke = false;

// console.log(canMgMgFriSmoke);
// console.log(canMgMgSmoke);


// // const info = {
// //     name : "mg mg",
// //     age : 15,
// //     township : "kyauk myaung",
// //     pocketMoney : 200,
// //     isHeSmoke : false
// // }

// const mgMgInfo = {
//     name,
//     age,
//     township,
//     pocketMoney,
//     isHeSmoke : canMgMgSmoke
// }
// console.log(mgMgInfo);

// const kyawInfo ={
//     name : "kyaw kyaw",
//     age : 18,
//     township : "hlaing",
//     pocketMoney : 1500,
//     isHeSmoke : true
// }

// const suInfo = {
//     name : "su su",
//     age : 17,
//     township : "sanchaung",
//     pocketMoney : 2000,
//     isHeSmoke : true
// }

// console.log(mgMgInfo,suInfo,kyawInfo);


// const students = [mgMgInfo,kyawInfo,suInfo];
// console.log(students);
// console.table(students);


// const rates = {
//     usd : 2100,
//     sgd : 1530,
//     eur : 2210
// }

// 200usd to ?mmk
// 450sgd too ?mmk
// 15eur to ?mmk

// function toMmk(amount,currency){
//     const exchangeRate = rates[currency];
//     const result = amount * exchangeRate;
//     return result + "mmk";
// }

// console.log(toMmk(200,'usd'));
// console.log(toMmk(450,"sgd"));
// console.log(toMmk(15,'eur'));


// 500000 mmk to ?usd
// 700000 mmk to ?sgd
// 300000 mmk to ?eur

// function toCurrency(mmkAmount,currency){
//     const exchangeRate = rates[currency];
//     const result = mmkAmount / exchangeRate;
//     return `${result} ${currency}`
// }
// console.log(toCurrency(500000,'usd'));
// console.log(toCurrency(700000,'sgd'));
// console.log(toCurrency(300000,'eur'));


//homework
//500 usd to ?sgd
// 100000 mmk to ?eur
// 30 eur to ?sgd
//100 sgd to ? eur
// any currency to any currency
//record keeping

// total amount(if you want)

// const rates = {
//     usd : 2100,
//     sgd : 1530,
//     eur : 2210,
//     mmk : 1
// }
// const record = [];
// let recordIndex = 0;

// function change(from,to,amount){
//     const exchangeRate = rates[from] / rates[to];
//     const result = amount * exchangeRate;

//    record[recordIndex++] = {
//     from,
//     to,
//     amount : `${amount} ${from}`,
//     result : `${result} ${to}`
//    }
//     return `${result} ${to} `;
// }

// console.log(change('usd','mmk',5));
// console.log(change('usd','sgd',500));
// console.log(change('mmk','eur',100000));
// console.log(change('eur','sgd',30));
// console.log(change('sgd','eur',100));
// console.log(change('usd','eur',655));


// console.table(record);







// const fruits = {
//     apple : 500,
//     orange : 700,
//     mango : 1000,
//     banana : 200
// }

// const transitions = [];
// let transitionIndex = 0;
// let total =0;


// function buy(item,quantity){
//     const price = fruits[item];
//     const cost = price * quantity;
//     total += cost;

//     transitions[transitionIndex++] = {
//         item,
//         price,
//         quantity,
//         cost
//     }
//     return cost;

// }
// function calcTax(total,percent=5){
//     return total * percent/100;
// }

// console.log(buy('apple',5));
// console.log(buy('orange',3));
// console.log(buy('mango',2));
// console.log(buy('banana',15));

// console.table(transitions);
// console.log("total ", total);
// console.log("tax", calcTax(total));
// console.log("Net Total" , calcTax(total) + total);

const obj = {
    a : "aaa", //properties (information)
    b : "bbb",
    c : "ccc",

    // method (behavior)
    //es 5 and early
    d : function(){
        return `This is d`
    },
    //es6 and above
    e(){
        return `This is e`
    }

}

// console.log(obj);
// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);
// console.log(obj.d);
// console.log(obj.d());
// console.log(obj.e());

const myObj = {
    //properties
    name : "hein htet zan",
    age : 29,
    township : "hlaing",
    job : " developer",

    //methods
    teach(){
        return `${this.name} can teach web development`;

    },
    eat(){
        return `${myObj.name} can eat everything`;
    },


};

//property access
// myObj.name = "Lee min ho";
// console.log(myObj);

// //method invoke
// console.log(myObj.teach());
// console.log(myObj.eat());


// const run = function(x,y){
//     return x + y;
// }
// console.log(run(5,8));


// (function(){
//     console.log("I'm IIFE");
// })()


// (function(){
//     `something ${}`
// })()

// function run(){
//     let x=5;
//     console.log(x);
// }
// run()

// let x = 5;
// {
//     console.log(x);
// }
// function run(){
//     console.log(x);
// }
// run();

// {
//     function x(){
//         return "X";
//     }

// }

// console.log(x());



// hoisting
// console.log(x);
// const x = 5;

// console.log(y());
// function y(){
//     return "Y";
// }

// console.log(z());
// const z = function(){
//     return "z";
// }

// const x = [];
// const y = {};

// const z = x;
// console.log(z);

// x[0] = "a";
// x[1] = "b";

// console.log(z);

// let pocketMoney = 10500;

// pocketMoney > 5000 ? console.log("watch movie") : console.log("go to school");

// console.log("abbgc" ? true:false);
// console.log("" ? true:false);
// console.log("  " ? true:false);
// console.log(null ? true:false);
// console.log(undefined ? true:false);
// console.log(-0 ? true:false);
// console.log(0n ? true:false);
// console.log(NaN ? true:false);
// console.log(false ? true:false);
// console.log(true ? true:false);
// console.log({} ? true:false);
// console.log([] ? true:false);
// console.log(42 ? true:false);
// console.log('0' ? true:false);
// console.log( "false" ? true:false);
// console.log( new Date() ? true:false);
// console.log( 1.24 ? true:false);
// console.log( -32.45 ? true:false);
// console.log( Infinity ? true:false);
// console.log( -Infinity ? true:false);


// if(false){
//     console.log("I'm true");
// }
// else{
//     console.log("I'm false");
// }

// const wakeUpTime = 8;

// if (wakeUpTime>=8){
//     console.log("Kyine Lone na yight...");
// }
// else{
//     console.log("Aye say pal");
// }

// const pocket = 1000;
// const busFee = 300;

// if(pocket >= busFee * 2){
//     console.log("Go to school with bus");
// }
// else{
//     console.log("Go to school by walk");
// }
// const classStartTime = 10;
// const currentTime = 11;

// if(currentTime> classStartTime){
//     console.log("teach");

// }
// else{
//     console.log("wait");
// }

// const mark = 20;

// if(mark >= 80){
//     console.log("distinction");
// }
// else if (mark >= 40){
//     console.log("passed");
// }
// else if(mark < 40){
//     console.log("fail");
// }

// function result(mark){
//     if(mark >= 80){
//             return("distinction");
//         }
//         else if (mark >= 40){
//             return("passed");
//         }
//         else if(mark < 40){
//             return("fail");
//         }
    
// }

// console.log(result(82));
// console.log(result(20));
// console.log(result(70));


// function requestPocketMoney(amount,busFee=300){
//     if(amount>busFee * 2){
//         return "It is enough to go to school with bus";
//     }
    
//         return "By walk";
        
    

// }
// console.log(requestPocketMoney(500));
// console.log(requestPocketMoney(1500));


// function canPassed(exammark,vipermark){
//     if(exammark >= 60 && vipermark >= 60){
//         return "U can join our University";
//     }
// return "You can't join";
    
// }

// console.log(canPassed(75,30));
// console.log(canPassed(75,60));
// console.log(canPassed(67,76));

// function canVote(nrcType,age){
//     if(nrcType === "N" && age>=18){
//         return "YOu can vote";
//     }
//     return "You can't vote";
// }

// console.log(canVote("N",3));
// console.log(canVote("N",13));
// console.log(canVote("N",23));
// console.log(canVote("M",25));
// console.log(canVote("F",25));

// function bus(no){
//     if(no === 65 || no===20){
//         return "You will reach MMS IT Kyawk Myaung";
//     }
//     return "You will not reach";
// }

// console.log(bus(65));
// console.log(bus(68));
// console.log(bus(21));
// console.log(bus(20));

// console.log(!!!!!trues);


// for(let i=1; i<=5;i++){
//     console.log('*');
//     console.log('* *');
//     console.log('* * *');
// }

//1 to 10

// for(let i=1; i<=10; i++){
// console.log(i);
// }

// for(let i=1; i<=10; i+=2){
// console.log(i);
// }

// for(let i=10; i<= 100; i+=10){
//     console.log(i);
// }

// for(let i=1; i<=10; i++){
//     console.log("code block", i);
//     if(i===5){
//         break;
//     }
// }

// for(let i=1; i<=10; i++){
//     if(i===5){
//         continue;
//     }
//     console.log("code block", i);
// }

const fruits =["apple","banana","mango","Lime","Lemon","Orange","PineApple"];


const chars = {
    a: "char a",
    b: "char b",
    c: "char c",
    d: "char d"
}
console.log(chars);

for(let key in chars){
    console.log(key, chars[key]);
}

// for(let i=0; i<fruits.length ; i++){
//     console.log(i, fruits[i]);
// }

// for(let fruit of fruits){
//     console.log(fruit);
// }

// for(let fruit in fruits){
//     console.log(fruit, fruits[fruit]);
// }













