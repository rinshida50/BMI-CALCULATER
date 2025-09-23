const prompt=require (`prompt-sync`)({sigint:true})


//find a number is palindrom or not
//input :3478                   1221
//output:not a palindrom        palindrome


let num=prompt("enter the number")

//i=1331
n=num
reverse=0
digit=0

while (num>0) {
    digit=num%10
    reverse=reverse*10+digit
    num=Math.floor(num/10)

    
}
console.log(reverse);

if (n==reverse) {
    console.log(`it is a palindrome`);
    
    
}
else {
    console.log(`not a palindrome`);


    
    
}



