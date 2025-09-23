const students = [
    { id: 1, name: "Alice", age: 22, grade: "A", enrolled: true },
    { id: 2, name: "Bob", age: 24, grade: "B", enrolled: false },
    { id: 3, name: "Charlie", age: 21, grade: "A", enrolled: true },
    { id: 4, name: "David", age: 23, grade: "C", enrolled: true },
    { id: 5, name: "Eva", age: 25, grade: "B", enrolled: false }
];

//4.Create a function to add a new student to the list.

function addStd(stdDetails)
{
    maxId=students.reduce((a,b)=>a.id>b.id?a:b).id
   
    console.log(maxId);
    students.push({id:maxId+1,...stdDetails})
    console.log(students);
    

}

addStd({name:"jiya",position:"tester",salary:46000,hired:false})

//5.Write a function to remove a student by their ID.

//6.Write a function to update the enrollment status of a student.
