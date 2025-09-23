// find the sum of function
//method 1
//function addNum(a,b){
    //result=a+b
    //console.log(`sum=${result} `);
    //return result

//}
   // console.log(`sum=${addNum(12,8)}`);

//method 2 arrow function

const addNum=(a,b)=>a+b
console.log(`sum=${addNum(12,8)}`);






 //to find cube of number using function
 //method 1

//function cube (a){
    //result=a*a*a 
    //return result
//}
//console.log(`cube=${cube(4)}`);

//method 2 arrow function

//console.log(`cube=${cube(5)}`);







 //to check a number is odd /even using function

 function checkNum(num){
    return num%2==0? 'even numer' : 'odd number'
 }
 console.log(checkNum(8));
 


 function checknum(a){
    if(a%2==0)
        console.log(`${a} is even`);
    else
        console.log(`${a} is odd`);
        
        
 }
checknum(5) 


//alert

setTimeout(()=>{ console.log("Hello");},3000);


