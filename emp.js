
//[empId,empname,designation,loaction,salary,experience
employee=[

    // [empId, empname, designation, location, salary, experience]
employees = [
  [1000, "Akhil", "Analyst", "kochi", 15000, 3],
  [1001, "Niel", "developer", "kochi", 15000, 2],
  [1002, "Max", "Tester", "kochi", 25000, 3],
  [1003, "Maxwell", "QA", "kochi", 50000, 3],
  [1004, "Vyona", "QA", "kochi", 45000, 3],
  [1005, "Laisha", "developer", "kochi", 35000, 3],
  [1006, "Ahan", "Tester", "kochi", 20000, 3],
  [1007, "Nishan", "QA", "kochi", 50000, 3],
  [1008, "Shyam", "developer", "kochi", 35000, 3],

]
 
]

// 1. Print all employee names

console.log("---------employees name----------");




 // for(empname of employees){
   // console.log(empname[1]);
    

   //employee.forEach((emp)=>console.log(emp1));
   
   
    

// 2. Print total number of employees
console.log("--------- total number of employees----------");

console.log(`total number of employees is ${employees.length}`);






// 3. Print developer employee details

console.log("------developer employee details------");




//for(let dev of employees){
  //if(dev[2]=="developer")
   // console.log(dev[1]);
    
//}


employees.filter(emp=>emp[2]=="developer").forEach(emp=>console.log(emp[1]))









// 4. Print employee name and salary whose salary > 30000

//for(let emp of employee)
 // if(emp[4]>30000)
    //console.log(emp[1],emp[4]);

 

 employees.filter(emp=>emp[4]>30000).forEach(emp=>console.log(emp[1],emp[4]))
 


    

// 5. Print details of employee Laisha

console.log("--------- details of employee Laisha----------");

//for(let emp of employee)
  //if(emp[1]=="laisha")
    //console.log(emp);


console.log(employees.find(emp=>emp[1=="laisha"]) );


  



// 6. Display employee name and salary based on their salary descending order

console.log("--------Employee name and salary in descending order of salary----------");

  //emp=employees.sort((a, b) => b[4] - a[4])
  //for(let emp of employees );
   // console.log(emp[1],emp[4]);
    
  
  
  


// 7. Display employee name and experience based on their experience ascending order


console.log("--------Employee name and experience in ascending order of experience----------");

  //employee.sort((a, b) => a[5] - b[5])
  //for(let emp of emplyee) 
 // console.log(emp[1], emp[5]);




numArray=[2,13,24,11,23]

console.log(numArray.filter(num=>num%2==0));





   