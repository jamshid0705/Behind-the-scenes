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
// const a=function(){
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
const jamshid = {
  year: 2023,
  calcage: function () {
    console.log(this);
    console.log(this.year-2000)
  },
};
jamshid.calcage();
