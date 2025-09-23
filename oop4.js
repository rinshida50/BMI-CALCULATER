
function add(a,b){
    console.log(`sum of 2 numbers`);
    
}
function add(a,b,c){
    console.log(`sum of 3 numbers`);
    
}
function add(a,b,c,d){
    console.log(`sum of 4 numbers`);
    
}
add(3,5,6,7)


function numSum(...args){
    console.log(args);
    console.log(args.reduce((a,b)=>a+b,0));
    
    

}

numSum(4,5,6,7,8)