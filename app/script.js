const loginScreen = document.querySelector('[data-cy="login-screen"]')
const dashboardScreen = document.querySelector('[data-cy="dashboard-screen"]')

const loginForm = document.querySelector('[data-cy="login-form"]')
const usernameInput = document.querySelector('[data-cy="username-input"]')
const passwordInput = document.querySelector('[data-cy="password-input"]')
const loginError = document.querySelector('[data-cy="login-error"]')
const logoutButton = document.querySelector('[data-cy="logout-button"]')

const taskForm = document.querySelector('[data-cy="task-form"]')
const taskInput = document.querySelector('[data-cy="task-input"]')
const taskError = document.querySelector('[data-cy="task-error"]')
const taskList = document.querySelector('[data-cy="task-list"]')

const filterButtons = document.querySelectorAll('.filter-button')

let tasks = []
let currentFilter = 'all'

function showDashboard() {
  loginScreen.classList.add('hidden')
  dashboardScreen.classList.remove('hidden')
}

function showLogin() {
  dashboardScreen.classList.add('hidden')
  loginScreen.classList.remove('hidden')
}

function login(event) {
  event.preventDefault()

  const username = usernameInput.value.trim()
  const password = passwordInput.value.trim()

  const isValidUser = username === 'admin' && password === '123456'

  if (!isValidUser) {
    loginError.classList.remove('hidden')
    return
  }

  loginError.classList.add('hidden')
  usernameInput.value = ''
  passwordInput.value = ''

  showDashboard()
}

function logout() {
  tasks = []
  currentFilter = 'all'

  updateActiveFilter()
  renderTasks()
  showLogin()
}

function addTask(event) {
  event.preventDefault()

  const title = taskInput.value.trim()

  if (!title) {
    taskError.classList.remove('hidden')
    return
  }

  taskError.classList.add('hidden')

  const newTask = {
    id: Date.now(),
    title,
    completed: false
  }

  tasks.push(newTask)
  taskInput.value = ''

  renderTasks()
}

function toggleTask(taskId) {
  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      return {
        ...task,
        completed: !task.completed
      }
    }

    return task
  })

  renderTasks()
}

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId)
  renderTasks()
}

function getFilteredTasks() {
  if (currentFilter === 'pending') {
    return tasks.filter((task) => !task.completed)
  }

  if (currentFilter === 'completed') {
    return tasks.filter((task) => task.completed)
  }

  return tasks
}

function updateActiveFilter() {
  filterButtons.forEach((button) => {
    const buttonFilter = button.dataset.filter

    if (buttonFilter === currentFilter) {
      button.classList.add('active')
    } else {
      button.classList.remove('active')
    }
  })
}

function changeFilter(event) {
  currentFilter = event.target.dataset.filter

  updateActiveFilter()
  renderTasks()
}

function renderEmptyState() {
  taskList.innerHTML = `
    <li class="empty-state" data-cy="empty-state">
      Nenhuma tarefa encontrada.
    </li>
  `
}

function renderTasks() {
  const filteredTasks = getFilteredTasks()

  taskList.innerHTML = ''

  if (filteredTasks.length === 0) {
    renderEmptyState()
    return
  }

  filteredTasks.forEach((task) => {
    const taskItem = document.createElement('li')
    taskItem.className = task.completed ? 'task-item completed' : 'task-item'
    taskItem.setAttribute('data-cy', 'task-item')

    const taskInfo = document.createElement('div')
    taskInfo.className = 'task-info'

    const taskTitle = document.createElement('span')
    taskTitle.className = 'task-title'
    taskTitle.setAttribute('data-cy', 'task-title')
    taskTitle.textContent = task.title

    const taskStatus = document.createElement('span')
    taskStatus.className = 'task-status'
    taskStatus.setAttribute('data-cy', 'task-status')
    taskStatus.textContent = task.completed ? 'Concluída' : 'Pendente'

    const actions = document.createElement('div')
    actions.className = 'task-actions'

    const toggleButton = document.createElement('button')
    toggleButton.className = 'task-action'
    toggleButton.setAttribute('data-cy', 'toggle-task-button')
    toggleButton.textContent = task.completed ? 'Reabrir' : 'Concluir'
    toggleButton.addEventListener('click', () => toggleTask(task.id))

    const deleteButton = document.createElement('button')
    deleteButton.className = 'task-action'
    deleteButton.setAttribute('data-cy', 'delete-task-button')
    deleteButton.textContent = 'Excluir'
    deleteButton.addEventListener('click', () => deleteTask(task.id))

    taskInfo.append(taskTitle, taskStatus)
    actions.append(toggleButton, deleteButton)
    taskItem.append(taskInfo, actions)

    taskList.appendChild(taskItem)
  })
}

loginForm.addEventListener('submit', login)
logoutButton.addEventListener('click', logout)
taskForm.addEventListener('submit', addTask)

filterButtons.forEach((button) => {
  button.addEventListener('click', changeFilter)
})

renderTasks()