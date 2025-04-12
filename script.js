const todoListObject=[];
        
        updateToDo();

        function updateToDo(){
            let html='';
            for(let i=0; i<todoListObject.length; i++){
                let name=todoListObject[i].name;
                let dueDate=todoListObject[i].dueDate;
                html+=`<div>${name}</div>
                       <div>${dueDate}</div>
                       <button class="delete-button" onclick="
                        todoListObject.splice(${i}, 1);
                        updateToDo();
                       ">Delete</button>`;
            }
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