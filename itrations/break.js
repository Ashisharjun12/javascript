//break and continue
for (let index = 1; index <= 20; index++) {
    if (index ==5) {
       // console.log(`detected 5`);
        break
        
    }
   // console.log(`value is :${index}`);
    
}

//continue -> continue menans continue not jump the scope to break


for (let index = 1; index <= 20; index++) {
    if (index ==5) {
       console.log(`detected 5`);
        continue
        
    }
   console.log(`value is :${index}`);
    
}