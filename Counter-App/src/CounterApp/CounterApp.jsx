import {useState} from 'react'
import './CounterApp.css'

const CounterApp  = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      <div className="counter_container">
          <h1>Counter App</h1>

          <div className="count_Display">{count}</div>

          {/* Buttons */}

          <div className="Buttons-group">
            <button onClick={() => setCount(count - 1)} className ="Btn Decrease">-</button>
            <button onClick={() => setCount(0)} className="Btn Reset">Reset</button>
            <button onClick={() => setCount(count + 1)} className="Btn Increase">+</button>
            </div>
            
      </div>
    </div>
  )
}
export default CounterApp 