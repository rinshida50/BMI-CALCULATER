function countDown(num){

    console.log(num);
    if(num>1){
        countDown(num-1)
    }
    
}
countDown(10)