numArray=[10,2,13,33,24,19]

//find largest number in the array 

 largest=numArray[0]
 for(let num of numArray){
    if(num>largest){
        largest=num
    }
 }
 
 console.log(`largest number=${largest}`);
 

 
//find smallest number in the array

smallest=numArray[0]
 for(let num of numArray){
    if(num<smallest){
        smallest=num
    }
 }
 
 console.log(`smallest number=${smallest}`);
 

//find total sum of all numbers in the array

let sum =0
 for(let num of numArray){
    sum+=num

 }
 console.log(`sum =${sum}`);


 // to check a number 6 is present in the array

check=6
isFound=false
 for(let num of numArray){
    if(num==check){
        isFound=true
        break
        
    }

 }
console.log(isFound?`${check}is present`:`${check}not present`);

