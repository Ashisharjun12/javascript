// truthy and falsy

const userEmail = "ashish@mail.com"

if(userEmail){
    console.log("you got a mail");
} else{
    console.log("not got a mail");
}

//falsy value
// 0,false, -0 ,bigInt,0n,"",null,undefined,NaN

//truthy value
//"0",'false',"(string ke ander space ho yah kch v truthy value hota hai) "
//{} , [], function(){}

const array =[]

if(array.length==0){
    console.log("emapty array");
}

const obj ={}

if(Object.keys(obj).length==0){
    console.log("onject is empty");

}

//nullish coalesing operator(??) : null defined
let val1;
val1 = 5 ?? 10
console.log(val1);

val1 = null ?? 10
console.log(val1);

val1= undefined ?? 15
console.log(val1);

val1= 10 ?? 15 ?? undefined
console.log(val1);
