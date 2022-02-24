// Document Object Model

// Exibir o document no browser


const amoebaMusic = {
  name: 'Amoeba Music',
  area: 'Etertainment',
  investment: 100000,
  approval: 'Pending'
}

const penceAi = {
  name: 'Pence AI',
  area: 'Consultancy',
  investment: 2000000,
  approval: 'Approved'
}

const startups = [amoebaMusic, penceAi];
const table = document.getElementById("startups-table");
const submitButton = document.querySelector('button');
const form = document.querySelector('form')

const addNewRow = (startup) => {
  const newRow  = document.createElement('tr');


  const startupValues = Object?.values?.(startup);

  const tdArray = startupValues.map((startupValue) => {
    const newTd = document.createElement('td');
    newTd.innerText = startupValue;
  })

  for (let i = 0;i < tdArray.length; i++) {
    newRow.appendChild(tdArray[i])
  }


  table.appendChild(newRow)
}

startups.forEach((startup) => {
  addNewRow(startup)
})

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const name = form.name.value;
  const area = form.area.value;
  const investment = form.investment.value;
  const approval = form.approval.value;

  const newStartup = {
    name,
    area,
    investment,
    approval
  }

  addNewRow(newStartup)
})





