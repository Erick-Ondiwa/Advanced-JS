const new_task = document.getElementById('addNewTask');
new_task.style.display = 'block';


const display_list = document.querySelector(".display_list");
display_list.style.display = 'none';

const alert_message = document.querySelector('.alertmessage');
alert_message.style.display = 'none';

const addbutton = document.querySelector(".add_button");
  addbutton.addEventListener('click', function(){

    const todoname = document.getElementById("todoName");
    const task = todoname.value.trim();
    if(task){
      addTask(task);
      alert_message.style.display = 'block';
    } 
});


let deletebutton = document.createElement('button');
deletebutton.addEventListener('click', function(){
  itemsDiv.removeChild(listItems);
});

function getTasks(){
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

function addTask(task){
  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);
  displayTasks();
}
function saveTasks(tasks){
   localStorage.setItem('tasks', JSON.stringify(tasks));
}

const view_button = document.getElementById('viewButton');
view_button.addEventListener('click', () =>{
  display_list.style.display = 'block';
  new_task.style.display = 'none';
  alert_message.style.display = 'none';
});

function displayTasks(){
  const tasks = getTasks();
  const itemsDiv = document.createElement('ul');
  tasks.forEach(task => {
    let listItems = document.createElement('li');
    listItems.textContent = task;
    deletebutton.textContent = "DELETE";
    itemsDiv.append(listItems, deletebutton);
    display_list.appendChild(itemsDiv);
    //itemsDiv.style.display = 'block';
 });

}
  //  const currentdate = document.getElementById("currentdate");  localStorage.setItem('dueDate', JSON.stringify(currentdate.value));

//   let dueDate = localStorage.getItem('dueDate');
//   let taskDueDate = JSON.parse(dueDate);

//   const todoname = document.getElementById("todoName").value;
//   if(todoname){   
//     getTask(); 
//    

