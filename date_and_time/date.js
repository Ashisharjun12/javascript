//dates( date is an object) // in future ecma js use "temporal api" that help to use date eaisly

// const myDate = new Date()
// console.log(myDate);//non-redable
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());


let createDate = new Date(2023, 0 ,13)// yrr mm dd tt hh min ( month have 0 index of jan)
let anotherDate = new Date("2023-01-14")
let anotherDate2 = new Date("01-14-2023")//mm-dd-yy

console.log(createDate.toLocaleString());
console.log(anotherDate.toLocaleString());
console.log(anotherDate2.toLocaleString());

