const prompt=require (`prompt-sync`)({sigint:true})

//3. Grade system:

        // Input a score (0-100)

        // Print grade:

        // A: 90+

        // B: 80–89

        // C: 70–79

        // D: 60–69

        // F: below 60




let num=prompt("enter the mark")
a=0
n=num


if(num>=90 && num<=100){
    console.log("A");
    
}
else if(num>=80 && num<=89){
console.log("B");
}
else if(num>=70 && num<=79){
console.log("C");
}
else if(num>=60 && num<=69){
console.log("D");
}
else if(num<=59){
console.log("F");
}
else{
    console.log("enter a valid mark");
    
}


    
    