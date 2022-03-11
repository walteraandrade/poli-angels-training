import './App.css'
import { FirstChild } from './components/first-child'

function App() {

  return (
    <div className="App">
      <FirstChild>
        <div style={{ backgroundColor: 'orange', height: 50}}>
          div
        </div>
       <p>toggle</p>
     </FirstChild>
     <FirstChild >toggle</FirstChild>
    </div>
  )
}

export default App
