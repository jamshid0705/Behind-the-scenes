'use strict';

//////////// scoping in practice ////////////////
// function information(birtYear){
//   const age=2023-birtYear
//   console.log(`${firstname} is ${age} years old !`)

//   function fullname(){
//     const lastname='Xatamov'
//     console.log(firstname,lastname)

//     if(age>=20){
//       var win='You win !'
//       // console.log(win)
//       function a(a,b){
//         console.log(2+9)
//       }
//     }
//     console.log(win)
//     // a()
//   }
//   fullname()
//   // console.log(lastname)
// }
// const firstname = 'Jamshid';
// information(2000)

/////////////// Hoisting and TDZ in practice ///////////////
// variables
// console.log(varExam)
// console.log(letExam)
// console.log(constExam)

// varExam='var'
// let letExam='let'
// const constExam='const'
// console.log(varExam)
// console.log(window)

// functions
// console.log(dec(2,9))

// function dec(a,b){
//   return a+b
// }

// ex=function(a,b){
//   return a+b
// }

// const arrow=(a,b)=>a+b
// console.log(ex(3, 8));
// console.log(window);
// console.log(window.this)

//////////// this keyword /////////////
// function
// console.log(this)
// const a=()=>{
//   console.log(this)
// }
// a()

// // faqat arrow functionda this otasiga murojat qila oladi
// const b=()=>{
//   console.log(this)
// }
// b()

// function c(){
//   console.log(this)
// }
// c()
// objects
// const jamshid = {
//   year: 2023,
//   calcage: function () {
//     console.log(this);
//     console.log(this.year-2000)
//   },
// };
// jamshid.calcage();

/////////////////// regular and arrow functions ////////////////
// var firstName = 'jamshid';
// const obj = {
//   firstName: 'Jamshid',
//   age: 23,
//   fullname: function () {
//     console.log(`Xatamov ${this.firstName}`);
    
//     // regular function
//     const a = obj;
//     const isMillenial=function(){
//       console.log(a)
//       console.log(a.age)
//     }
//     isMillenial()

//     // arrow function
//     const isMillenial1=()=>{
//       console.log(this)
//       console.log(this.age)
//     }
//     isMillenial1()
//   },
//   obj1: {
//     firstName: 'shamshod',
//     obj2: {
//       information: () => {
//         console.log(`${this.firstName} is ${this.age}`);
//         console.log(this);
//       },
//     },
//   },
// };

// obj.fullname();
// obj.obj1.obj2.information();

/////////////////// primitives and objects /////////////////

let obj1={
  name:"jamshid",
  age:22
}

let obj2=obj1
obj2.name="shamshod"
obj2.fullname="xatamov jamshid"
console.log('obj2',obj2)
console.log("obj1",obj1)
obj2={
  fullname:'xatamov jamshid'
}
console.log(obj2)

// copying objects 
const jamshid={
  name:'jamshid',
  fullname:'xatamovjamshid',
  age:22,
  family:['jamshid',"shamshod",'xurshid']
}

const shamshod=Object.assign({},jamshid) // objectdan copy olib yangi joy va adress ochadi heap dan
shamshod.name='shamshod',
shamshod.fullname='xatamovshamshod',
shamshod.age=17,
shamshod.family=['shamshod'] // lekin push qilinsa ikkalasiga ham qo'shiladi
console.log(jamshid)
console.log(shamshod)