//Object de-structure and JSON API
const course = {
    courseName : "javscript",
    price : "999",
    teacher : " ashish"
}

//course.teacher  -> method 01
//const {teacher} = course// const {} = kaha se value extract karna hai
const {teacher : me} = course// const {} = kaha se value extract karna hai

console.log(me);

//Apis -> in past times api come in form of xml but thesse times uses JSON str

// {
//     "name" : "ashish",
//     "courseName": " javascript",
//     "price": "99"
// }

// apis also come in form of array

[
    {},
    {},
    {}
]