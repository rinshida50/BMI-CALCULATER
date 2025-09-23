class Employee{
    empid
    name
    designation
    salary
    constructor(id,name,design,sal){
        this.empid=id
        this.name=name
        this.designation=design
        this.salary=sal
    }
    //user defined methods 
    displayData(){
        console.log(`
            employee Id:${this.empid}
            employee Name:${this.name}
            employee Designation:${this.designation}
            employee salary:${this.salary}
            `);
        
    }
}
const emp1=new Employee('eo1','Akhil',"developer",12000)
emp1.displayData()

//create a class for students with properties(id,name,division and mark)and dispaly 3 student details

//create a class for students with properties(id,name,division and mark)and dispaly 3 student details 

class Students{
    id
    name
    division
    mark
    constructor(id,name,div,mark){
        this.id=id
        this.name=name
        this.division=div
        this.mark=mark
    }
    displayData(){
        console.log(`
            Student Id : ${this.id}
            Student Name : ${this.name}
            Student Divsion : ${this.division}
            Student Mark : ${this.mark}
            `);
        

        }
}
const stud1=new Students('101','Milan','A',90)
const stud2=new Students('102','Janvi','B',80)
const stud3=new Students('103','Thanvi','A',85)
const stud4=new Students('104','Ivan','C',70)

stud1.displayData()
stud2.displayData()
stud3.displayData()
stud4.displayData()