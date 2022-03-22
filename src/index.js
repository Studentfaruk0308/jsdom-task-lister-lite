document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const taskForm = document.querySelector('#create-task-form');
  const taskList = dcoument.querySelector('#tasks');

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const newTask = document.querySelector('#new-task-description')
  const taskItem = document.createElement('li')
  taskItem.innerText = newTask.value
  taskList.appendChild(taskItem)
})

});
