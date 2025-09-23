const prompt=require (`prompt-sync`)({sigint:true})

//4. Find the sum of all even numbers between 1 and 100.



i=1
sum=0
while(i<=100){
    sum=sum+i 
    i++
}
console.log(`${sum}`);

