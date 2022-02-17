const employees = [];

const addEmployee = (employee) => {
  employees.push(employee);
}

const removeEmployee = (employeeId) => {
  return employees.filter(employee => employee.id === employeeId)
}

const getSalariesValue = (employees) => {
  const salaries = employees.reduce((prev, curr) => prev.salary + curr.salary)
  console.log(salaries)
}


addEmployee({ id: 0, name: 'Rodrigo Lima', salary: 15000, curriculum: ['Mechatronic Engineer', 'Computer Science']})
addEmployee({ id: 1, name: 'Walter Andrade', salary: 15000, curriculum: ['Philosophy', 'Literature'] })


console.log('Before filter :', employees);

const updatedEmplyees = removeEmployee(0);

console.log('After filter :', updatedEmplyees)