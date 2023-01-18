 import {createForm, closeForm} from './form';
 import { createNewTask, makeToDo} from './todo';
 import Project from './project';
 import addTasktoDOM from './site';
 
 // adds event listeners to whole document to account for dynamically added elements
const DOMEvents = () => {
    const d = document;
    d.addEventListener('click', events);
 }

//actual events based on id 
const events =(e) => {

    const allTasks = new Project(allTasks);
    const todaysTasks = new Project(todaysTasks);
    const thisWeeksTasks = new Project(thisWeeksTasks);
    const starredTasks = new Project(starredTasks);

    
    if(e.target.id == "add-tasks"){
        console.log('added')
        createForm();
        e.target.disabled = true;
    }

    if(e.target.id == 'task-submit-btn'){
        console.log('submit');
        e.preventDefault();
        let title = document.getElementById('task-name').value;
        let description = document.getElementById('task-description').value;
        const newTask = new createNewTask(title, description, false,'today');
        console.log(newTask.getTitle());
        allTasks.setTask(newTask);
        addTasktoDOM(newTask)
        closeForm();
        console.log(allTasks.getTasks());
        

        if(newTask.getStar() == true){
            starredTasks.setTask(newTask);
        }

        if(newTask.getDate() ==='today'){
            todaysTasks.setTask(newTask);
        }
     

        let btn = document.getElementById('add-tasks');
        btn.disabled = false;
   

      
    }
}

 export default DOMEvents
