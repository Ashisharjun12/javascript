//Functions with objects and array
function calculateCartPrice(...num1){//rest operator... num
    //(val1 ,val2 ,...num1)-> val1- 100,val2-> 200 , ...num1->[300,400]
    return num1
}
console.log(calculateCartPrice(100,200,300,400));

// in objects
 const user = {
    username : "ashish",
    price : "999"
 }

 function handelObject(anyobject){
    return `my name is ${anyobject.username} and price is ${anyobject.price} `
 }

// console.log(handelObject(user));
handelObject({
    username:"sam",
    price : "399"
})

//passing array
const newArray= [ 100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]

}
// console.log(returnSecondValue(newArray));
 console.log(returnSecondValue([200,300,400,500]));