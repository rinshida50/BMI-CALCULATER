function addTask() {
  let todo = document.getElementById('todoData').value;
  console.log(todo); // user data

  let li = document.createElement('li'); // create a new list item

  li.innerHTML = `
      <div class=flex-items-center justify-around mt-5   <img src="https://cdn.pixabay.com/photo/2021/09/20/08/55/checklist-6640235_1280.png" width="20px">
      ${todo}
      <i onClick="editTask(this)" class="fa-solid fa-pen"></i>   
      <i class="fa-solid fa-trash"></i>
    </div>
  `//assign to do the li tag

  // assign todo to the li tag
  document.getElementById('todoList').appendChild(li); // append each value to the list
}

function editTask(key){
    //get the to do item
    console.log(emt);   //get the current edit button
    console.log(emt.parentNode); //parent node of edit button 
    Is=emt.parentNode
    console.log(li.textContent); //value in the parent node 
    let oldText=li.textContent
    console.log(oldText);
    

    let txt = prompt("Enter Task ",oldText)
    console.log(newTxt);

    if(newTxt){
                console.log(li.childNodes[2]);
                li.childNodes[2].textContent=newTxt


    }
    else if(newTxt==" "){
        li.childNodes[2].textContent=
         `<div class=flex-items-center justify-around mt-5   <img src="https://cdn.pixabay.com/photo/2021/09/20/08/55/checklist-6640235_1280.png" width="20px">
      ${todo}
      <i onClick="editTask(this)" class="fa-solid fa-pen"></i>   
      <i class="fa-solid fa-trash"></i>
    </div>
  `
    }
        
    
    
    
}