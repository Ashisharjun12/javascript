//number

const number = 100

const balance = new Number(100)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const anotherNumber = 23.785// 123.785 result is 124
console.log(anotherNumber.toPrecision(3));


const hundreds = 100000000000
console.log(hundreds.toLocaleString('en-IN'));//result is  default is US 1,00,00,00,00,000
// console.log(hundreds.toLocaleString('en-IN'));//result is  default is india 1,00,00,00,00,000
// change accoding to india