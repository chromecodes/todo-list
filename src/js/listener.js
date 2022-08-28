import { object } from './object';
import { makeProjectsList, makeTodoList } from './maketodolist';
import { projectTitleInput, taskDisplay } from './display';


function clearContant() {
    const display = document.querySelector('.display');
    const content = document.querySelector('.content');
    if(display.firstChild !== null){
        display.removeChild(content)
    };
}
function clearTodoList() {
    const todoList = document.querySelector('.task-list-cnt');
    const clearList = todoList.querySelectorAll('.task-cnt');
    for (let i = 0; i < clearList.length; i++) {
        todoList.removeChild(clearList[i])
    }    
}
function taskAdd(a, v){

    const taskInput = document.querySelector('#task');
    const dateInput = document.querySelector('#date');
    const priorityInput = document.querySelector('#priority');
        if(a.name === 'projects'){
        const titleInput = document.querySelector('#title');
         a.obj[v].title = titleInput.value ;
         object.addProjectValue(v, taskInput.value,dateInput.value, priorityInput.value);
        } else {
            object.makeTodo(taskInput.value,dateInput.value, priorityInput.value);
        }
    taskInput.value = '',dateInput.value = '', priorityInput.value='low';
    clearTodoList();
    makeTodoList(a,v);
    dynamicListeners(a,v);
}

function taskCancel(){
    const taskInputCnt = document.querySelector('.taskinputcnt');
    const taskInput = document.querySelector('#task');
    const dateInput = document.querySelector('#date');
    const priorityInput = document.querySelector('#priority');
    taskInput.value = '',dateInput.value = '', priorityInput.value='low';
    taskInputCnt.classList.remove('visible');
}

export const listeners = (()=>{

    const navListener =()=>{
            
        const navTaskBtn = document.querySelector(".task-nav");
            navTaskBtn.addEventListener('click', () => {
                clearContant();
                taskDisplay(object.objects[0]);
                makeTodoList(object.objects[0]);
                assign(object.objects[0]);
                dynamicListeners(object.objects[0])
            })

        const navProjects = document.querySelector('.projects-list-btn');
        navProjects.addEventListener('click', projectsTitleListCtrl )

        const navProjectsBtn = document.querySelector('.projects-add-btn')
        navProjectsBtn.addEventListener('click',projectsTitleInputCtrl)
    }

    
            
    return { navListener }

})();

const assign = (a, v) => {

    const taskBtn = document.querySelector('.task-btn');

    const taskInputCnt = document.querySelector('.taskinputcnt');
    const cancelBtn = document.querySelector('.cancel-btn');
    const addBtn = document.querySelector('.add-btn');
        taskBtn.addEventListener('click', ()=> {
            taskInputCnt.classList.toggle('visible');
        });
        addBtn.addEventListener('click', ()=>{
            taskAdd(a, v)
        });
        cancelBtn.addEventListener('click',taskCancel);
}

function dynamicListeners(a, v){

    const contentset = document.querySelectorAll('.taskupdatecnt');

    todoEdit();
    todoUpdate(a, v);
    todoupdateCancel();
    todoDelete(a,v);
}


function todoEdit() {
    const contentset = document.querySelectorAll('.taskupdatecnt');

    const editBtns = document.querySelectorAll('.task-edit');
    console.log(editBtns);
    editBtns.forEach(editBtn => { editBtn.addEventListener('click', (e)=>{
        let x =  e.target.dataset.index;
        console.log(1);
        console.log(contentset);
            for (let i = 0; i < contentset.length; i++) {
                console.log(contentset[i].className);
                if (contentset[i].classList[1] == x){
                    contentset[i].classList.toggle('visible');
                    console.log(2);

                };
            };
        });
    });
}
function todoUpdate(a, v) {
    const contentset = document.querySelectorAll('.taskupdatecnt');

    const updateBtns = document.querySelectorAll('.update-btn');        
    updateBtns.forEach(updateBtn => { updateBtn.addEventListener('click', (e)=>{
        console.log(1);
        let x =  e.target.dataset.index;
            for (let i = 0; i < contentset.length; i++) {

                if (contentset[i].classList[1] == x){
                    const taskUpdate = contentset[i].querySelector('#task-update');
                    const dateUpdate = contentset[i].querySelector('#date-update');
                    const priorityUpdate = contentset[i].querySelector('#priority-update');
                console.log(2);

                    if(a.name === 'projects'){
                        console.log(3);

                        a.obj[v].value[x].task = taskUpdate.value;
                        a.obj[v].value[x].date = dateUpdate.value;
                        a.obj[v].value[x].priority = priorityUpdate.value;
                    } else {
                        console.log(4);

                        a.obj[x].task = taskUpdate.value;
                        a.obj[x].date = dateUpdate.value;
                        a.obj[x].priority = priorityUpdate.value;
                    }
                    clearTodoList();
                    makeTodoList(a, v);
                    dynamicListeners(a,v)
                };
            };
        });
    });
}
function todoDelete(a,v) {
    const deleteBtns = document.querySelectorAll('.task-delete');

    deleteBtns.forEach(deleteBtn => { deleteBtn.addEventListener('click', (e)=>{
        console.log(1);
        let x =  e.target.dataset.index;
        if(a.name === 'projects'){
            removeProjectValue(v, x)
        } else {
            object.removeTodo(x);
        }
            clearTodoList();
            makeTodoList(a,v);
            dynamicListeners(a,v)
        });
    });
}

