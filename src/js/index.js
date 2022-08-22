import '../css/normalize.css'
import '../css/style.css'

import { todo } from './task'
import { taskDisplay } from './display';

const navTaskBtn = document.querySelector(".task-nav-btn");

navTaskBtn.addEventListener('click', () => {
    taskDisplay()
})


