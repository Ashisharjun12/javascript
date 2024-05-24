//Filter map and reduce

// const coding = ['java','cpp','javascript','phython','swift']

// const values = coding.forEach((item)=>{
//       console.log(item);
// } )
// console.log(values); //for each not return any value



//filter->returs the value
const myNumbs=[1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbs.filter((num)=> num>4 )

// const newNums = myNumbs.filter( (nums)=> {
//     return nums>5
// } )

console.log(newNums);

//possible to make with foreach
// const newNums=[]

// myNumbs.forEach( (num)=>{
//     if (num>5) {
//         newNums.push(num);
//     }
// } )
// console.log(newNums);

//more about filters

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks = books.filter((bk)=> bk.genre==='Non-Fiction')
//   console.log(userbooks);
 
  //multiple conditon check using &&(AND) ,||(OR)
  userbooks = books.filter( (bk)=> { 
    return bk.publish >=1981 && bk.genre ==='History'
} )
  console.log(userbooks);

 