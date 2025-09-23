const prompt=require (`prompt-sync`)({sigint:true})

//2.  write a js code to print the number of digit in a number
// input: 2945
// output : no:of digit=4

let num=prompt("enter the number")

n=num
i=0
while(n>0){
    n=Math.floor(n/10)
     i++
}
 console.log(`no. of digit is ${i}`);
 
 
