const new_task = document.getElementById('addNewTask');

const welcome_page = document.getElementById('welcome_page');

const task_items = document.getElementById('display_task_items');
task_items.addEventListener('click', () =>{
  new_task.style.display = 'block';
  welcome_page.style.display = 'none';
})

const today_tasks = document.getElementById('today_button');
today_tasks.addEventListener('click', () =>{
  display_list.style.display = 'block';
  welcome_page.style.display = 'none';
});


const display_list = document.getElementById('display_list');

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
    

