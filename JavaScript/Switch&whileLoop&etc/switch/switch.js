// const action = "say_hi";
// switch (action) {
//     case "say_hello": {
//         const message = "hello";
//         console.log(message);
//         break;
//     }


//     case "say_hi": {
//         const message = "hi";
//         console.log(message);
//         break;
//     }
//     default: {
//         console.log("Empty action received.");
//     }
// }



// let expr = "Papayas"
// switch (expr) {
//     case "Oranges":
//         console.log("Oranges are $0.59 a pound.");
//         break;
//     case "Apples":
//         console.log("Apples are $0.32 a pound.");
//         break;
//     case "BAnanas":
//         console.log("Bananas are $0.48 a pound.");
//         break;
//     case "cherries":
//         console.log("Cherries are $3.00 a pound.");
//         break;
//     case "Mangoes":
//     case "Papayas":
//         console.log("Mangoes and papayas are $2.79 a pound");
//         break;
//     default:
//         console.log(`Sorry,we are out of ${expr}`);
// }
// console.log("Is there anything else you'd like?");



// const foo = 5;
// switch (foo) {
//     case 2:
//         console.log(2);
//         break;
//     default:
//         console.log("default");
//         break;
//     case 1:
//         console.log("1");
// }



// const foo = 1;
// let output = "Output: ";
// switch (foo) {
//     case 0:
//         output += "So ";
//     case 1:
//         output += "What ";
//         output += "Is ";
//     case 2:
//         output += "Your ";
//     case 3:
//         output += "Name ";
//     case 4:
//         output += "? ";
//         console.log(output);
//         break;
//     case 5:
//         output += "!";
//         console.log(output);
//         break;
//     default:
//         console.log("Please pick a number from 0 to 5!");
// }


// let n = 0;
// while (n<3){
//     n++;
   
// }
// console.log(n);


// let n=0;
// let x=0;

// while (n<3){
//     n++;
//     x+=n;
// }
// console.log(x);



// class Polygon {
//     constructor(height, width){
//         this.area = height * width;

//     }
// }
// let p1 = new Polygon(5,8);
// console.log(p1.area);


// class Rectangle {
//     constructor(height,width){
//         this.name = "Rectangle";
//         this.height = height;
//         this.width = width;
//     }
// }

// class FilledRectangle extends Rectangle {
//     constructor(height, width ,color) {
//         super(height ,width);
//         this.name = "Filled rectangle";
//         this.color = color;
//     }
// }

// console.log(new Rectangle(8,3));
// console.log(new FilledRectangle(8,3,"blue"));



// const Rectangle = class {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
//     area(){
//         return this.height * this.width;
//     }
// };
// console.log(new Rectangle(3,4).area());


// let result = '';
// let i = 0;

// do{
//     i = i +1;
//     result = result + i;
// } while (i < 5);

// console.log(result);


// let result = "";
// let i = 0; 
// do {
//     i += 1;
//     result += `${i}`;
// }
// while (i> 0 && i<5);

// console.log(result);




