const prompt=require (`prompt-sync`)({sigint:true})

//to find GCD/HCF of 2 numbers

let num1=prompt("enter first number")
let num2=prompt("enter second number")

if(num1<num2){
    limit=num1
}
else{
    limit=num2
}

gcd=1
for(let i=1;i<=limit;i++ ){


if(num1%i==0 && num2%i==0){
    gcd=i
}

}
console.log(`GCD(${num1},${num2}=${gcd})`);







