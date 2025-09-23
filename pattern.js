const prompt=require (`prompt-sync`)({sigint:true})


//to find following pattern

//input : 2     3       4        5
//output: 24    369     4939     ?
     //   12    123     1234     12345

let num=prompt("enter the number")

 let i=1
 number=0


while (i<=num) {

    number=number*10+i
    i++

    
}
console.log(number*num);









