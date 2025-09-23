numArray=[10,2,13,33,24,19]

numArray.sort((a,b)=>a-b) // sorting ascenting order 
console.log(numArray);

low=0
up=numArray.length-1
search=24
isFound=false
count=0


while(low<=up){
    count++

    mid=Math.floor((low+up)/2)
if(numArray[mid]==search){
    isFound=true
    break

}
else if (numArray[mid]==search){
    up=mid-1
}
else{
    low=mid+1
}


}
console.log(`time taken to get output,${count}`);
console.log(isFound?`${search}is present`:`${search}is not present`);



