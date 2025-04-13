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
                       <button class="delete-button" onclick="
                        todoListObject.splice(${index}, 1);
                        updateToDo();
                       ">Delete</button>`;
            });
            document.querySelector('.js-to-do-list').innerHTML=html;
        }

        function addTodo(){
            let el1=document.querySelector('.js-todo');
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