function todoupdateCancel (){

    const contentset = document.querySelectorAll('.taskupdatecnt');

    const updateCancelBtns = document.querySelectorAll('.cancelupdate-btn');
    updateCancelBtns.forEach(updateCancelBtn => { updateCancelBtn.addEventListener('click', (e)=>{
        let x =  e.target.dataset.index;
            for (let i = 0; i < contentset.length; i++) {
                contentset[i].className;
                if (contentset[i].classList[1] == x){
                    contentset[i].classList.remove('visible');
                };
            };
        });
    });
}


function projectsTitleListClear(){
    const tempTitleCnt =  document.querySelector('.projects-list-cnt');
    if(tempTitleCnt.firstChild !== null){
        const tempTitleCntChild =  document.querySelector('.projects-title-cnt');
        tempTitleCnt.removeChild(tempTitleCntChild);
    }
}


function projectsTitleListCtrl(){
    const tempCnt =  document.querySelector('.project-input-cnt');
    console.log(tempCnt.firstChild);
    if(tempCnt.firstChild !== null){
        const tempCntChild =  document.querySelector('.projectsinputcnt0');
        tempCnt.removeChild(tempCntChild)
    }
    const tempTitleCnt =  document.querySelector('.projects-list-cnt');
    console.log(tempTitleCnt.firstChild);
    if(tempTitleCnt.firstChild !== null){
        const tempTitleCntChild =  document.querySelector('.projects-title-cnt');
        tempTitleCnt.removeChild(tempTitleCntChild)
    } else {
        makeProjectsList();
        projectOpeners();
    }
}

function projectsTitleInputCtrl(){
    const tempTitleCnt =  document.querySelector('.projects-list-cnt');
    console.log(tempTitleCnt.firstChild);
    if(tempTitleCnt.firstChild === null){
        makeProjectsList();
    }

    const tempCnt =  document.querySelector('.project-input-cnt');
    console.log(tempCnt.firstChild);
    if(tempCnt.firstChild !== null){
        const tempCntChild =  document.querySelector('.projectsinputcnt0');
        tempCnt.removeChild(tempCntChild)
    } else {
        projectTitleInput();
        const projectsTitleInputAddBtn = document.querySelector('#project-title-add');
        projectsTitleInputAddBtn.addEventListener('click', ()=>{
            const projectsTitleInput = document.querySelector('#project-title');
            console.log(projectsTitleInput.value);
            object.addProjectTitle(projectsTitleInput.value);
            projectsTitleInput.value = '';
            projectsTitleListClear();
            makeProjectsList();
            projectOpeners();
            
            }
        );
        const projectsTitleInputCloseBtn = document.querySelector('#project-title-cancel');
        projectsTitleInputCloseBtn.addEventListener('click',()=>{
            const tempCnt =  document.querySelector('.project-input-cnt');
            const tempCntChild =  document.querySelector('.projectsinputcnt0');
            tempCnt.removeChild(tempCntChild);
            } 
        );
    }; 
}

function projectOpeners(){
    const projects = document.querySelectorAll('.project-title');
    projects.forEach(project => project.addEventListener('click',(e)=>{
        let v =  e.target.dataset.index;
        clearContant();
        taskDisplay(object.objects[1],v);
        assign();
        makeTodoList(object.objects[1].obj[v].value);


    }))
}