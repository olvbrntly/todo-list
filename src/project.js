
export default class Project{
    constructor(name){
        this.name = name
        this.tasks =[]
    }

    setName(name){
        this.name = name
        }

    setTask(task){
        this.tasks.push(task);
    }

    getName(){
        return this.name
    }

    getTasks(){
        return this.tasks
    }

    getTaskName(i){
        return this.task[i].getTitle()
    }
}