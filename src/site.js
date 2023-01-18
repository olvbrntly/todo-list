// going to handle the dom changes

// remove a task when deletes

// update a tasks content when edited

// make a task appear when added
// hard coding a fake task first

function addTasktoDOM(){
    const taskBox = document.getElementById('tasks');
    const titleValue = document.getElementById('task-name').value;
    const descriptionValue = document.getElementById('task-description').value;

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
    title.textContent = titleValue;

    const description =document.createElement('div');
    description.textContent = descriptionValue;

    // right div elements
    const starred = document.createElement('button');
    const dueDate = document.createElement('div');
    const more = document.createElement('button');

    title.setAttribute('class','task-title');

    starred.setAttribute('class', 'material-icons');
    starred.classList.add('starred');

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


    console.log('works')
    
};

export default addTasktoDOM;

// move a task to a project

// show tasks due today 

// show tasks due this week

// shoes tasks that are starred

// show every task