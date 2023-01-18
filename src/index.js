import addTasktoDOM from "./site";
import getNewTask from './task';
import createForm from "./form";
import Task from './task';
import createNewTask from './task'
import DOMEvents from './DOMEvents'

//puts the whole thing together


// const newTask = new createNewTask('study','description!',true,'today');
// const myTask = new createNewTask('shop','get grioceries',false,'tomorrow');
// const yourTask = new createNewTask('work','go to work',true,'this weekend');



document.addEventListener('DOMContentLoaded', () =>{
    DOMEvents();
    console.log('DOM thing')
})







// allTasks.push(newTask);
// console.log(allTasks[0].getTitle());
// console.log(allTasks)
// console.log(newTask.getDate());



//when the add task button is clicked a form pops up
//user fills out form
//form info is used to dunamically fill out the createNewTask(info here)
//that new task is pushed to the taskArray Array
//that task is assigned an id which is equal to its index in the array
//if starred is true task is pushed to starred array
//if due date is today, task is pushed to the today array
//is due is sometime this week then task is pushed to this week array

//by default all tasks are renderd to dom from the taskArray
//if all tasks is clicked taskArray is displayed on the dom

//if today is clicked dom display comes from the today array
//is this week is clicked dom display comes from the this week array
//if starred is clicked dom display comes from the starred array

//project functionality will be added after

