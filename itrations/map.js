//map
const myNumbs=[1,2,3,4,5,6,7,8,9,10]

// const newNumbs= myNumbs.map((num)=>{ return num+10})

//chaning
const newNums =myNumbs
       .map((num)=> num * 10)
       .map( (num)=>{ return num + 10} )
       .filter((num)=>{ return num>=40})//filter mein true/false wala game hoga

console.log(newNums);


