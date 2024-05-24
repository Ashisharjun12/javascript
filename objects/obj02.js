//object declare using singleton
//method 01
// const tinder = new Object()//singleton object

// console.log(tinder);

//method 02
const tinderUser = {}//non-singleton object
tinderUser.id = "123"
tinderUser.name = "ashish"
tinderUser.email = " ashish@gmail.com"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//objects ke andder objects (nesting of objects)

const  regularUser = {
    email : "ashish@gmail.com",
    name : {
        userFullName :{
            firstName : "ashish",
            lastName : "raj"
        }

    }
}
//console.log(regularUser.name.userFullName.firstName);

//merging of objects
const obj1 = { a:"1", b: "2"}
const obj2 = { c:"3", d: "4"}

const obj3 = { ...obj1 , ...obj2}
console.log(obj3);


const user = [
    {
        id : 1,
        email :" qws@gmail.com"
    },
    {
        id : 2,
        email: "asm@mail.com"
    }, 
    {
        id : 3,
        email : "jkak@mail.com"
    }
]

user[1].email//for accesss values in array
console.log(tinderUser);

console.log(Object.keys(tinderUser));//for acces keys of objects
console.log(Object.values(tinderUser));//for acess values of objects
console.log(Object.entries(tinderUser));//make key values in form of array


//ask property question from objects

console.log(tinderUser.hasOwnProperty("email"));//result give true /false
console.log(tinderUser.hasOwnProperty("isLoggec"));