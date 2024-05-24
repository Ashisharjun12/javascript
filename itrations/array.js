//High Order Array loops

//for of
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
    
}


const greeting ="hello world"
for (const greet of greeting) {
    console.log(`each char is ${greet}`);
}

//Map -> map is known for unique values

const map = new Map()
map.set('IN' , "India")
map.set('US' ,"Usa")
map.set('Pk',"Pakistan")

// console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

//for of not work in objects 
 //for in loop use in objects
 
