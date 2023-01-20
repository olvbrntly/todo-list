import createNewTask from './task';
import makeToDo from './index';


function createForm(){
    const taskBox = document.getElementById('tasks');
    //creates form
    const form = document.createElement('form');
    form.setAttribute('method','post');
    form.setAttribute('action','javascript:submit()');
    form.classList.add('form');
    form.setAttribute('id','form');

    //creates title input
    const title = document.createElement('input');
    title.setAttribute('type','text');
    title.setAttribute('name','task-name');
    title.setAttribute('id','task-name');

    //creates description input
    const description = document.createElement('input');
    description.setAttribute('type','text');
    description.setAttribute('name','task-description');
    description.setAttribute('id','task-description');

    //creates date input
    const date = document.createElement('input');
    date.setAttribute('type','date');
    date.setAttribute('name','task-date');
    date.setAttribute('id','task-date');

    //creates submit button
    const formSubmit = document.createElement('submit');
    formSubmit.setAttribute('value','submit');
    formSubmit.setAttribute("id","task-submit-btn");
    formSubmit.textContent = "Submit"

    //attaching elements to form
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(date);
    form.appendChild(formSubmit);
    taskBox.appendChild(form);

}

function closeForm(){
    const taskBox = document.getElementById('tasks');
    const form = document.getElementById('form');
    taskBox.removeChild(form);
    console.log('close');
}

export {createForm, closeForm};