function addTasktoDOM(taskTitle, taskDescription, taskDate){
    const taskBox = document.getElementById('tasks');
   
    // make a new task
    const taskContainter = document.createElement('div');
    const leftDiv = document.createElement('div'); 
    const rightDiv = document.createElement('div');
    
    taskContainter.setAttribute('class','task');
    taskContainter.setAttribute('id','task');
    taskContainter.setAttribute('data-title',`${taskTitle}`);


    rightDiv.setAttribute('class','task-rightDiv');
    leftDiv.setAttribute('class','task-leftDiv');

    //left div elements
    const status = document.createElement('button');
    status.setAttribute('class', 'material-icons');
    status.classList.add('status');
    status.textContent = 'radio_button_unchecked'

    const taskInfo = document.createElement('div');
    const title = document.createElement('div');
    title.setAttribute('class','task-title');
    title.textContent = taskTitle;

    const description =document.createElement('div');
    description.textContent = taskDescription;

    // right div elements
    const dueDate = document.createElement('div');
    dueDate.textContent = taskDate;

    const more = document.createElement('button');
    more.classList.add('material-icons');
    more.setAttribute('class','task-delete');
    more.textContent = 'delete';
    
    taskInfo.appendChild(title);
    taskInfo.appendChild(description);


    leftDiv.appendChild(status)
    leftDiv.appendChild(taskInfo);

    rightDiv.appendChild(dueDate);
    rightDiv.appendChild(more);

    taskContainter.appendChild(leftDiv);
    taskContainter.appendChild(rightDiv);

    taskBox.appendChild(taskContainter);

};

function addProjectToDOM(projectTitle){
    const projectDiv = document.getElementById('projects');

    const newProject = document.createElement('div');
    newProject.setAttribute('class','createdProjects');

    const projectIcon = document.createElement('div');
    projectIcon.setAttribute('class','material-icons');
    projectIcon.textContent = 'assignment';

    const newLink = document.createElement('button');
    newLink.setAttribute('class','createdProjectLink');
    newLink.classList.add('link');
       
    newLink.textContent = projectTitle;
    newProject.appendChild(projectIcon);
    newProject.appendChild(newLink);
    projectDiv.appendChild(newProject);
}

//works bc its a Nodelist
function clearTasks(){
    const taskBox = document.getElementById('tasks');
    while(taskBox.lastChild.id != 'add-tasks'){
        taskBox.removeChild(taskBox.lastChild);
    }

}

//works bc project is a htmlcollection (idk why)
function clearProjects(){
    const projects = document.querySelector('#projects')
    console.log(projects.children);
    var createdProjects = document.querySelectorAll('.createdProjects');
    for (var i = 0; i < createdProjects.length; ++i) {
        createdProjects[i].remove();
      } 
}


function removeAddBtn(){
    const btn = document.getElementById('add-tasks');
        btn.style.visibility = 'hidden'
}

function renderDOM(project){
    clearTasks();
    let array = project.getTasks();
          for(let i = 0; i < array.length; i++){ 
            addTasktoDOM(array[i].getTitle(), array[i].getDescription(), array[i].getDate());
        };
    }

function renderProjectDiv(array){
    clearProjects();
    for(let i = 0; i <array.length; i++){
        addProjectToDOM(array[i].getName());
    };

}
export {addTasktoDOM, renderDOM, removeAddBtn, renderProjectDiv};
