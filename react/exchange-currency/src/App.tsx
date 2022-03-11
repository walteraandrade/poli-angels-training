import './App.css'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

function App() {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [chosenCurrency, setChosenCurrency] = useState<string>('BRL')
  const baseUrl = 'http://api.exchangeratesapi.io/v1/latest?access_key=64ab4710b2a1ec0a12075ee8a731745b&format=1'


  const getRates = useCallback(() => {
    axios.get(baseUrl).then((response) => setRates(response.data.rates))
  }, [])

  useEffect(() => {
    getRates()
  }, [getRates])

  return (
    <div className="App">
      <select onChange={(event) => setChosenCurrency(event.target.value)}>
        {Object.keys(rates).map(rate => <option key={rate} value={rate}>{rate}</option>)}
      </select>
      <p>{rates[chosenCurrency]}</p>
    </div>
  )
}


export default App
