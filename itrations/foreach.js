//for each loop -> higher order function
const coding = ["js","cpp","golang","swift"]

// coding.forEach(function(item){
//     console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

//for each also come with ( item{varible} , index, array)

// coding.forEach((item ,index,array)=>{
//     console.log(item,index,array);
// })

// array of object [{},{},{}]
const mycoding =[
    {
        lang:'javscript',
        file:'js'
    },
    {
        lang:'jav',
        file:'java'
    },
    {
        lang:'phyton',
        file:'py'
    }
]

mycoding.forEach((item)=>{
    console.log(item);
    console.log(item.file);

})

    

