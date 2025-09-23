const prompt=require (`prompt-sync`)({sigint:true})

// to find a 3digit number is an armstrong number or not

let num=prompt("enter the number")

n=num
sum=0
digit=0

while (num>0) {
    digit=num%10
    sum= sum+digit*digit*digit
    num=Math.floor(num/10)

    
}
console.log();

if (sum==n) {
    console.log(` is armstrong` );
    
    
}
else{
    console.log(` not armstrong`);
    
}





