
const prompt=require (`prompt-sync`)({sigint:true})


let num=prompt("enter the number")

//to find factorial of a number



fact=1
i=1


while (i<=num) {

    fact=fact*i    //120
    i++


    
}
console.log(`${num}!=${fact}`);


