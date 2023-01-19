import Task from './task';

export function createNewTask(title, description, star, date){
    let task = new Task(title, description, star, date);
    console.log(task)
    return task;
}

