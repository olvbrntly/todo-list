 import {createForm, closeForm} from './form';
 import { createNewTask} from './todo';
 import Project from './project';
 import {renderDOM, removeAddBtn} from './site';
 
 // adds event listeners to whole document to account for dynamically added elements
const DOMEvents = () => {
    const d = document;
    d.addEventListener('click', events);
 }

 //Project Arrays- should probably be in something but for now they are here
 const allTasks = new Project('allTasks');
 const todaysTasks = new Project('todaysTasks');
 const thisWeeksTasks = new Project('thisWeeksTasks');

//actual events based on id 
const events =(e) => {

    
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
       
        const newTask = new createNewTask(title, description,'today');
        allTasks.addTask(newTask);
       
        closeForm();
        renderDOM(allTasks);
        
        if(newTask.getDate() ==='today'){
            todaysTasks.addTask(newTask);
        }
     
        console.log(todaysTasks.getTasks());

        let btn = document.getElementById('add-tasks');
        btn.disabled = false;
   
    }

    if(e.target.id == 'All-Task-Link'){
        const btn = document.getElementById('add-tasks');
        btn.style.visibility = 'visible'
        renderDOM(allTasks);
    }
    if(e.target.id == 'Today-Task-Link'){
        removeAddBtn();
        renderDOM(todaysTasks);
    }

    if(e.target.id == 'This-Week-Task-Link'){
        removeAddBtn();
        renderDOM(thisWeeksTasks);
    }

    

}

 export default DOMEvents