
class Project{
    constructor(name){
        this.name = name
        this.tasks =[]
    }

    setName(name){
        this.name = name
        }

    setTasks(tasks){
        this.tasks= tasks
    }

    getName(){
        return this.name
    }

    getTasks(){
        return this.tasks
    }

    getTask(i){
        return this.task[i].getTitle()
    }
}