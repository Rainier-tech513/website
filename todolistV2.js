let todoList = JSON.parse(localStorage.getItem('todo')) || [{}]

displayTodo();


function displayTodo () {

    let todoListHTML = '';

    document.querySelector('.div-js');

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i]
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        

        const html = 
        `<div>${name}</div> 
            <div>${dueDate}</div> 
            <button class="delete-btn js-delete-todo">Delete</button>
            `;

        todoListHTML += html;
    }

    //console.log(todoListHTML)

    document.querySelector('.div-js').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo')
        .forEach((deleteButton, i) => {
            deleteButton.addEventListener('click', () => {
                //console.log(i)
                todoList.splice(i, 1);
                displayTodo();
            });
        });
    
    localStorage.setItem('todo', JSON.stringify(todoList));
};



document.querySelector('.js-add-btn')
    .addEventListener('click', () => {
        addTodo();
    })



function addTodo () {

    let name = document.querySelector('.input-field-js').value;

    let dueDate = document.querySelector('.js-date-input').value;

    todoList.push({
        name: name,
        dueDate: dueDate
        
    });

    displayTodo();
}