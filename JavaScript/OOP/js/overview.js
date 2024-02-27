console.log('JS OOP');

// class vs object
//classes - template of object
// Human - name,dob, gender
// st1 = name: mgmg, bod : 1995, gender: male

//this

// const obj = {
//     a : "aaa",
//     b : "bbb",
//     x(){
//         return this.a
//     }
// }

// class Person{
//     // name;
//     // dob;
//     // gender;
//     constructor(inputName, inputDob, inputGender ){
//         //data initialize
//         this.name = inputName;
//         this.dob = inputDob;
//         this.gender = inputGender;
//         this.namePrefix = this.gender === "male" ? "Mg":"Ma";
//         this.age = 2023 - this.dob;

//     }
//     intro(){
//         // my name is hein htet zan and I was born in 1994
//         return `My name is ${this.namePrefix} ${this.name} and I was born in ${this.dob}`
//     }


//     eat(){
//         return "person can eat"
//     }
//     sleep(){
//         return "Person can sleep"
//     }
// }

// class student extends Person  {

//     constructor(inputName,inputDob,inputGender,inputMajor,inputSubject){
//         super(inputName,inputDob,inputGender);
//         this.major = inputMajor;
//         this.subjects = inputSubject;
//     }

// }
// const st1 = new student("Zaw Zaw",1996,"male","web",["html","css","js"])
// console.log(st1);

// const st2 = new student("Mya Mya",2000,"female","android",["java","kotlin",])


// class Monitor extends student {
//     constructor(inputName,inputDob,inputGender,inputMajor,inputSubject,roomNo){
//         super(inputName,inputDob,inputGender,inputMajor,inputSubject);
//         this.roomNo = roomNo;
//     }
// }


// console.log(st2);

//class => obj (instantiate) instance build
// method
// console.log(Person.eat());

// const p1 = new Person('Mg Mg','1995','male');
// console.log(p1);

// const p2 = new Person('Su Su','2005','female')
// console.log(p2);

// const p3 = new Person('Shin Shin','1999','female');
// console.log(p3);

// console.log(p2.intro());




// data pay , data initialize
// p1.name = "Kyaw Kyaw";
// p1.dob = "1995-5-14";
// p1.gender = "male"
// console.log(p1);
// console.log(p1.eat());
// console.log(p1.sleep());


// const p2 = new Person;
// p2.name = "su su"
// p2.dob = "2001-4-24";
// p2.gender = "female";

// console.log(p2);

// console.log(Person);




// OOP - access modifier


// class Sample {
//     a = "aaa";
//     #x = "xxx";

//     b(){
//         return "b method"

//     }
//     #y(){
//         return "y method"
//     }
// }

// const sample = new Sample;
// console.log(sample);
// console.log(sample.a);
// console.log(sample.#x);
// console.log(sample.b());
// console.log(sample.#y());

// Encapsulation 


class BankAccount {
    #balance = 0;
    #transition = [];
    #transitionIndex = 0;

    // getter, setter

    checkTransition(){
        return this.#transition;
    }

    checkBalance() {
        return this.#balance;
    }

    deposit(amount) {
        this.#transition[this.#transitionIndex++] =`U deposit ${amount}`
        this.#balance += amount;

    }

    withdraw(amount) {

        if(amount <= this.#balance){
            this.#transition[this.#transitionIndex++] = `U withdraw ${amount}`
        return this.#balance -= amount;

        }
        this.#transition[this.#transitionIndex++] = `Not enough amound`;
        return "Not enough amount";
    }



    constructor(owner, phone) {
        this.owner = owner;
        this.phone = phone;
        this.accountNumber = this.owner + this.phone;
    }

}
const myBankAccount = new BankAccount("HHZ", "09123354");

// myBankAccount.deposit(1000);
// myBankAccount.deposit(500);
// myBankAccount.deposit(2500);
// myBankAccount.withdraw(250);
// myBankAccount.withdraw(1200);

// myBankAccount.withdraw(7000);

// console.log(myBankAccount.checkBalance());
// console.table(myBankAccount.checkTransition());





class C {
   static a = "aaa";

    b = "bbb";

  static  x(){
        return "x method";
    }

    y(){
        return "y method";
    }
}

console.dir(C);

console.log(C.a);
console.log(C.x());

// console.log(C.b);
// console.log(C.y());

// const c = new C;
// console.log(c);
// console.log(c.a);

