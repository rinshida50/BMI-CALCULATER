const prompt=require (`prompt-sync`)({sigint:true})

// print the following pattern 


//#   #    #    #     
//#   #    #    #     
//#   #    #    #     
//#   #    #    #     




for (row=1;row<=4;row++) {
    pattern=""
    //column creation

      for(col=1; col<=4;col++){
        pattern=pattern+"#  " 
      }

      console.log(pattern);
      
    
}

console.log("----------------------");

   
//print the following pattern

//1     1      1       1
//2     2      2       2
//3     3      3       3
//4     4      4       4

for (row=1;row<=4;row++) {
    pattern=""
    //column creation

      for(col=1; col<=4;col++){
        pattern=pattern+row+ "  " 
      }

      console.log(pattern);
      
    
}



console.log("----------------------");


//print the following pattern

//1     2      3       4
//1     2      3       4
//1     2      3       4
//1     2      3       4

for (row=1;row<=4;row++) {
    pattern=""
    //column creation

      for(col=1; col<=4;col++){
        pattern=pattern+col+ "   " 
      }

      console.log(pattern);
      
    
}
console.log("----------------------");



//print the following pattern

//*
//*   *
//*   *    *
//*   *    *    *
//*   *    *    *    *

 for(row=1;row<=5;row++) {
    pattern=""
    //column creation

      for(col=1; col<=row;col++){
        pattern=pattern+ " *  " 
      }

      console.log(pattern);
      
    
}
console.log("----------------------");


//print the following pattern

//1
//2  2
//3  3   3
//4  4   4   4
//5  5   5   5   5

for(row=1;row<=5;row++) {
    pattern=""
    //column creation

      for(col=1; col<=row;col++){
        pattern=pattern+row+ "   " 
      }

      console.log(pattern);
      
    
}

console.log("----------------------");


//print the following pattern

//1
//1  2
//1  2   3
//1  2   3   4
//1  2   3   4   5

for(row=1;row<=5;row++) {
    pattern=""
    //column creation

      for(col=1; col<=row;col++){
        pattern=pattern+col+ "   " 
      }

      console.log(pattern);
      
    
}

console.log("----------------------");


//print the following pattern

//       *
//     *    *
//   *    *   *
//  *    *   *    *
//*   *    *   *    *

for(row=1;row<=5;row++) {
    pattern=""
    for(space=4 ;space>=row ;space--){
        pattern+= "  "

    }


      for(col= 1; col<= row ; col++){
        pattern=pattern + "*   "
      }

      console.log(pattern);
      
    
}

console.log("----------------------");


//print the following pattern

//            *

//      *           *

//   *                  *   

//*   *   *   *    *    *    *

for(row=1;row<=4;row++){
    pattern=""

    for(col= 1; col<=7 ; col++){
     

        if(row==4 || row+col==5 || col-row==3){
        pattern+="* "
    
        
      } else{
        pattern+="  "
      }
      }
            console.log(pattern);

}
    





 








