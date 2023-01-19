function addTasktoDOM(taskTitle, taskDescription){
    const taskBox = document.getElementById('tasks');
   
    // make a new task
    const taskContainter = document.createElement('div');
    const leftDiv = document.createElement('div'); 
    const rightDiv = document.createElement('div');
    
    taskContainter.setAttribute('class','task');
    taskContainter.setAttribute('id','task');

    rightDiv.setAttribute('class','task-rightDiv');
    leftDiv.setAttribute('class','task-leftDiv');

    //left div elements
    const status = document.createElement('button');
    status.setAttribute('class', 'material-icons');
    status.classList.add('status');
    status.textContent = 'radio_button_unchecked'

    const taskInfo = document.createElement('Div');
    const title = document.createElement('div');
    title.textContent = `${taskTitle}`;

    const description =document.createElement('div');
    description.textContent = taskDescription;

    // right div elements
    const starred = document.createElement('button');
    const dueDate = document.createElement('div');
    const more = document.createElement('button');

    title.setAttribute('class','task-title');

    starred.setAttribute('class', 'material-icons');
    starred.classList.add('star');
    

    more.setAttribute('class', 'material-icons');
    more.setAttribute('id','more');

    starred.textContent = 'star'
    dueDate.textContent = 'due!'
    more.textContent = 'more_vert';
    
    taskInfo.appendChild(title);
    taskInfo.appendChild(description);


    leftDiv.appendChild(status)
    leftDiv.appendChild(taskInfo);

    rightDiv.appendChild(starred);
    rightDiv.appendChild(dueDate);
    rightDiv.appendChild(more);

    taskContainter.appendChild(leftDiv);
    taskContainter.appendChild(rightDiv);

    taskBox.appendChild(taskContainter);

};

function clearDOM(){
    const taskBox = document.getElementById('tasks');
    while(taskBox.lastChild.id != 'add-tasks'){
        taskBox.removeChild(taskBox.lastChild);
    }
}

function removeAddBtn(){
    const btn = document.getElementById('add-tasks');
        btn.style.visibility = 'hidden'
}

function renderDOM(project){
    clearDOM()
    let array = project.getTasks();
        console.log('link');
        console.log(array);
        for(let i = 0; i < array.length; i++){
            addTasktoDOM(array[i].getTitle(), array[i].getDescription());
        };

    }
export {addTasktoDOM, renderDOM, removeAddBtn};

// move a task to a project

// show tasks due today 

// show tasks due this week

// shoes tasks that are starred

// show every task