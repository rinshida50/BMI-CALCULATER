

//Variables and Data Types

//String
var person = "Adhi"
let person1 = "Lena"


//Number
var number1 =10;
var number2 =20.675;

//Boolean
var js = true
var html= false


//undefined 

var test1;

//null
var test2 =null;

//Arithmetic Operators

var a =10;
var b =20;

a++; a =a+1



//Assignment Operator
//-----------------------------

/*assign(=)(x=10);

Add and Assign(+=)
x+=4  ->x=x+4;

substract and assign(-=)
x-=4 -> x=x-4;

multiply and assign(*=)
x*=4 -> x=x*4;
divide and assign(/=)
x/4 -> x=x/4;

modulas and assign(%=)
x%4 -> x=x%4*/



//Comparison Operators
//--------------------------------

/*equal to : ==    :a==b;
identical : ===  : a===b;
not equal to: !=  : a!=b;
Greater than : >  : a >b;
Less than  :   <  : a<b;
Greater than or equal to : >=: a>=b;
less than or equal to : <= : a<=b ;*/



/*Logical Operators 
-------------------------------

logical and : && 
True -> both statements are true

logical or : ||
True : one of the statement is true 

logical not : !
opposite result*/


/*If Statement - Conditional Statement


condition -> true -> execute code

  if(condition){
    execute code ;
  }*/


/*Switch statement 
----------------------------

switch(expression){
    case : 1
     code1;
     break;
     case : 2
     code2;
     break;
     case : 3
     code3;
     break;
     default : 
     code default;
     break;
}
*/

var a = "L"
switch(a){
    case "A":
    console.log("Apple");
    break;

 case "B":
    console.log("Bat");
    break;
 
    case "C":
    console.log("Cat");
    break;

    default : 
    console.log("invalid character");
    break ;
    


    
}

  //Loops
console.log("-----------------------");
//fot loop

for(var i=0;i<=5;i++){
    console.log("Hey Lena");
    
}
for(i=1;i<=15;i++){
    console.log(i);
    
}
for(i=15;i>=10 ;i--){
    console.log(i);
    

}

console.log("------------------");

//While loop

var i =1;
while(i<=10){
    console.log(i);
   i++;


}

var i = 10;
while(i>=1){
    console.log(i);
    i--;
    

}
console.log("--------------");

//do while loop
var i =1
do{
    console.log(i);
    i++;

}while(i<=5)



    //FUNCTIONS

   // impled function 
          /*console.log();
           alert()
            typeof*/
    

function greetings(){
    console.log("Good Morning");
    
}
greetings();


function greetings(name){
    console.log("Good Morning" + name);
    
}
greetings(" Lena");// argument("lena or any other names")
greetings(" Adhi")


function sum(n1,n2){
    console.log(n1+n2);
    
}
sum(10,20)

function sum(n1,n2){
    return n1+n2
}
var result=sum(5,10);
console.log(result);


//Arrays

var animal =["Lion","Tiger","Cat","Dog"];
console.log(animal[0]);


//.length

x =animal.length;
console.log(x);

for(i=0;i<x;i++){
    console.log(animal[i] );
    
}

//animal[4]="Fox";
//console.log(animal);

//.push 
animal.push("Fox", "Rabbit")
console.log(animal);

//shift
//animal.shift();
//console.log(animal);

//pop
//animal.pop();
//console.log(animal);


//splice ( any element can delete)
//animal.splice(2);
//console.log(animal);

// sort (function)
animal.sort()
console.log(animal);

var number =[20,50,40,90,10]
number.sort()
console.log(number);

var number =[20,50,40,90,10]
console.log(number[1]+ number[3]);


//String
//------------------------------------
var text="java script"
console.log(text);

//strings function

//charAt
var text="Java Script"
console.log(text.charAt(0));

//conct
var text="Java Script"
var text1="Learn "
console.log(text1.concat(text));

//toLowerCase

var text ="HELLO"
console.log(text.toLowerCase());

//toUpperCase

var text ="Hey Lena"
console.log(text.toUpperCase());

//slice

var text="Learn Java Script"
console.log(text.slice(11,17));


//Math Object

//sqrt
var a =100
console.log(Math.sqrt(a));


var a =-50
console.log(Math.abs(a));

//min
var a =50
console.log(Math.min(2,4,6,10,45));

//max
var a =50
console.log(Math.max(2,4,6,10,45));

//pow

var a = -15
console.log(Math.pow(2,6));

//floor

var a =7.8
console.log(Math.floor(a));

//ceil

var a =6.4
console.log(Math.ceil(a));

//round

var a =6.1
console.log(Math.round(a));


//random
console.log(Math.random());
var rounded =Math.floor (a*10);

console.log(rounded);


//DOM - Document Object Model(2)


var name= 'its manu\'s car'
console.log(name);


//FOR OF LOOP

var arr1=["onian","cabbage","tomatto","garlic"]

for(let x of arr1){
    console.log(x);
    
}









