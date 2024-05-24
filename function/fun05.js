//THIS and arrow function
const user = {
    username:"ashish",
    price:"999",
    welcomeMessage:function(){
        //console.log(`${this.username},welcome to website`);//this->is use for access current context
    }
}
// user.welcomeMessage();
// user.username="ravi"// result change because we change current context
// user.welcomeMessage();

// console.log(this);//result {}-> empty object

//⭐this-> only use in {objects} .. if we use in in functionn-> it gives undefined
function check(){
    let username = "ashish"
   // console.log(this.username);
}

// check()

//fat arrow function -> it also give undefined

const check = ()=>{
    let username = "ashish"
    //console.log(this.username);
}
// check()


