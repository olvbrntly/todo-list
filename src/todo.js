import Task from './task';
//puts the whole thing together

export function createNewTask(title, description, star, date){
    let task = new Task(title, description, star, date);
    console.log(task)
    return task;
}