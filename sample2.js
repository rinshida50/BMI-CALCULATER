//OOPS

class Bike{

    //Constructer Method
    constructor(model_name,colour,price){
        this.model_name=model_name;
        this.colour=colour;
        this.price=price;
        

    }

    //Prototype Method
    bikeDetails(){
        console.log("Bike:"+this.model_name);
        console.log("Colour:"+this.colour);
        console.log("Price:"+this.price);

        


    }
    showPrice(){
        console.log("Price of"+ this.model_name +"is"+this.price);
        

    }

    //Static Method
    static message(){
        console.log("it is a static method");
        
    }
   

}

//Inheritance
//Base Class(Parent)-Bike
//Derived Class(Child)-Sports Bike

class SportsBike extends Bike{
    
}



 let b1 =new Bike("Hero Splender Plus","Red",50000);
 let b2 =new Bike("Honda CB Shine","Black",60000);
 let b3 =new Bike("Bajaj Pulsar 150","Blue",70000);




/*b1.bikeDetails();
b2.bikeDetails();
b3.bikeDetails();

b3.showPrice()

Bike.message()

let sb1=new SportsBike("KTM RC 200","Yellow",80000);

sb1.bikeDetails()
sb1.showPrice()*/

var name=" lena";
var age = 21;

////Template Literal

console.log(`my name is${name} I am ${age}years old`);


 var a=10
 var b=20
 console.log(`sum of a and b is${a+b}`);
 
console.log(`my name is lena,
Iam 21 years old`);


//Rest Parameters(...three dots)

function sum(num1,num2,...nums){
    let sum=0
    for(let x of nums){
        sum+=x   //sum=sum+x
    }
    console.log(num1=num2+sum);
    
}
sum(10,20,30,50)

//Spread Operators

let arr1=[10, 20, 30]
let arr2=[40, 50, 60]

/*let arr3=arr1.concat(arr2);
arr3.push(70)
console.log(arr3);*/

let arr3=[5,...arr1, ...arr2,70,80,90];
console.log(arr3);

let obj1={
    country:"india",
   // capital:"new delhi"
}
let obj2={
    language:"hindi"
}
let obj3={
    pops:20000
}
let obj4={...obj1,...obj2,...obj3}

console.log(obj4);
