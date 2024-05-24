//arrow function
// () => {}  , (parameters)

// const addTwo = (num1 , num2) => {
//     return num1 + num2

// }
// console.log(addTwo(6,7));

//implicit return -> remove {} and assume and not use return  
// const addTwo = (num1 , num2) =>   num1 + num2

// const addTwo = (num1 , num2) =>  ( num1 + num2)
 
//use {objects } in inmplicit return
const addTwo = (num1 , num2) =>  ( {username : "ashish"})
   
console.log(addTwo(6,7));