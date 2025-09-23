
  [1002, "Max", "Tester", "kochi", 25000, 3]

    const emp ={
    empId:1002,
    empName:"Max",
    desig :"Tester",
    location:"kochi",
    salary :25000,
    exp : 3

}

console.log(emp);
console.log(emp["empName"]);
console.log(emp.salary);


console.log("empName"in emp?["empName"]:"key is not present");

emp.hasOwnProperty("isVaccinated")?console.log(emp["isVaccinated"]):emp["isVaccinated"]="yes";
console.log(emp);


emp.salary+=5000
console.log(emp);


for(let key in emp){
    console.log(`${key}:${emp[key]}`);
    
}



