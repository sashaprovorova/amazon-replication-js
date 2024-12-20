const todoList = [ 
  { name: 'make dinner',
    dueDate: '2022-12-22' },
  { name: 'wash dishes',
    dueDate: '2022-12-22' }
]; 
renderTodoList();

//render means to display something on the page
function renderTodoList(){
  let todoListHTML= '';

  todoList.forEach((todoObject, index) => {
    //const todoObject = todoList[i]; dont need it anymore sinec we using forEach instead of for loop

    //shortcut for when the property name is the same as the variable name
    //destructuring const name = todoObject.name; into:
    //combined with const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    
    //generating the HTML technique
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  //becasue it is not yet present on the page, we need to put this function here so gets displayed first
  //querySelector only find the first item that mathes the criteria, therefore need to use querySelectorAll, which creates a list of all mathes
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  //shorthand property for
  //todoList.push({name: name, dueDate: dueDate});
  todoList.push({name, dueDate});

  inputElement.value = '';
  renderTodoList();
}