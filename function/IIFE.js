//Immediately Invoked Function Expressions
//it means that run function immidetly
//IIFE use becuse of remove polution from global scope
//⭐use semicolon(;) for end the excuataion becasue iife don't know where to end 

//Named IIFE
(function one() {
    console.log("db connected");
    
})();

//other one()()
//simple IIFE

((name) => (`DB CONNECTED TWO,${name}`))("ashish");

