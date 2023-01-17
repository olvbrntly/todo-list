import addTasktoDOM from "./site";
import getNewTask from './task';

import Task from './task';
import createNewTask from './task'
//puts the whole thing together

let taskArray = [];

let study = new Task('study bio', 'bio study description','true','today');

function createNewTask(title, description, star, date){
    let task = new Task(title, description, star, date);

    taskArray.push(task);
    return taskArray
}

console.log(study.getTitle());
console.log(study);
taskArray.push(study);
console.log('in the array');
console.log(taskArray[0].getDescription());
console.log(taskArray);

console.log('after new task')
createNewTask('study math','im gonna study math','true','tomorrow');
console.log(taskArray[1].getDescription());






//whichever button (projects)is active is the array that is populated.
//every task is put into the all task array
//if a task has star = true it is put in the starred array
//if a task id due today it is put in the due today array
//if a task is due this week it is put into the due today array.
//creating  project creates a new array
//if a task is added while project array is active it is added to that projects array

//which ever project is active the Dom is re-rendered to include that array.

//when you click add task
//a form appears
//the user inputs information
//that info is saved into the object, the new object based on the task class,
//that object is saved into the relevant array


//when you click add project
//a form opens
//user fills out the project name
//a new array is formed to hold tasks
















// event listener for each button on project

// all tasks button


 
// today button

// this week button

// starred button

// starred.forEach(task=>{
//    task.addEventListener('click',(e) =>{
//       e.target.classList.toggle('starclicked')
//       })

// });
// add project button

// add task button

//complete task button
// completed.forEach(task=>{
//    task.addEventListener('click',(e) =>{
//       if(e.target.textContent === 'radio_button_unchecked'){
//          e.target.textContent ='radio_button_checked';
//       }
//       else{
//          e.target.textContent = 'radio_button_unchecked'
//       }
// })
// });