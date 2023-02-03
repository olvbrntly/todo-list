//-----FORM FOR ADDING A TASK-------
function createForm(){
    const taskBox = document.getElementById('tasks');
    //creates form
    const form = document.createElement('form');
    form.setAttribute('method','post');
    form.setAttribute('action','javascript:submit()');
    form.classList.add('form');
    form.setAttribute('id','form');

    //creates title input
    const titleDiv = document.createElement('div');
    titleDiv.setAttribute('id','titleDiv');
    titleDiv.setAttribute('class','input-div');

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'task-name');
    titleLabel.textContent = "Title: "

    const title = document.createElement('input');
    title.setAttribute('type','text');
    title.setAttribute('name','task-name');
    title.setAttribute('id','task-name');

    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(title);

    //creates description input
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('id','descriptionDiv');
    descriptionDiv.setAttribute('class','input-div');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'task-name');
    descriptionLabel.textContent = "Description: "

    const description = document.createElement('input');
    description.setAttribute('type','text');
    description.setAttribute('name','task-description');
    description.setAttribute('id','task-description');

    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(description);

    //creates date input
    const dateDiv = document.createElement('div');
    dateDiv.setAttribute('id','dateDiv');
    dateDiv.setAttribute('class','input-div');

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'task-name');
    dateLabel.textContent = "Due Date: "

    const date = document.createElement('input');
    date.setAttribute('type','date');
    date.setAttribute('name','task-date');
    date.setAttribute('id','task-date');

    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(date);

    //creates submit button
    const formSubmit = document.createElement('submit');
    formSubmit.setAttribute('value','submit');
    formSubmit.setAttribute("id","task-submit-btn");
    formSubmit.textContent = "Submit"

    //attaching elements to form
    form.appendChild(titleDiv);
    form.appendChild(descriptionDiv);
    form.appendChild(dateDiv);
    form.appendChild(formSubmit);

    taskBox.appendChild(form);
}

function closeForm(){
    const taskBox = document.getElementById('tasks');
    const form = document.getElementById('form');
    taskBox.removeChild(form);
    console.log('close');
}

//----------FORM FOR ADDING A PROJECT-----------

function createCustomProject(){
    const projects = document.getElementById('projects')
    const newProjectDiv = document.createElement('div');
    newProjectDiv.setAttribute('id','new-project-div')

    let customProject = document.createElement('input');
    customProject.setAttribute('type', 'text');
    customProject.setAttribute('name', 'custom-project-name');
    customProject.setAttribute('id', 'custom-project-name');




    let submitProject = document.createElement('submit');
    submitProject.setAttribute('id','custom-project-submit');
    submitProject.textContent = 'YES';

    newProjectDiv.appendChild(customProject);
    newProjectDiv.appendChild(submitProject);

    projects.appendChild(newProjectDiv);

}

function closeProject(){
    const projects = document.getElementById('projects');
    const newProjectDiv = document.getElementById('new-project-div');
    projects.removeChild(newProjectDiv);
    console.log('close');
}
export {createForm, closeForm, createCustomProject, closeProject};