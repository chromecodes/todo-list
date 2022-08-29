import '../css/normalize.css';
import '../css/style.css';

import { object } from './object';
import { taskDisplay, projectsList } from './display';
import { makeTodoList } from './maketodolist';
import { listeners } from './listener';

listeners.navListener()
console.log( object);
console.log( object.objects[0].name);
console.log( object.objects[1].name);

console.log( object.objects[0].obj[0].task);
console.log( object.objects[0].obj[1].task);
console.log( object.objects[0].obj[0].date);

console.log( object.objects[1]);
console.log( object.objects[1].obj[0].title);
console.log( object.objects[1].obj[1].title);

console.log( object.objects[1].obj[0].value[1].task);

// console.log( object.objects[0][0].obj[0]);
// console.log( object.objects[1]);


let date1 = new Date().toLocaleDateString()
// date1 = date1.toLocaleDateString()
console.log(date1);
// .toLocalDateString()