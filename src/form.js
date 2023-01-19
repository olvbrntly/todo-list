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

    const description = document.createElement('input');
    description.setAttribute('type','text');
    description.setAttribute('name','task-description');
    description.setAttribute('id','task-description');

    const star = document.createElement('input');
    star.setAttribute('type','checkbox');
    star.setAttribute('name','task-star');
    star.setAttribute('id','task-star');

    const formSubmit = document.createElement('submit');
    formSubmit.setAttribute('value','submit');
    formSubmit.setAttribute("id","task-submit-btn");
    formSubmit.textContent = "Submit"

    //attaching elements to form
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(star);
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