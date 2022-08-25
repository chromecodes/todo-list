export const todo = (() =>{
    const todos = [{date: "2022-08-24" , priority: "low", task : "ca"},{date: "2022-08-24" , priority: "low", task : "ca"}];

    const createTodo = (task, date, priority) => {
        return ({task, date, priority})
    };

    const makeTodo = (task, date, priority) => { 
        todos.push(createTodo(task, date, priority))
        console.log(todos);
    };
    const makeTodoList = () => {

        const temp = document.querySelector('.task-list-cnt')

            for (let i = 0; i < todos.length; i++) {
        
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

                        taskElementCnt1.appendChild(taskCheckLbl);    

                            const taskContent = document.createElement('span');
                            taskContent.setAttribute( 'class','task-content');
                            taskContent.textContent = todos[i].task;

                        taskElementCnt1.appendChild(taskContent);    

                    taskElementCnt0.appendChild(taskElementCnt1);    

                        const taskElementCnt2 = document.createElement('div');
                        taskElementCnt2.setAttribute( 'class','task-cnt2');

                            const taskDate = document.createElement('span');
                            taskDate.setAttribute( 'class','task-date');
                            taskDate.textContent = todos[i].date;

                        taskElementCnt2.appendChild(taskDate);    

                            const taskEdit = document.createElement('button');
                            taskEdit.setAttribute( 'class','task-edit');
                            taskEdit.setAttribute( 'index',`${i}`);
                        taskElementCnt2.appendChild(taskEdit);    

                            const taskDelete = document.createElement('button');
                            taskDelete.setAttribute( 'class','task-delete');
                            taskDelete.setAttribute( 'index',`${i}`);

                        taskElementCnt2.appendChild(taskDelete);    

                    taskElementCnt0.appendChild(taskElementCnt2);   
                     
                taskElementCnt.appendChild(taskElementCnt0);    


                    let tempHr = document.createElement("div");
                    tempHr.setAttribute("class","task-span");

                taskElementCnt.appendChild(tempHr);    

            temp.appendChild(taskElementCnt);    

        
        }

    }   

    return { todos, makeTodo, makeTodoList }
})();
