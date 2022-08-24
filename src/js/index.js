import '../css/normalize.css'
import '../css/style.css'

import { todo } from './task'
import { taskDisplay } from './display';

const navTaskBtn = document.querySelector(".task-nav");

navTaskBtn.addEventListener('click', () => {
    taskDisplay();
    const taskBtn = document.querySelector('.task-btn');
    const taskInputCnt = document.querySelector('.taskinputcnt');
    taskBtn.addEventListener('click', ()=> {
        taskInputCnt.classList.toggle('visible');
        const addBtn = document.querySelector('.add-btn');
            addBtn.addEventListener('click', taskAdd);
        const cancelBtn = document.querySelector('.cancel-btn');
            cancelBtn.addEventListener('click',taskCancel)
    })
})

function taskAdd(){
    const taskInput = document.querySelector('#task');
    const dateInput = document.querySelector('#date');
    const priorityInput = document.querySelector('#priority');
    todo.makeTodo(taskInput.value,dateInput.value, priorityInput.value);
    taskInput.value = '',dateInput.value = '', priorityInput.value='low';
}
function taskCancel(){
    const taskInput = document.querySelector('#task');
    const dateInput = document.querySelector('#date');
    const priorityInput = document.querySelector('#priority');
    taskInput.value = '',dateInput.value = '', priorityInput.value='low';
    taskInputCnt.classList.remove('visible');
}
