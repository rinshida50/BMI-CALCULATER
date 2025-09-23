 //SET  A


const devices = [
    {
        id: 1, 
        name: "iPhone 14", 
        brand: "Apple", 
        price: 999, 
        inStock: 'yes', 
        features: {
            storage: "128GB", 
            batteryLife: "20"
        }
    },
    {
        id: 2, 
        name: "Galaxy S21", 
        brand: "Samsung", 
        price: 799, 
        inStock: 'No', 
        features: {
            storage: "256GB", 
            batteryLife: "22 "
        }
    },
    {
        id: 3, 
        name: "Pixel 7", 
        brand: "Google", 
        price: 599, 
        inStock: 'yes', 
        features: {
            storage: "128GB", 
            batteryLife: "24 "
        }
    },
    {
        id: 4, 
        name: "Surface Laptop 4", 
        brand: "Microsoft", 
        price: 1499, 
        inStock: 'yes', 
        features: {
            storage: "512GB", 
            batteryLife: "15"
        }
    },
    {
        id: 5, 
        name: "MacBook Air", 
        brand: "Apple", 
        price: 999, 
        inStock: 'No', 
        features: {
            storage: "256GB", 
            batteryLife: "18 "
        }
    }
];
//1.Print all device names
console.log("-------1--------");


devices.forEach(d => console.log(d.name));



   
   

//2.Print all device names whose price is greater than $800
console.log("---------2----------");

devices.filter(d => d.price > 800).forEach(d => console.log(d.name));


//3.Print out-of-stock devices.

console.log("------3------");


devices.filter(d=>d.inStock==='no').forEach(d=>console.log(d.name));






//4.Find the device names with battery life greater than 20 hours.

console.log("-----------4------------");

devices.filter(d=>(d.features.batteryLife) > 20).forEach(d => console.log(d.name));



//5.Calculate the total revenue generated when all available devices are sold out.

console.log("---------5---------");
devices.filter(d=>d.inStock==='yes').reduce((sum,d)=>sum+d.price)
let totalRevenue= devices.filter(d => d.inStock=='yes').reduce((sum, d) => sum + d.revenue,0);
    console.log("TotalRevenue", totalRevenue);







const employees = [
    { id: 1, name: "John", position: "Manager", salary: 60000, hired: true },
    { id: 2, name: "Sarah", position: "Developer", salary: 50000, hired: true },
    { id: 3, name: "Tom", position: "Designer", salary: 45000, hired: false },
    { id: 4, name: "Anna", position: "Tester", salary: 40000, hired: true },
    { id: 5, name: "Jack", position: "Developer", salary: 55000, hired: false }
];
//Questions:

//1.Print all employee positions.

console.log("-------Q1------");
employees.forEach(emp=>console.log(emp.position));




//2.Find the name of the employee with the highest salary.

console.log("------Q2-----------");


//console.log(employees.reduce((emp,max)=>a[4]>b[4]?a:b)[1]);



//3.List all employees who are not hired.
console.log("------Q3-----------");
employees.filter(emp => !emp.hired).forEach(e =>console.log(e.name));



//4.Write a function to add a new employee to the list.
console.log("------Q4-----------");

function addEmp(id,name,position,salary,hired)
{
    employees.push(id,name,position,salary,hired)
    console.log(empolyees);
    

}

addEmp(6,"lena","developer",150000,true)

//5.Write a function to remove an employee by their ID.
console.log("--------Q5---------");
function removeEmployee(empId){
    emp=employees.find(employee=>employee.id==empId)
    index=employees.indexOf(emp)
    employees.splice(index,1)
    console.log(employees);
    
}
removeEmployee(2)

//6.Create a function to update an employee’s salary.
console.log("--------Q6---------");

function updateSalary(id, newSalary) {
  const emp = employees.find(emp => emp.id == id)
  if(emp){
    emp.salary=newSalary
    console.log(employees);
    
  }
  else{
    console.log(`ID ${id}not found`);
    
  }
   
}
updateSalary(1,20000)

//7.List all employees with the position "Developer".
console.log("-------Q7--------");




//8.Calculate the total salary of all hired employees.

console.log("-------Q8--------");



//let totalHiredSalary = employees.filter(emp => emp.hired).reduce((sum, emp) => sum + emp.salary, 0);
   // console.log("Total salary of hired employees", totalHiredSalary);






