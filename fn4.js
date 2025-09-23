


const days =[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`]
console.log(days);
console.log(typeof days);    //type=object

console.log(days[2]);       //index value  0,1,2,3......

console.log(days.length);   //find no.of elements

console.log(days[days.length-1]);

console.log("-------using for loop-----------");



for (i=0,i<days.length;i++) {
    
}{
        console.log(days[i]);


}
console.log("-------using for-of  loop-----------");



for(let day of days)    
console.log(day);

console.log("-------using for-in loop-----------");

// display index value 
for(let index in days ){
    console.log(days[index]);

}
    
    




 


