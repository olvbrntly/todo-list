// going to handle the dom changes

// remove a task when deletes

// update a tasks content when edited

// make a task appear when added
// hard coding a fake task first

function addTasktoDOM(){
    const taskBox = document.getElementById('tasks');

    // make a new task
    const taskContainter = document.createElement('div');
    const leftDiv = document.createElement('div');
    const rightDiv = document.createElement('div');
    
    taskContainter.setAttribute('class','task');
    rightDiv.setAttribute('class','task-rightDiv');
    leftDiv.setAttribute('class','task-leftDiv');


    const title = document.createElement('div');
    title.textContent = "My First Task";

    const description =document.createElement('div');
    description.textContent = "this is the description"

    const starred = document.createElement('span');
    const dueDate = document.createElement('div');
    const more = document.createElement('span');

    title.setAttribute('class','task-title');

    starred.setAttribute('class', 'material-icons');
    starred.setAttribute('id','starred');

    more.setAttribute('class', 'material-icons');

    starred.textContent = 'star'
    dueDate.textContent = 'due!'
    more.textContent = 'more_vert';
    
    leftDiv.appendChild(title);
    leftDiv.appendChild(description);

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