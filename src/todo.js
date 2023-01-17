import Task from './task';
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
console.log(taskArray[1].getTitle);

export default createNewTask;