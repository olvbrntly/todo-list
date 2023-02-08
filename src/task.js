export default class Task{
    constructor(title, description, date, project){
        this.title = title,
        this.description = description,
        this.date = date
        this.projects = []
    }

    //set info functions
    setTitle(name){
        this.name = name
    }

    setDescription(description){
        this.description = description
    }

    setDate(date){
        this.date = date
    }

    addProjects(project){
        this.projects.push(project);
    }


    //get info functions
    getTitle() {
        return this.title
    }

    getDescription(){
        return this.description
    }

    getDate(){
        return this.date
    }  

    getProjects(){
        return this.projects
    }  

}

