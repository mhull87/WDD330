import utils from './utils.js';
import ls from './ls.js';

document.querySelector('#addBtn').onclick = newTodo;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#allFilter').onclick = applyFilter;
document.querySelector('#completedFilter').onclick = applyFilter;


function loadTodos() {
  const todoList = ls.getTodoList();

  todoList.forEach(todo => {
    const el = createTodoElement(todo)
    addToList(el);
  })
}
loadTodos();
//step 1
function newTodo() {
  const todo = createTodo();
  const todoDiv = createTodoElement(todo);
  addToList(todoDiv);
  ls.saveTodo(todo);
}

//step 2
function createTodo() {
  const input = document.querySelector('#todoInput');
  const newTodo = {
    id: Date.now(),
    content: input.value,
    completed: false
  }
  input.value = '';
  return newTodo;
}

//step 3
function createTodoElement(todo) {
  //todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //complete btn
  const completeBtn = document.createElement('button');
  completeBtn.setAttribute('data-id', todo.id);
  completeBtn.classList.add('complete-btn');
 // completeBtn.onclick = check;
  completeBtn.addEventListener('click', check)

  //todo content
  const todoContent = document.createElement('div');
  todoContent.innerText = todo.content;
  todoContent.classList.add('todo-content');

  //delete btn
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('data-id', todo.id);
  deleteBtn.classList.add('todo-delete-btn');
  deleteBtn.innerHTML = '<b>&#128465<b>';
  deleteBtn.onclick = deleteTodo;

  todoDiv.appendChild(completeBtn);
  todoDiv.appendChild(todoContent);
  todoDiv.appendChild(deleteBtn);

  return todoDiv;
}

//step 4
function addToList(todoDiv) {
  //add to the document
  document.querySelector('#todos').appendChild(todoDiv);
}

//event handlers
function deleteTodo(e) {
  const btn = e.currentTarget;
  ls.deleteTodo(btn.getAttribute('data-id'));
  document.querySelector('#todos').innerHTML = '';
  loadTodos();
}


function check(e) {
  const mark = e.currentTarget;
  const strike = mark.parentElement;
  mark.classList.toggle('check');
  strike.classList.toggle('strike');

  const allTodos = ls.getTodoList();

  allTodos.forEach(item => {
    if (item.id == mark.getAttribute('data-id')) {
      if (item.completed == true) {
        item.completed = false;
      } else {
        item.completed = true;
      }
      item.id = Date.now();
      ls.saveTodo(item);

    }
    const remove = mark.getAttribute('data-id')
    ls.deleteTodo(remove);
  })
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}

function applyFilter(e) {
  //clear the list
  document.querySelector('#todos').innerHTML = '';
  //declare variables
  let filteredTodos = [];
  const allTodos = ls.getTodoList();
  //check which filter to apply
  if (e.currentTarget.id == 'activeFilter') {
    filteredTodos = utils.activeFilter(allTodos)
  } else if (e.currentTarget.id == 'allFilter') {
    filteredTodos = allTodos
  } else if (e.currentTarget.id == 'completedFilter') {
    filteredTodos = utils.completedFilter(allTodos)
  }
  //draw the list
  filteredTodos.forEach(todo => {
    const el = createTodoElement(todo)
    addToList(el)
  })
}