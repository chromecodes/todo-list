import { format, addDays } from 'date-fns'

let newDate = format(addDays(new Date().setHours(0,0,0,0), 7), 'yyyy-MM-dd');


console.log(newDate);

export const object = (() =>{
    const objects = [   
        {name: "Tasks", 
         obj:[
                {  task : "HI! THERE. HOW ARE YOU!", date:`${format(new Date(), 'yyyy-MM-dd')}`,priority: "low",completed : false },
                {  task : "HOPE YOU ARE DOING WELL", date: `${format(addDays(new Date().setHours(0,0,0,0), 1), 'yyyy-MM-dd')}`, priority: "mild", completed : false },
                {  task : "KEEP GOING. YOU CAN DO IT", date: `${format(addDays(new Date().setHours(0,0,0,0), 2), 'yyyy-MM-dd')}`, priority: "high", completed : false },
             ]
        },
         {name: 'projects', 
          obj:[{ title: 'GYM',
                 value:[
                        {task : "Upper Day", date: `${format(new Date(), 'yyyy-MM-dd')}`, priority: "high",  completed : false},
                        {task : "Lower Day", date: `${format(addDays(new Date().setHours(0,0,0,0), 1), 'yyyy-MM-dd')}`, priority: "high", completed : false},
                        {task : "Rest Day", date: `${format(addDays(new Date().setHours(0,0,0,0), 2), 'yyyy-MM-dd')}`, priority: "high", completed : false},
                        
                        {task : "Upper Day", date: `${format(addDays(new Date().setHours(0,0,0,0), 3), 'yyyy-MM-dd')}`, priority: "high", completed : false},
                        {task : "Lower Day", date: `${format(addDays(new Date().setHours(0,0,0,0), 4), 'yyyy-MM-dd')}`, priority: "high", completed : false},
                        {task : "Rest Day", date: `${format(addDays(new Date().setHours(0,0,0,0), 5), 'yyyy-MM-dd')}`, priority: "high", completed : false},

                       ]
                },
                { title: 'Coding',
                value:[
                        {task : "Complete Project Todo-List", date: `2022-09-02`, priority: "mild",  completed : true},
                        {task : "Daily Learning", date: `${format(new Date(), 'yyyy-MM-dd')}`, priority: "mild",  completed : false},
                        {task : "Complete Javascript", date:`${format(addDays(new Date().setHours(0,0,0,0), 7), 'yyyy-MM-dd')}`, priority: "high",  completed : false},
                        {task : "Start React", date: `${format(addDays(new Date().setHours(0,0,0,0), 8), 'yyyy-MM-dd')}`, priority: "mild", completed : false}
                      ]
                },
                { title: 'Books to read',
                  value:[
                            {task : "Chosen Ones", date: `${format(new Date(), 'yyyy-MM-dd')}`, priority: "low",  completed : true},
                            {task : "Atomic Habits", date: `${format(addDays(new Date().setHours(0,0,0,0), 9), 'yyyy-MM-dd')}`, priority: "low", completed : false}
                        ]
                },
            ]
        },
          {name: 'Controls', 
           obj:['All-Tasks','Today', 'Week','Important','Completed']},
        ]

    const createTodo = (task, date , priority, completed = false) => {
        return ({task, date, priority, completed})
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
    const addProjectValue = (v, task, date, priority, completed = false) =>{
        objects[1].obj[v].value.push(createTodo(task, date, priority, completed))
    }
    const removeProjectValue = (v, i) =>{
        objects[1].obj[v].value.splice(i,1);
    }
    const removeProject = (i) =>{
        objects[1].obj.splice(i,1);
    }
    return { objects, makeTodo, removeTodo, addProjectTitle, addProjectValue, removeProjectValue, removeProject}
})();



