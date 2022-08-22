export const taskDisplay = ()=>{

    const display = document.getElementById("display");

        const content = document.createElement('div');
        content.setAttribute("class","content");
            
            const taskTitle = document.createElement('div');
            taskTitle.setAttribute("class","task-title");
            taskTitle.textContent = "Task's";


        content.appendChild(taskTitle);

            const taskBtn = document.createElement('button');
            taskBtn.setAttribute("class","task-btn");

        content.appendChild(taskBtn);
            
            const taskInputCnt = document.createElement('div');
            taskInputCnt.setAttribute("class","taskinputcnt");

                const taskInput = document.createElement('input');
                taskInput.setAttribute("type","text");
                taskInput.setAttribute("id","task");
                taskInput.setAttribute("placeholder","Task");

            taskInputCnt.appendChild(taskInput);

                const dateInput = document.createElement('input');
                dateInput.setAttribute("type","date");
                dateInput.setAttribute("id","date");

            taskInputCnt.appendChild(dateInput);

                const priorityInput = document.createElement('select');
                priorityInput.setAttribute("id","priority");

                    const priorityInputOption1 = document.createElement('option');
                    priorityInputOption1.setAttribute("value","low");
                    priorityInputOption1.textContent = "Not at all important";

                priorityInput.appendChild(priorityInputOption1);

                    const priorityInputOption2 = document.createElement('option');
                    priorityInputOption2.setAttribute("value","low");
                    priorityInputOption2.textContent = "It's some important ";

                priorityInput.appendChild(priorityInputOption2);

                    const priorityInputOption3 = document.createElement('option');
                    priorityInputOption3.setAttribute("value","low");
                    priorityInputOption3.textContent = "It's very important";

                priorityInput.appendChild(priorityInputOption3);

            taskInputCnt.appendChild(priorityInput);

                const taskAddBtn =  document.createElement('button');
                taskAddBtn.setAttribute("class","add-btn");
                taskAddBtn.textContent = "Add";

            taskInputCnt.appendChild(taskAddBtn);

                const taskCloseBtn =  document.createElement('button');
                taskCloseBtn.setAttribute("class","cancel-btn");
                taskCloseBtn.textContent = "Cancel";

            taskInputCnt.appendChild(taskCloseBtn);

        content.appendChild(taskInputCnt);

    display.appendChild(content);
}