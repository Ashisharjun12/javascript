const marvelHeros= ["thor","spiderman", "ironman"]
const dcHeros= ["batman","superman","flash"]

//marvelHeros.push(dcHeros)//method 1 to merge : puh()

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

//method 2 : concat()
// const allHeros= marvelHeros.concat(dcHeros)
// console.log(allHeros);

//method 3 : spread operator ->[...name ,...name2 ,...soon]
const allHeros = [...marvelHeros ,...dcHeros]
//console.log(allHeros);

//case in arry into array
const newArray = [1,2,3,4,[5,6,7],[4,5,6,[5,6,7]]]
const realArray= newArray.flat(Infinity)
console.log(realArray);


//ask question from array
console.log(Array.isArray("ashish"));
//convert into array
console.log(Array.from("ashish"));
console.log(Array.from({name:"ashish"}));//give empty array[]beacue it ask 
//to what make from array keys/values


//new topic
let score1= 100
let score2= 200
let score3= 400

console.log(Array.of(score1,score2,score3));