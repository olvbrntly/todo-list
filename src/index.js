import addTasktoDOM from "./site";
//puts the whole thing together

addTasktoDOM();
addTasktoDOM();
addTasktoDOM();

// event listener for each button on project

// all tasks button
 
// today button

// this week button

// starred button
const starred = document.querySelectorAll('.starred');

starred.forEach(task=>{
   task.addEventListener('click',(e) =>{
      e.target.classList.toggle('starclicked')
      })

});
// add project button

// add task button

//complete task button
const completed = document.querySelectorAll('.status');
completed.forEach(task=>{
   task.addEventListener('click',(e) =>{
      if(e.target.textContent === 'radio_button_unchecked'){
         e.target.textContent ='radio_button_checked';
      }
      else{
         e.target.textContent = 'radio_button_unchecked'
      }
})
});