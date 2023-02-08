import Task from './task';

export function createNewTask(title, description, date, project){
    let task = new Task(title, description, date, project);
    console.log(task)
    return task;
}

