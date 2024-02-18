// ----------------------TypeScript - Declaration Types ------------------------

// let age = 20;

// const nam: string = "Outmane";

// let arr: number[] = [1,2,3,4,5]
// let arrStr: string[] = ["hello", "world"];
// let  arrMixed: (string | number | boolean)[] = [1,"Hello",true];
// let  arrMixed2: any[] = [1,"Hello",true];



// console.log(`Hello, my name is ${nam} and I am ${age} years old.`);
// arrMixed.forEach((item) => console.log(item));


// ----------------------TypeScript - Tuples ------------------------

// let x: [string , number] = ['Outmane',20];
// let y: (string | number)[] = ['Outmane',30,50,20];   // union 

// y.push('oukkoua');

// x.push(50); // Error

// y.forEach((item)=>{console.log(item)});

// x.forEach((item)=>{console.log(item)});

// -----------------------Functions ----------------------------------

// const f = () => {
//     console.log('Helo World!');

//     return 20;
// };

// const v: (x: number, y: number) => number = (x,y) =>{
//     return x + y ;
// };

// const z = (x:string , y:number) => {
//     return ['hello',true];
// }

// const w = (x,y) => {
//     return ['hello',true];
// }


// f();
// console.log(v(5,8));


// -------------------- interfaces -----------------------------------------

// interface  Person {
//     name : string
//     age? : number
// }

// let p1: Person

// p1 = {
//     name : 'outmane',
//     age : 20
// };

// p1.name = "Ali";
// console.log(`name : ${p1.name} and age : ${p1.age}`);

// const n = p1.age
// const n1: number = p1.age! // this will give error if there is no value in the property age
// const n2: number = p1.age ?? 0 


// --------------------------
// let x: (string | number) = 20
// let y: (string | number) = 30
// let z: (string | number) = 25
// ---------------------------

// type MyType = string | number ;

// let x: MyType = 20
// let y: MyType = 30
// let z: MyType = 25

// type MyType1 = {
//     name : string
//     age : number
// } ;

// let x:MyType1 = {
//     name : 'abc',
//     age : 212
// }

// ----------------------------------------------------------------

// enum BookingStatus {
//     initial = 'initial',
//     paid = 'paid',
//     cancelled = 'cancelled'
// }

// let bookingStatus = "initial" ;

// bookingStatus = "paid"  ;

// if(bookingStatus === "paidd"){
//     console.log("Booking paid, deduct  amount from wallet");
// }


// let bookingStatus:BookingStatus = BookingStatus.initial;

// bookingStatus = BookingStatus.paid ;

// if(bookingStatus === BookingStatus.paid){
//     console.log("Booking paid, deduct  amount from wallet");
// }


// ------------------------- OOP ------------------------------


// interface Icar{
//     name : string;
//     model : number ;
//     seyHallo: () => void;
// }

// class Car  implements Icar{

//     seyHallo = () => {
//         console.log('hello world!')
//     }
//     name : string;
//     model : number ;

//     constructor(name :string , model :number ){
//         this.name = name;
//         this.model = model;

//     }

// }

// let  myCar = new Car('Audi A8' ,401);
// console.log(`The car ${myCar.name} is a ${myCar.model}-series` );


//------------------ generics -------------------------------------

// const sum = <T extends number>(number1: T, number2: T) => {
//     return number1 + number2;
// }

// const result = sum<number>(3, 5);
// console.log(result);


// ---------------------- generate key----------------------------

// interface Person{
//     [key:string]: any
// }

// const obj:Person = {
//     name : 'outmane',
//     age : 20
// }

// obj.birthday =  "26/09/1997";
// console.log(obj)


// ----------------------- typescript utilies 'inheritence'-----------------------

interface User{
    name : string ;
    age : number ;
    emeil : string ;
    password : string ;
}

interface Robot{
    nameRobot : string ;
    reference? : string ;
}

// 1)  ------------------ Omit -----------------

interface UserWithOutNameAndAge extends Omit<User, 'name' | 'age'> {}

const userInfo: UserWithOutNameAndAge = {
    emeil : 'gh' ,
    password : 'abcd',
    // name : 'outmane' //ERROR! because we are trying to assign value for a property that does not exist in the type
}

// 2)  ------------------ Pick -----------------

interface UserWithOnlyNameAndPassword extends  Pick<User, 'name' | 'password'>{}

const userNP:UserWithOnlyNameAndPassword = {
    name : 'oumane' ,
    password : 'abcdef'
}


// 3) ----------------- Partial -----------------

interface OptionalUser extends Partial<User>{}

const userOp:OptionalUser = {
    name : 'jjjjjj',
    age : 20 
    // can use all property of the interface but not necessary to fill them all
}


// 4) --------------- Required ------------


interface RequiredRobot extends Required<Robot>{}

const robotRq: RequiredRobot= {
    nameRobot : 'alexa',
    reference : "ref305547bf32"  //  this field is required so we must put it in our object
}


// ------------------- TYPES ------------------------------

type PersonT = {
    name : string ;
    age : number ;
    emeil : string ;
    password : string ;
}

type CarT = {
    nameCar : string ;
    color? : string ;
}

type PersonWithOutName = Omit<PersonT ,'name'>;   // remove the 'name' from type PersonT

type PersonWithCar = PersonT & CarT ;

const PC: PersonWithCar = {
    name : 'outmane oukkoua',
    age : 20,
    emeil : "azerty@gg.com",
    password : '123456',
    nameCar : 'mustang',
    color : 'red'
};




// ---------------------------- || asynchronous function || --------------------------------

const myFunction = async () => {
    return "hello world!";
};

const myFunction2 = () => {
    return new Promise<string>((resolve,reject) => {
        resolve('hello world!')
    });
};

// const x = await myFunction();