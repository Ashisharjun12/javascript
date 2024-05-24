//stack(primitive) and heap(non-primitive)

let myName = "ashish"

let anotherName = myName
anotherName = "crush"

console.log(myName);
console.log(anotherName);//all primitive datatypes are stack so 
//values changes to their copy not original 

//heap(non-primitive like objects,array and function )//changes taken 
//palce to original value

let userOne = {
    name : 'ashish',
    upiId: '123@WE'
}

let userTwo = userOne
userTwo.email ="ashish@gmail.com"

console.log(userOne);
console.log(userTwo);