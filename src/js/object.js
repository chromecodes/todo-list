export const todo = (() =>{
    const todos = [{date: "2022-08-24" , priority: "low", task : "ca"},{date: "2019-08-24" , priority: "high", task : "caaaaaaa"}];

    const createTodo = (task, date, priority) => {
        return ({task, date, priority})
    };

    const makeTodo = (task, date, priority) => { 
        todos.push(createTodo(task, date, priority))
        console.log(todos);
    };
    const removeTodo = (i) => {
        todos.splice(i,1);
    }
    return { todos, makeTodo, removeTodo}
})();
