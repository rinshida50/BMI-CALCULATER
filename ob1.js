var car={

    name : "Baleno",
    model: "hatch-back",
    manufacturer:"suzuki",
    price:"13 L"

}
// display car name and its manufacturer

console.log(car["name"]);
console.log(car.manufacturer);





//check model key is present , then display its value 

//console.log("model"in car?car["model"]:"key is not present");
console.log(car.hasOwnProperty("model")&&car.model);



//add varient as automatic , manual
car["varient"]=["automatic","manual"]
console.log(car);


//add colors as red,white, blue,ash ,black
car["colors"]=["red","white","blue","ash","black"]
console.log(car);



//add hybrid varient
car.varient.push("hybrid")
console.log(car);


console.log(Object.values(car));
console.log(Object.keys(car));


Object.assign(car,{engine:"yes"})
console.log(car);
 
//print each word count 

sentence=" hai all hello hai welcome to js"
//output={hai:2,all:1,hello:1,welcome:1,to:1,js:1}

output={}
sentence.split(" ").forEach(word=>output.hasOwnProperty(word)?output[word]+=1:output[word]=1)
console.log(output);

console.log("-------------------");


//find first recuurssive charachter from the given pattern
pattern='ABCEACC'

result={}
for(let ch of pattern){
    if(result.hasOwnProperty(ch)){
        console.log(ch);
        break
        
    }
    else{
        result[ch]=null
    }
}

console.log("-------------------");

 

//display number count
array=[10,12,32,10,11,12,22,10,44,2]

output={}
array.forEach(num=>output.hasOwnProperty(num)?output[num]+=1:output[num]=1)
console.log(output);







