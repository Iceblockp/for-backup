
// interface Person {
//     name?: string;
//     age?: number;
//     gender?: string;
// }

// const shin: Person = {};


// const terry : Required<Person> = {
//     name: "Terry",
//     age: 19,
//     gender: "male",
// };
// console.log(terry);



// const Person: Record<string | number, number| boolean | string> = {
//     name: "Terry",
//     age: 20,
//     gender:"male",
//     boolean: false,
//     2: "Hello"
// }

// need Omit ,Pick, Readonly


// const person : Readonly<Person> = {
//     name: "Terry",
//     age: 23,
//     gender: "male"
// }
// person.name = "hello";




/*

Partial : Optional
Required: Required
Record: Define Key Value
Omit: Remove type
Pick: Specified Keys
Readonly: Readonly

*/

// const arr: readonly (string | number)[] = ["Hello","MIn ga lar par", "What",1];

// // arr.push("Hello world");

// type Person = {
//     name: string;
//     age: number;
//     gender?: "male" | "female";
// };
// // const data: Person[] = [
// //     {name:"Terry", age: 20 ,gender:"male" },
// //     {name: "Shin", age: 20 ,gender:"male"}
// // ];

// const arr: [string,number,string,boolean,Person] = ["hello",32,"Come on",false,{name:"Terry",age:20}];

// // arr.push("doing");
// console.log(arr);


//any

// let age = 18;
// age = "hello";


// never & void;

// const printer = (): never => {
//    while(true){
//     console.log("ok");
//    };
//     console.log("come");
// }
// printer();

// enum Gender {
//     male=2,female,other,
// }

// type Person = {
//     name: string;
//     gender: Gender;
// };

// const Terry : Person = {
//     name: "Terry",
//     gender: Gender.female
// }
// console.log(Terry.gender);

// let arr : ( number[] | string);

// arr = [1,2,3];

// console.log(arr);

// let x : unknown = "String";

// console.log((x as string).charCodeAt(0));

// type funer = (x:number,y:number) => void;

// const sum = (x:number,y:number):number => {
//     return x+y;
// };

// let calc: funer = sum;
// console.log(calc(1,5));


// interface Person {
//     name?: string;
//     gender?: string;
// }

// const shin: Person ={};

// const terry : Partial<Person> = {};

// const shin: Person ={};

// const terry : Required<Person> = {
//     name: "TERRY",
//     gender: "male"
// };

// const Person : Record<string | number,number |string | boolean > ={
//     name:"Terry",
//     age: 12,
//     gander: "male",
//     gf: false,
// }

interface Person {
    name: string;
    age: number;
    gender: string;
}

const shin: Person ={
    name: "Shin",
    age: 20,
    gender: "male",
};

const terry : Omit<Person,"age"> = {
    name:"Terry",
    gender: "male",
}

const One : Pick<Person ,"age"> = {
    age:20,
}




