import { todo } from './object';

export const makeTodoList = () => {
    console.log(todo.todos);

    const temp = document.querySelector('.task-list-cnt')


        for (let i = 0; i < todo.todos.length; i++) {
    
            const taskElementCnt = document.createElement('div');
            taskElementCnt.setAttribute( 'class','task-cnt');

                const taskCheck = document.createElement('input');
                taskCheck.setAttribute( 'class','task-check');
                taskCheck.setAttribute( 'type','checkbox');
                taskCheck.setAttribute( 'id',`task-check-${i}`);
                
            taskElementCnt.appendChild(taskCheck);    

                const taskElementCnt0 = document.createElement('div');
                    taskElementCnt0.setAttribute( 'class','task-cnt0');
                
                    const taskElementCnt1 = document.createElement('div');
                    taskElementCnt1.setAttribute( 'class','task-cnt1');
                
                        const taskCheckLbl = document.createElement('label');
                        taskCheckLbl.setAttribute( 'class','task-check-lbl');
                        taskCheckLbl.setAttribute( 'for',`task-check-${i}`);
                        if (todo.todos[i].priority == 'low') {
                            taskCheckLbl.style.color = 'var(--secondary-drgreen-accent)'
                        } else if (todo.todos[i].priority == 'high'){
                            taskCheckLbl.style.color = 'var(--secondary-red-accent)'
                        } else{
                            taskCheckLbl.style.color = 'var(--secondary-blue-accent)'
                        }

                    taskElementCnt1.appendChild(taskCheckLbl);    

                        const taskContent = document.createElement('span');
                        taskContent.setAttribute( 'class','task-content');
                        taskContent.textContent = todo.todos[i].task;

                    taskElementCnt1.appendChild(taskContent);    

                taskElementCnt0.appendChild(taskElementCnt1);    

                    const taskElementCnt2 = document.createElement('div');
                    taskElementCnt2.setAttribute( 'class','task-cnt2');

                        const taskDate = document.createElement('span');
                        taskDate.setAttribute( 'class','task-date');
                        taskDate.textContent = todo.todos[i].date;

                    taskElementCnt2.appendChild(taskDate);    

                        const taskEdit = document.createElement('button');
                        taskEdit.setAttribute( 'class','task-edit');
                        taskEdit.setAttribute( 'data-index',`${i}`);
                    taskElementCnt2.appendChild(taskEdit);    

                        const taskDelete = document.createElement('button');
                        taskDelete.setAttribute( 'class','task-delete');
                        taskDelete.setAttribute( 'data-index',`${i}`);

                    taskElementCnt2.appendChild(taskDelete);    

                taskElementCnt0.appendChild(taskElementCnt2);   
                 
            taskElementCnt.appendChild(taskElementCnt0);    

                let tempHr = document.createElement("div");
                tempHr.setAttribute("class","task-span");

            taskElementCnt.appendChild(tempHr);    

                const taskUpdateCnt = document.createElement('div');
                taskUpdateCnt.setAttribute("class",`taskupdatecnt ${i}`);
                    
                    const taskUpdateCnt0 = document.createElement('div');
                    taskUpdateCnt0.setAttribute("class","taskupdatecnt0");
    
                        const taskUpdateCnt1 = document.createElement('div');
                        taskUpdateCnt1.setAttribute("class","taskupdatecnt1");
    
                            const taskUpdate = document.createElement('input');
                            taskUpdate.setAttribute("type","text");
                            taskUpdate.setAttribute("id","task-update");
                            taskUpdate.value = todo.todos[i].task;
    
                        taskUpdateCnt1.appendChild(taskUpdate);
    
                            const dateUpdate = document.createElement('input');
                            dateUpdate.setAttribute("type","date");
                            dateUpdate.setAttribute("id","date-update");
                            dateUpdate.value = todo.todos[i].date;

                        taskUpdateCnt1.appendChild(dateUpdate);
    
                            const priorityUpdate = document.createElement('select');
                            priorityUpdate.setAttribute("id","priority-update");
    
                                const priorityUpdateOption1 = document.createElement('option');
                                priorityUpdateOption1.setAttribute("value","low");
                                priorityUpdateOption1.textContent = "Not at all important";
                                if(todo.todos[i].priority == priorityUpdateOption1.value){
                                priorityUpdateOption1.setAttribute("selected","");
                                }
    
                            priorityUpdate.appendChild(priorityUpdateOption1);
    
                                const priorityUpdateOption2 = document.createElement('option');
                                priorityUpdateOption2.setAttribute("value","mild");
                                priorityUpdateOption2.textContent = "It's some important ";
                                if(todo.todos[i].priority == priorityUpdateOption2.value){
                                    priorityUpdateOption2.setAttribute("selected","");
                                }
    
                            priorityUpdate.appendChild(priorityUpdateOption2);
    
                                const priorityUpdateOption3 = document.createElement('option');
                                priorityUpdateOption3.setAttribute("value","high");
                                priorityUpdateOption3.textContent = "It's very important";
                                if(todo.todos[i].priority == priorityUpdateOption3.value){
                                    priorityUpdateOption3.setAttribute("selected","");
                                }
    
                            priorityUpdate.appendChild(priorityUpdateOption3);
    
                        taskUpdateCnt1.appendChild(priorityUpdate);
    
                    taskUpdateCnt0.appendChild(taskUpdateCnt1);
    
                        const taskUpdateCnt2 = document.createElement('div');
                        taskUpdateCnt2.setAttribute("class","taskupdatecnt2");
                        
                            const taskAddBtn =  document.createElement('button');
                            taskAddBtn.setAttribute("class","update-btn");
                            taskAddBtn.setAttribute( 'data-index',`${i}`);
                            taskAddBtn.textContent = "Update";

    
                        taskUpdateCnt2.appendChild(taskAddBtn);
    
                            const taskCloseBtn =  document.createElement('button');
                            taskCloseBtn.setAttribute("class","cancelupdate-btn");
                            taskCloseBtn.setAttribute( 'data-index',`${i}`);
                            taskCloseBtn.textContent = "Cancel";
    
                        taskUpdateCnt2.appendChild(taskCloseBtn);
                        
                    taskUpdateCnt0.appendChild(taskUpdateCnt2);
    
                taskUpdateCnt.appendChild(taskUpdateCnt0);
    
            taskElementCnt.appendChild(taskUpdateCnt);

        temp.appendChild(taskElementCnt);    
    }
}   
