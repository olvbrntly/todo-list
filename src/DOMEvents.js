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
 let currentProject;

//actual events based on id 
const events =(e) => {

    //+Add Task button
    if(e.target.id == "add-tasks"){
        console.log('added')
        createForm();
        e.target.disabled = true;
    }

    //submit button on form to make new task
    if(e.target.id == 'task-submit-btn'){
        e.preventDefault();
        let title = document.getElementById('task-name').value;
        let description = document.getElementById('task-description').value;

        if (title == ''){
            alert('please include a title');
            return;
        }
       
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

    //All Tasks link on side panel
    if(e.target.id == 'All-Task-Link'){
        currentProject = allTasks;
        const btn = document.getElementById('add-tasks');
        btn.style.visibility = 'visible'
        renderDOM(currentProject);
    }

    //Todays tasks link on side panel
    if(e.target.id == 'Today-Task-Link'){
        removeAddBtn();
        renderDOM(todaysTasks);
    }

    //this weeks task link on side panel
    if(e.target.id == 'This-Week-Task-Link'){
        removeAddBtn();
        renderDOM(thisWeeksTasks);
    }

    //checks off task - radio btn on side of individual task
    if(e.target.classList.contains('status')){
        if(e.target.textContent == 'radio_button_unchecked'){
            e.target.textContent = 'radio_button_checked'
        }
        else{
            e.target.textContent = 'radio_button_unchecked'
        }
    }

    

}

 export default DOMEvents