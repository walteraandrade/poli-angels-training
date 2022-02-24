const app = document.querySelector('#root');

const main = () => {
  return {
  DOM: xs.periodic(1000)
  .fold(prev => prev + 1, 0)
  .map(item => `Seconds elapsed: ${item}`),
  log: xs.periodic(1000)
  .fold(prev => prev + 1, 0)
  .map(item => `Ten seconds counter: ${item}`),
  }
}

const logDriver = (stringArray) => {
  stringArray.subscribe({
    next: (str) => {
      console.log(str)
    }
})
}

const domDriver = (stringArray) => {
  stringArray.subscribe({
    next: (str) => {
      app.textContent = str
    }
})
}

const drivers = {
  DOM: domDriver,
  log: logDriver
}

const run = (mainFn, drivers) => {
  const sinks = mainFn();
  Object?.keys(drivers).forEach((key) => {
    drivers[key](sinks[key])
  })
}

run(main, { DOM: domDriver, log: logDriver });