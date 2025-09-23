
const prompt=require (`prompt-sync`)({sigint:true})

//5. Write a program to find given number is armstrong or not
//input:153
// output:armstrong number
// input:221
// output:not an armstrong number
// input:1634
// output:armstrong number

let num=prompt("enter the number")


n=num
sum=0
digit=0

while (num>0) {
    digit=num%10
    sum= sum+digit*digit*digit
    num=Math.floor(num/10)

    
}

if (sum==n) {
    console.log(` is armstrong` );
    
    
}
else{
    console.log(` not armstrong`);
    
}


