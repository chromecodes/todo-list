export const object = (() =>{
    const objects = [   
        {name: "Task's", obj:[{date: "2022-08-24" , priority: "low", task : "ca"},{date: "2019-08-24" , priority: "high", task : "caaaaaaa"}]},
                         {name: 'projects', obj:[{ title: 'GYM',value:[{date: "2022-08-24" , priority: "low", task : "ca"},{date: "2019-08-24" , priority: "high", task : "caaaaaaa"}]},{ title: 'Books to read',value:[]}]}
                    ]

    const createTodo = (task, date, priority) => {
        return ({task, date, priority})
    };

    const makeTodo = (task, date, priority) => { 
        objects[0].obj.push(createTodo(task, date, priority))
        console.log(objects);
    };
    const removeTodo = (i) => {
        objects[0].obj.splice(i,1);
    }
    const createProject = (title, value = []) =>{
        return ({ title, value})
    }
    const addProjectTitle = (title)=>{
        objects[1].obj.push(createProject(title))
    }
    const addProjectValue = (v, task, date, priority) =>{
        objects[1].obj[v].value.push(createTodo(task, date, priority))
    }
    const removeProjectValue = (v, i) =>{
        objects[1].obj[v].value.splice(i,1);

    }
    return { objects, makeTodo, removeTodo, addProjectTitle, addProjectValue, removeProjectValue}
})();



// export const projectObject = (() =>{
//     const obje = [{date: "2022-08-24" , priority: "low", task : "ca"},{date: "2019-08-24" , priority: "high", task : "caaaaaaa"}];

//     const createTodo = (task, date, priority) => {
//         return ({task, date, priority})
//     };

//     const makeTodo = (task, date, priority) => { 
//         todos.push(createTodo(task, date, priority))
//         console.log(todos);
//     };
//     const removeTodo = (i) => {
//         todos.splice(i,1);
//     }
//     return { todos, makeTodo, removeTodo}
// })();