import '../css/normalize.css'
import '../css/style.css'

import { todo } from './task'
import { taskDisplay } from './display';

const navTaskBtn = document.querySelector(".task-nav");

navTaskBtn.addEventListener('click', () => {
    clearContant();

    taskDisplay();
    todo.makeTodoList();
    const taskBtn = document.querySelector('.task-btn');
    const taskInputCnt = document.querySelector('.taskinputcnt');
    const editBtns = document.querySelectorAll('.task-edit');
    const todoList = document.querySelector('.task-list-cnt');
    const contentset = document.querySelectorAll('.taskupdatecnt');
    const updateBtns = document.querySelectorAll('.update-btn');
    const updateCancelBtns = document.querySelectorAll('.cancelupdate-btn');

    taskBtn.addEventListener('click', ()=> {
        taskInputCnt.classList.toggle('visible');
    })
    const addBtn = document.querySelector('.add-btn');
        addBtn.addEventListener('click', taskAdd);
    const cancelBtn = document.querySelector('.cancel-btn');
        cancelBtn.addEventListener('click',taskCancel);
    
    editBtns.forEach(editBtn => { editBtn.addEventListener('click', (e)=>{
        let v =  e.target.dataset.index;
        for (let i = 0; i < contentset.length; i++) {
            contentset[i].className;
            if (contentset[i].classList[1] == v){
                contentset[i].classList.toggle('visible');
            }
        }
    })});
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
                clearTodoList()
                todo.makeTodoList();
            }
        }
        })
    })
    updateCancelBtns.forEach(updateCancelBtn => { updateCancelBtn.addEventListener('click', (e)=>{
        let v =  e.target.dataset.index;
            for (let i = 0; i < contentset.length; i++) {
                contentset[i].className;
                if (contentset[i].classList[1] == v){
                    contentset[i].classList.remove('visible');

                }
            }
        })

    })

})
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
    todo.makeTodoList();
}

function taskCancel(){
    const taskInputCnt = document.querySelector('.taskinputcnt');
    const taskInput = document.querySelector('#task');
    const dateInput = document.querySelector('#date');
    const priorityInput = document.querySelector('#priority');
    taskInput.value = '',dateInput.value = '', priorityInput.value='low';
    taskInputCnt.classList.remove('visible');
}

