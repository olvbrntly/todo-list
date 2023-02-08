 import {createForm, closeForm, createCustomProject, closeProject} from './form';
 import { createNewTask} from './todo';
 import Project from './project';
 import {renderDOM, renderProjectDiv, removeAddBtn} from './site';
 import {format,isToday,parseISO, isThisWeek} from 'date-fns';
 
 // adds event listeners to whole document to account for dynamically added elements
const DOMEvents = () => {
    const d = document;
    d.addEventListener('click', events);
 }

 //Project Arrays- should probably be in something but for now they are here
 const allTasks = new Project('allTasks');
 let projectArray = [];
 let currentProject= allTasks;

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
        let datePicker = document.getElementById('task-date').value;
        let date = format(parseISO(datePicker), 'MM/dd/yyyy');
        let project = currentProject;


        console.log(date)
    
        if (title == ''){
            alert('please include a title');
            return;
        }
       
        const newTask = new createNewTask(title, description, date,project);
        
        if (currentProject != allTasks){
            allTasks.addTask(newTask);
            currentProject.addTask(newTask);
            newTask.addProjects(allTasks);
            newTask.addProjects(currentProject);

        }else{
            allTasks.addTask(newTask);
            newTask.addProjects(allTasks);
        }
       
        console.log(newTask.getProjects())
        closeForm();
        renderDOM(currentProject);
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
    //displays all the tasks with due date of today
    if(e.target.id == 'Today-Task-Link'){
        removeAddBtn();
       const todaysTasks = new Project('todaysTasks');
       (allTasks.tasks).forEach(element => {
            let thisDate = new Date(element.date);
            if(isToday(thisDate)==true){
                todaysTasks.addTask(element);
            }
       });
       renderDOM(todaysTasks);
    }

    //this weeks task link on side panel
    //displays all tasks with due date within the week sun-sat
    if(e.target.id == 'This-Week-Task-Link'){
        removeAddBtn();
        const thisWeeksTasks = new Project('thisWeeksTasks');
        (allTasks.tasks).forEach(element => {
             let thisDate = new Date(element.date);
             if(isThisWeek(thisDate)==true){
                 thisWeeksTasks.addTask(element);
             }
        });
        renderDOM(thisWeeksTasks);
    }

    //add project button - opens a 'form' to create project name
    if(e.target.id == 'add-project'){
        createCustomProject();
        e.target.disabled = true;
    }

    if(e.target.id == 'custom-project-submit'){
        let projectName = document.getElementById('custom-project-name').value;

        const newProject = new Project(projectName);
        projectArray.push(newProject);

        renderProjectDiv(projectArray);
        closeProject();

        const projectbtn = document.getElementById('add-project');
        projectbtn.disabled = false;
    }

    if(e.target.classList.contains('createdProjectLink')){
        const projectName = e.target.textContent;
        //sets current project = the created project 
        for(let i = 0; i < projectArray.length; i++){
            if(projectArray[i].getName() == projectName){
                currentProject = projectArray[i];
            }
        }
        renderDOM(currentProject);
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

    //task delete button
    if(e.target.classList.contains('task-delete')){
        const taskToDelete = e.target.parentNode.parentNode;
        let allTasksTasks = allTasks.getTasks();
        let taskToDeleteIndex = allTasksTasks.findIndex(task => task.getTitle() == taskToDelete.dataset.title);
        allTasksTasks.splice(taskToDeleteIndex,1);
        console.log(allTasksTasks);
        renderDOM(currentProject);

     
    }
}

 export default DOMEvents