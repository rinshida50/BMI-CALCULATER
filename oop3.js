class Parent{
    displayBike(){
        console.log("this is duke!!");
        
    }

}
class Child extends Parent{

}
const bike=new Child()
bike.displayBike()

const glanza={
    manufacturer:"Toyota",
    price:"14L",
    model:"hatch back"
}
const baleno={
    manufacturer:"suzuki",
    price:"13L",
}

baleno.__proto__=glanza
console.log(`model of baleno=${baleno.model}`);
