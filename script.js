document.querySelector('.js-todo-input').addEventListener('keydown', (event)=>{
    if(event.key==='Enter') addTodo();
});

document.querySelector('.js-dueDate').addEventListener('keydown', (event)=>{
    if(event.key==='Enter') addTodo();
});

document.querySelector('.js-add-button').addEventListener('click', ()=>{
    addTodo();
});

const todoListObject=[];
        
updateToDo();

function updateToDo(){
    let html='';
    todoListObject.forEach(function(value, index){
        // let name=value.name;
        // let dueDate=value.dueDate;
        let {name, dueDate}=value;
        html+=`<div>${name}</div>
                <div>${dueDate}</div>
                <button class="delete-button js-delete-button">Delete</button>`;
    });
    document.querySelector('.js-to-do-list').innerHTML=html;

    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index)=>{
        deleteButton.addEventListener('click', ()=>{
            todoListObject.splice(index, 1);
            updateToDo();
        });
    });
}

function addTodo(){
    let el1=document.querySelector('.js-todo-input');
    let el2=document.querySelector('.js-dueDate');
    let name=el1.value;
    let dueDate=el2.value;
    if(name===''||dueDate===''){
        let msg='Invalid Input';
        document.querySelector('.js-invalid').innerHTML=msg;
    }
    else{
        todoListObject.push({
            'name': name,
            'dueDate': dueDate
        });
        el1.value='';
        el2.value='';
        updateToDo();
        document.querySelector('.js-invalid').innerHTML='';
    }
}