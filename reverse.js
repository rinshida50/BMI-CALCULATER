//to reverse a number
//input:34   3456
//output:43
const prompt=require (`prompt-sync`)({sigint:true})

let num=prompt("enter the number")

// i=3456



reverse=0
digit=0


while (num>0) {
     
    digit= num%10
    reverse=reverse*10+digit
    num=Math.floor(num/10)

    
    
    
}
console.log(reverse);



