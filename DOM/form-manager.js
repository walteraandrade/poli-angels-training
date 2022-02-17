const form = document.querySelector('form');
const addFormationButton = document.getElementById('add-formation');
const addEmployeeButton = document.getElementById('add-employee');

const curriculum = [];

addEmployeeButton.addEventListener('click', (event) => {
  event.preventDefault()

  const newEmployee = {
    name: form.name.value,
    age: form.age.value,
    salary: form.salary.value,
    curriculum
    
  }
  
  createNewRow(newEmployee)
  form.reset()
  const curriculumHTMLList = document.querySelector('ul');
  curriculumHTMLList.remove()

})



const addnewFormation = () => {
  const list = document.querySelector('ul')
  const newFormationTag = document.createElement('li');
  newFormationTag.innerText = form.curriculum.value;

  list.appendChild(newFormationTag);
  curriculum.push(newFormationTag.innerText);
  form.curriculum.value = '';
}

addFormationButton.addEventListener('click', (event) => {
  event.preventDefault();
  addnewFormation()
})

const curriculumInput = document.getElementById('curriculum-input');

curriculumInput.addEventListener('keyup', (event) => {
  event.preventDefault();

  if (event.key === 'Enter') {
    addnewFormation()
  } else {
    return;
  }
})

