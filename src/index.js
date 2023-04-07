document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    handleInput(e.target['new-task-description'].value)
    form.reset()
  })
});


function handleInput(todo){
  console.log(todo)
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click',HandleDelete);
  btn.textContent='x';
  li.textContent = `${todo} `;
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

function HandleDelete(e){
  e.target.parentNode.remove()
}