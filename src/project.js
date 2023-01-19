import { addTasktoDOM } from "./site";
export default class Project{
    constructor(name){
        this.name = name
        this.tasks =[]
    }

    setName(name){
        this.name = name
        }

    setTask(task){
        this.tasks.push(JSON.stringify(task));
    }

    getName(){
        return this.name
    }

    getTasks(){
        return this.tasks
    }

    addTask(newTask){
        this.tasks.push(newTask);
    }

   
}