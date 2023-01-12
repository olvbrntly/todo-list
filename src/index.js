import addTasktoDOM from "./site";
//puts the whole thing together

addTasktoDOM();
// event listener for each button on project

// all tasks button
 
// today button

// this week button

// starred button
const starred =document.getElementById('starred');

starred.addEventListener('click',() =>{
   starred.classList.toggle('starred');

});
// add project button

// add task button