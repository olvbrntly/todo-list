export default class Task{
    constructor(title, description, star, date,){
        this.title = title,
        this.description = description,
        this.star = Boolean(star);
        this.date= date
    }

    //set info functions
    setTitle(name){
        this.name = name
    }

    setDescription(description){
        this.description = description
    }

    setStar(star){
        this.star = star
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
    
    getStar(){
        return this.star
    }

    getDate(){
        return this.date
    }  

}

