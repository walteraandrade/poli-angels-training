import './App.css'
import NumberCard from './components/number-container'

function App() {


  return (
    <div className='wrapper'>
    <NumberCard value='1' />
    <NumberCard value='2'/>
    <NumberCard value='3'/>
    <NumberCard value='4'/>
    <NumberCard value='5'/>
    </div>
  )
}

export default App
