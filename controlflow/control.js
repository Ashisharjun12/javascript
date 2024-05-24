//Control flow in javascript
//if
//  if(true){

//  }
const isLoggedIn = true

 if(isLoggedIn){

 }
 //comparision : < ,> , <= ,>= , == , != ,!== ,===(triple equal also check type)

 const temp = 40

 if(temp == 50){
    console.log("temp is less than 50");
 } else{
    console.log("temp is greater than 50");
 }
 console.log("executed");

//  const score = 200

//  if(score>100){
//     const power = "fly"
//     console.log(`power is : ${power}`);
//  }
// //  console.log(`power is : ${power}`);
const balance = 1000

// if(balance<500){
//     console.log("less than 500");
// }else if(balance<700){
//     console.log("less than 700");
// }else if(balance < 1000){
//     console.log("less than 1000");
// }else{
//     console.log("less than 1200");
// }


//intermidate conditions(in real life)
//&& -> (AND) both condition true or false
// || ->(OR) yaah to 1st yaa 2nd

const  userLoggedIn = true
const debitCard = true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard){
    log("allow to buy courses")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}
