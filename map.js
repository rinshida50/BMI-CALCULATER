numArrray=[1,2,3,4,5,6,7]
console.log(numArrray.map(num=>num**2));

//  create new array with values satisfying the following condition
// 1)if number is <15  then increment the number 
//  else decrement number 

numarray=[1,2,3,4,5,6,7]
console.log(numarray.map(num=>num<15?num+1:num-1));

// finding largest using reduce method
numarray=[1,2,3,4,5,6,7]
console.log(numarray.reduce((accumulator,value)=>accumulator<value?accumulator:value));
//smallest
console.log(numarray.reduce((accumulator,value)=>accumulator>value?accumulator:value));
// sum
console.log(numarray.reduce((accumulator,value)=>accumulator+value));

employee = [
    [1000, "Akhil", "Analyst", "kochi", 15000, 3],
    [1001, "Neel", "developer", "kochi", 15000, 2],
    [1002, "Max", "Tester", "kochi", 25000, 3],
    [1003, "Maxille", "QA", "kochi", 50000, 3],
    [1004, "Vyom", "QA", "kochi", 45000, 3],
    [1005, "Lisha", "developer", "kochi", 35000, 3],
    [1006, "Ahan", "Tester", "kochi", 20000, 3],
    [1007, "Nishan", "QA", "kochi", 50000, 3],
    [1008, "Shyam", "developer", "kochi", 35000, 3],
]

// 1. highest salary
console.log(employee.reduce((accumulator,value)=>accumulator[4]>value[4]?accumulator:value));
console.log(employee.reduce((accumulator,value)=>accumulator[4]<value[4]?accumulator:value));
console.log(employee.reduce((accumulator,value)=>accumulator+value[4],0));
//second way
console.log(employee.map(num=>num[4]).reduce((a,b)=>a+b));