const new_task = document.getElementById('addNewTask');
new_task.style.display = 'block';


const display_list = document.querySelector(".display_list");
display_list.style.display = 'none';

const alert_message = document.querySelector('.alertmessage');
alert_message.style.display = 'none';

const view_button = document.getElementById('viewButton');
view_button.addEventListener('click', () =>{
  createListElements();
  new_task.style.display = 'none';
  alert_message.style.display = 'none';
});

const addbutton = document.querySelector(".add_button");
  addbutton.addEventListener('click', function(){
    alert_message.style.display = 'block';
});

function createListElements(){
  const currentdate = document.getElementById("currentdate");
  localStorage.setItem('dueDate', JSON.stringify(currentdate.value));

  let dueDate = localStorage.getItem('dueDate');
  let taskDueDate = JSON.parse(dueDate);

  const todoname = document.getElementById("todoName");
   localStorage.setItem('taskId',todoname.value.trim());

   let taskName = localStorage.getItem("taskId");

  if(taskName){
    const itemsDiv = document.createElement('ul');

    let listItems = document.createElement('li');
    listItems.classList.add('list_items');

    let deletebutton = document.createElement('button');
    deletebutton.textContent = "DELETE";
    deletebutton.addEventListener('click', function(){
      itemsDiv.removeChild(listItems);
    });

    listItems.append(taskName, taskDueDate, deletebutton);
    itemsDiv.appendChild(listItems);

    display_list.style.display = 'block';
    display_list.appendChild(itemsDiv);

  }
  
}