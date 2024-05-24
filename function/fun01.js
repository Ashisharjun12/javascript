//Functions and parameter 


function myName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
}

//myName();//myName-> referance , ()-> excutation

//add two numbers
// function add(num1,num2){
//     console.log(num1 + num2);
// }
function add(num1,num2){
    // let result = num1 + num2
    // return result

    return (num1 + num2);
}

const result = add(3 ,5)
// console.log("result :", result);
add(3 ,"5")
add(3 ,"a")

// intermidiate
function loginUser(username = "ashish"){

    if (!username) {
        console.log("please enter your username");
        return//after using return below code not run
    }
   return ` ${username} just loggedIn` 
     
}

// console.log(loginUser("ashish"));
console.log(loginUser("msdhoni"));//if argument not pass -> by default is "undefined"