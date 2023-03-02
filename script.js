'use strict';

// scopes
function information(birtYear){
  const age=2023-birtYear
  console.log(`${firstname} is ${age} years old !`)

  function fullname(){
    const lastname='Xatamov'
    console.log(firstname,lastname)

    if(age>=20){
      var win='You win !'
      // console.log(win)
      function a(a,b){
        console.log(2+9)
      }
    }
    console.log(win)
    // a()
  }
  fullname()
  // console.log(lastname)
}
const firstname = 'Jamshid';
information(2000)
