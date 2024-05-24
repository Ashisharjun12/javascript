//reduce-> add total value
//uses for adding total vlaue of shopping cart

const myNums=[1,2,3]

// const myTotal= myNums.reduce( function(acc,currVal){
//     console.log(`acc value : ${acc} and currVal :${currVal}`);
//       return acc + currVal;
// },0 )

const myTotal = myNums.reduce( (acc , currVal)=>acc +currVal ,0 )
 console.log(myTotal);


 const shoppingCart = [
    {
        course:'js',
        price:999
    },
    {
        course:'phython',
        price:1999
    },
    {
        course:'data science',
        price:12999
    },
 ]
 const total = shoppingCart.reduce( (acc,shoppingCart)=>(acc +shoppingCart.price),0 )
  console.log(total);