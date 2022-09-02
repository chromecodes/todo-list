
export const projectTitleInput = () =>{
    
    const projectTitleInputCnt = document.querySelector('.project-input-cnt');

        const projectTitleInputCnt0 = document.createElement('div');
        projectTitleInputCnt0.setAttribute("class","projectsinputcnt0");
                
                const projectTitleInput = document.createElement('input');
                projectTitleInput.setAttribute("type","text");
                projectTitleInput.setAttribute("id","project-title");
                projectTitleInput.setAttribute("placeholder","Project Title");

            projectTitleInputCnt0.appendChild(projectTitleInput);
            
                const projectTitleAddBtn =  document.createElement('button');
                projectTitleAddBtn.setAttribute("id","project-title-add");
                projectTitleAddBtn.setAttribute("class","add-btn");
                projectTitleAddBtn.textContent = "Add";

            projectTitleInputCnt0.appendChild(projectTitleAddBtn);

                const projectTitleCloseBtn =  document.createElement('button');
                projectTitleCloseBtn.setAttribute("id","project-title-cancel");
                projectTitleCloseBtn.setAttribute("class","cancel-btn");
                projectTitleCloseBtn.textContent = "Cancel";

            projectTitleInputCnt0.appendChild(projectTitleCloseBtn);
                        
    projectTitleInputCnt.appendChild(projectTitleInputCnt0);
}

export const taskDisplay = (val, i)=>{

    const display = document.getElementById("display");

        const content = document.createElement('div');
        content.setAttribute("class","content");            

            const contentHeader = document.createElement('div');
            contentHeader.setAttribute("class","content-header");

                const taskTitle = document.createElement('div');
                taskTitle.setAttribute("class","task-title");
                if(val.name === 'projects'){
                    taskTitle.textContent = val.obj[i].title;                    
                } else if (val.name === 'Controls'){
                    taskTitle.textContent = val.obj[i];                    
                } else {
                    taskTitle.textContent = val.name;
                }

            contentHeader.appendChild(taskTitle);

            if(val.name !== 'Controls') {
                const contentHeader2 = document.createElement('div');
                contentHeader2.setAttribute("class","task-control");

                    const taskBtn = document.createElement('button');
                    taskBtn.setAttribute("class","task-btn");

                contentHeader2.appendChild(taskBtn);

                    if (val.name === 'projects'){

                        const projectDelete = document.createElement('button');
                        projectDelete.setAttribute( 'class','project-delete');
                        projectDelete.setAttribute( 'id','project-delete');
                        projectDelete.setAttribute( 'data-index',`${i}`);

                        contentHeader2.appendChild(projectDelete);
                    }

            contentHeader.appendChild(contentHeader2);
            
            }
        content.appendChild(contentHeader);    

            let tempHr = document.createElement("div");
            tempHr.setAttribute("class","title-span");

        content.appendChild(tempHr);    



            const taskInputCnt = document.createElement('div');
            taskInputCnt.setAttribute("class","taskinputcnt");
                
                const taskInputCnt0 = document.createElement('div');
                taskInputCnt0.setAttribute("class","taskinputcnt0");

                
                    const taskInputCnt1 = document.createElement('div');
                    taskInputCnt1.setAttribute("class","taskinputcnt1");

                        if(val.name === 'projects'){
                            const titleEdit = document.createElement('input');
                            titleEdit.setAttribute("type","text");
                            titleEdit.setAttribute("id","title");
                            titleEdit.value = val.obj[i].title;
                        taskInputCnt1.appendChild(titleEdit);
                        }

                        const taskInput = document.createElement('input');
                        taskInput.setAttribute("type","text");
                        taskInput.setAttribute("id","task");
                        taskInput.setAttribute("placeholder","Task");

                    taskInputCnt1.appendChild(taskInput);

                        const dateInput = document.createElement('input');
                        dateInput.setAttribute("type","date");
                        dateInput.setAttribute("id","date");
                        dateInput.valueAsDate = new Date();

                    taskInputCnt1.appendChild(dateInput);

                        const priorityInput = document.createElement('select');
                        priorityInput.setAttribute("id","priority");

                            const priorityInputOption1 = document.createElement('option');
                            priorityInputOption1.setAttribute("value","low");
                            priorityInputOption1.textContent = "Not at all important";

                        priorityInput.appendChild(priorityInputOption1);

                            const priorityInputOption2 = document.createElement('option');
                            priorityInputOption2.setAttribute("value","mild");
                            priorityInputOption2.textContent = "It's some important ";

                        priorityInput.appendChild(priorityInputOption2);

                            const priorityInputOption3 = document.createElement('option');
                            priorityInputOption3.setAttribute("value","high");
                            priorityInputOption3.textContent = "It's very important";

                        priorityInput.appendChild(priorityInputOption3);

                    taskInputCnt1.appendChild(priorityInput);

                taskInputCnt0.appendChild(taskInputCnt1);

                    const taskInputCnt2 = document.createElement('div');
                    taskInputCnt2.setAttribute("class","taskinputcnt2");

                        const taskAddBtn =  document.createElement('button');
                        taskAddBtn.setAttribute("class","add-btn");
                        taskAddBtn.textContent = "Add";

                    taskInputCnt2.appendChild(taskAddBtn);

                        const taskCloseBtn =  document.createElement('button');
                        taskCloseBtn.setAttribute("class","cancel-btn");
                        taskCloseBtn.textContent = "Cancel";

                    taskInputCnt2.appendChild(taskCloseBtn);
                    
                taskInputCnt0.appendChild(taskInputCnt2);

            taskInputCnt.appendChild(taskInputCnt0);

        content.appendChild(taskInputCnt);
            const taskListCnt = document.createElement("div");
                
            taskListCnt.setAttribute("class","task-list-cnt");
        content.appendChild(taskListCnt);    

    display.appendChild(content);
}
