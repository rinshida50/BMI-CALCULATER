
 //for(let i=1;i<=10;1++){
//     console.log(i);
// if(i==4){
//     break
// }
// }

// console.log("------------");
// for(let i=1;i<=10;i++){
//     if(i==4){
//         continue
//     }
//     console.log(i);
    
// }

// 
const prompt=require (`prompt-sync`)({sigint:true})


//to check a number is prime or not

let num=prompt("enter the number")

let isPrime=true
for(let i=2;i<=Math.ceil(num/2);i++){
    if(num%i==0){
        isPrime=false
        break
    }
    


        
}
console.log(isPrime?`${num}is a prime number`:`${num} not a prime number`);





    


    
    