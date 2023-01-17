import { fromUnixTime } from "date-fns";

function createForm(){
    const taskBox = document.getElementById('tasks');
    //creates form
    const form = document.createElement('form');
    form.setAttribute('method','post');
    form.setAttribute('action','javascript:submit()');
    form.classList.add('form');

    //creates title input
    const title = document.createElement('input');
    title.setAttribute('type','text');
    title.setAttribute('name','task-name');
    title.setAttribute('id','task-name');


    //attaching elements to form
    form.appendChild(title);
    taskBox.appendChild(form);
}

export default createForm