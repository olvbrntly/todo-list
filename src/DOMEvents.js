 import {createForm, closeForm} from './form';
 import { createNewTask, makeToDo} from './todo';
 import Project from './project';
 import {addTasktoDOM, clearDOM} from './site';
 
 // adds event listeners to whole document to account for dynamically added elements
const DOMEvents = () => {
    const d = document;
    d.addEventListener('click', events);
 }

 //Project Arrays- should probably be in something but for now they are here
 const allTasks = new Project('allTasks');
 const todaysTasks = new Project('todaysTasks');
 const thisWeeksTasks = new Project('thisWeeksTasks');
 const starredTasks = new Project('starredTasks');
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
        let star = document.getElementById('task-star').checked;
        const newTask = new createNewTask(title, description, star,'today');
        allTasks.addTask(newTask);
        // console.log(allTasks.getTasks());
        // console.log(newTask.getTitle());
        addTasktoDOM(newTask);
        closeForm();
        
        if(newTask.getStar() == true){
            starredTasks.addTask(newTask);
        }

        if(newTask.getDate() ==='today'){
            todaysTasks.addTask(newTask);
        }
     
        console.log('starred'+ starredTasks.getTasks());
        console.log(todaysTasks.getTasks());

        let btn = document.getElementById('add-tasks');
        btn.disabled = false;
   
    }

    if(e.target.id == 'All-Task-Link'){
        clearDOM();
        console.log('link');
        let array = allTasks.getTasks();
        console.log(array);
        for(let i = 0; i < array.length; i++){
            addTasktoDOM();
        };
    }

    if(e.target.id == 'Starred-Task-Link'){
        clearDOM();
        console.log('link');
        let array = starredTasks.getTasks();
        console.log(array);
        for(let i = 0; i < array.length; i++){
            addTasktoDOM();
        };
    }


}

 export default DOMEvents