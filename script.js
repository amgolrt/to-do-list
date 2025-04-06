const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  tasks.forEach(task => {
    createTaskElement(task)
  })
}

function addTask() {
  const taskText = taskInput.value.trim()
  if (taskText === '') return

  createTaskElement(taskText)
  saveTask(taskText)
  taskInput.value = ''
}

function createTaskElement(taskText) {
  const li = document.createElement('li')
  li.textContent = taskText

  const btn = document.createElement('button')
  btn.textContent = 'Remover'
  btn.onclick = () => {
    li.remove()
    removeTask(taskText)
  }

  li.appendChild(btn)
  taskList.appendChild(li)
}

function saveTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  tasks.push(taskText)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || []
  tasks = tasks.filter(task => task !== taskText)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

loadTasks()
