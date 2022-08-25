
import { todo } from './object';
import { taskDisplay } from './display';
import { makeTodoList } from './maketodolist';

export const listeners = (()=>{

        const navListener =()=>{
            
            const navTaskBtn = document.querySelector(".task-nav");
                navTaskBtn.addEventListener('click', () => {
                    clearContant();
                    taskDisplay();
                    makeTodoList();
                    assign();
                    endlessAssign();

                })
        }
        
        const assign = ()=> {

            const taskBtn = document.querySelector('.task-btn');

            const taskInputCnt = document.querySelector('.taskinputcnt');
            const cancelBtn = document.querySelector('.cancel-btn');
            const addBtn = document.querySelector('.add-btn');
        
                taskBtn.addEventListener('click', ()=> {
                    taskInputCnt.classList.toggle('visible');
                });

                addBtn.addEventListener('click', taskAdd);

                cancelBtn.addEventListener('click',taskCancel);
        }

        const endlessAssign = () => {

            const contentset = document.querySelectorAll('.taskupdatecnt');
            const editBtns = document.querySelectorAll('.task-edit');
            const deleteBtns = document.querySelectorAll('.task-delete');
            const updateBtns = document.querySelectorAll('.update-btn');
            const updateCancelBtns = document.querySelectorAll('.cancelupdate-btn');

            editBtns.forEach(editBtn => { editBtn.addEventListener('click', (e)=>{
                let v =  e.target.dataset.index;
                    for (let i = 0; i < contentset.length; i++) {
                        contentset[i].className;
                        if (contentset[i].classList[1] == v){
                            contentset[i].classList.toggle('visible');
                        };
                    };
                });
            });
            deleteBtns.forEach(deleteBtn => { deleteBtn.addEventListener('click', (e)=>{
                console.log(1);
                let v =  e.target.dataset.index;
                    todo.removeTodo(v);
                    clearTodoList();
                    makeTodoList();
                    endlessAssign();

                });
            });
            updateBtns.forEach(updateBtn => { updateBtn.addEventListener('click', (e)=>{
                let v =  e.target.dataset.index;
                    for (let i = 0; i < contentset.length; i++) {
                        if (contentset[i].classList[1] == v){
                            const taskUpdate = contentset[i].querySelector('#task-update');
                            const dateUpdate = contentset[i].querySelector('#date-update');
                            const priorityUpdate = contentset[i].querySelector('#priority-update');
                            todo.todos[v].task = taskUpdate.value;
                            todo.todos[v].date = dateUpdate.value;
                            todo.todos[v].priority = priorityUpdate.value;
                            clearTodoList();
                            makeTodoList();
                            endlessAssign();

                        };
                    };
                });
            });
            updateCancelBtns.forEach(updateCancelBtn => { updateCancelBtn.addEventListener('click', (e)=>{
                let v =  e.target.dataset.index;
                    for (let i = 0; i < contentset.length; i++) {
                        contentset[i].className;
                        if (contentset[i].classList[1] == v){
                            contentset[i].classList.remove('visible');
                        };
                    };
                });
            });
        };       
    
        return { navListener }
       
      
    function clearTodoList() {
        const todoList = document.querySelector('.task-list-cnt');
        const clearList = todoList.querySelectorAll('.task-cnt');
        console.log(clearList);
        for (let i = 0; i < clearList.length; i++) {
            todoList.removeChild(clearList[i])
        }    
    }
    function clearContant() {
        const display = document.querySelector('.display');
        const content = document.querySelector('.content');
        if(display.firstChild !== null){
            display.removeChild(content)
        };
    }
    function taskAdd(){
        const taskInput = document.querySelector('#task');
        const dateInput = document.querySelector('#date');
        const priorityInput = document.querySelector('#priority');
        todo.makeTodo(taskInput.value,dateInput.value, priorityInput.value);
        taskInput.value = '',dateInput.value = '', priorityInput.value='low';
        clearTodoList();
        makeTodoList();
        endlessAssign();
    }

    function taskCancel(){
        const taskInputCnt = document.querySelector('.taskinputcnt');
        const taskInput = document.querySelector('#task');
        const dateInput = document.querySelector('#date');
        const priorityInput = document.querySelector('#priority');
        taskInput.value = '',dateInput.value = '', priorityInput.value='low';
        taskInputCnt.classList.remove('visible');
    }

})();