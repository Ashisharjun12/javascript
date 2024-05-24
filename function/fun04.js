//Scope level and mini hoisting

//childern access their parent property
function one(){
    const username = "ashish"

    function two(){
        console.log(`my name is ${username}`);
    }
  //console.log(website);

  two();
}

one();

//function vs expression
 function one(num){
    return num + 1
 }
 one(5)

//expressions
 const two = function(num){
    return num + 2
 }
 two(4)