 import createForm from './form';
 import { createNewTask } from './todo';
 import addTasktoDOM from './site';
 
 // adds event listeners to whole document to account for dynamically added elements
const DOMEvents = () => {
    const d = document;
    d.addEventListener('click', events);
 }

//actual events based on id 
const events =(e) => {


    if(e.target.id == "add-tasks"){
        console.log('added')
        createForm();
    }

    if(e.target.id == 'task-submit-btn'){
        console.log('submit');
        e.preventDefault();
        let title = document.getElementById('task-name').value;
        let description = document.getElementById('task-description').value;
        const newTask = new createNewTask(title, description, true,'today');
        console.log(newTask.getTitle());
        addTasktoDOM(newTask);
        

    }





}
 export default DOMEvents
