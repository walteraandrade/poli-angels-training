

const table = document.querySelector('table');

const bob = {
  name: 'Bob Marley',
  age: 50,
  salary: 12000,
  curriculum: ['singer', 'songwritter', 'guitarrist', 'joint fixer']
}

const paul = {
  name: 'Paul McCartney',
  age: 79,
  salary: 120000,
  curriculum: ['singer', 'songwritter', 'pianist', 'member of The Beatles']
}

const employees = [bob, paul];

const createCells = (cellValues) => {
  const tdArray = cellValues.map((employeeValue) => {
    const newTd = document.createElement('td');
    let cellText = employeeValue ;
    if(typeof employeeValue === "object") {
      cellText = employeeValue.map(value => ` ${value}`);
      newTd.innerText = cellText
    } else {
      newTd.innerText = cellText;
    }
  
    return newTd;
  })

  return  tdArray
}

const fireEmployee = (employeeName) => {
  
  const confirmation = window.confirm('You sure?')
  
  if(confirmation){
  const employeeRow = document.getElementById(employeeName)
  const updatedEmployees = employees.filter(employee => employee.name !== employeeName);
  employeeRow.remove()

  return updatedEmployees;
  }

  return;
}

const createFireEmployeeButton = (employeeName) => {
  const fireEmployeeButton = document.createElement('button');


  fireEmployeeButton.addEventListener('click', () => fireEmployee(employeeName))
  fireEmployeeButton.innerText = 'Remove'
  fireEmployeeButton.classList.add('fire-employee-button')

  return fireEmployeeButton
} 

const createNewRow = (employee) => {
  const newRow = document.createElement('tr');

  const tdArray = createCells(Object?.values?.(employee));

  for(let i = 0; i < tdArray.length; i++) {
    newRow.appendChild(tdArray[i])
  }

  const fireButton = createFireEmployeeButton(employee.name)
  newRow.appendChild(fireButton)
  newRow.setAttribute('id', employee.name)
  table.appendChild(newRow)
}



employees.forEach((employee) => {
  createNewRow(employee)
})

