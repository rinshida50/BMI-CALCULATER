const prompt=require (`prompt-sync`)({sigint:true})

for( let i=1;i<=10;i++){
    console.log(i);
    
}

console.log("----------------------");


// to print 10 to 5 

for(let a=10;a>=5;a--)
    console.log(a);

//to factorial of a number
let num=prompt("enter the number")


fact=1
for( i=1;i<=num;i++){
    fact=fact*i
}
console.log(`${num}!=${fact}`);



