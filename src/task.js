export default class Task{
    constructor(title, description, date,){
        this.title = title,
        this.description = description,
        this.date= date
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

}

