numArray=[[1,10],[11,22],[5],[22,12]]
//find the sum of all numbers 


/*sum=0
numArray.forEach(arr=>{
    arr.forEach(num=>{
         sum+=num
    })
            

        } )
        console.log(`sum${sum}`);*/


        console.log(`sum${numArray.flat(Infinity).reduce((a,b)=>a+b)}`);


        nameArray=["manu","meenu","manju","mohan"]
        console.log(nameArray.includes("manu"));
        
        
        console.log(`indexOf ,meenu:${numArray.indexOf("meenu")}`);
        
        //delete any element    "splice"
        nameArray.splice(2,1,"mini")
        console.log(nameArray);
        
       // single string           "join"
       console.log(nameArray.join('|'));
       