//objects
//make object from constructors object.create()
//singleton -> when makes objects from constructors is make singleton
//and when make from literals not make singleton objects

//object literals
const mysym = Symbol("key1")

const jsUser = {
     name : "ashish",
     [mysym] : "keyname",
     "full name":"ashish raj",
     age: 21,
     email: "ashish@gmail.com",
     isLoggedIn : false,
     lastLoggedInDays : [
        "monday","saturday"
     ]

}
//method to acess objects
console.log(jsUser.isLoggedIn);//method 01
console.log(jsUser["email"]);//method 02
console.log(jsUser["full name"]);//(jsurer.full name) not allowed
console.log(jsUser[mysym]);


//changes values of objescts
jsUser.email = "beg01@gmail.com"
//Object.freeze(jsUser)//for freezd the object ->changes not propogate
jsUser.email="asgv@gmail.com"
console.log(jsUser.email);


jsUser.greeting = function(){
    console.log("hellos js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.email}`);//if we reference ssame object use this
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
