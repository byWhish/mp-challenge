import {useCallback, useState} from 'react'
import axios from 'axios';
import './App.scss'

const App = () => {
  const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
      setCount(count + 1)
    }, [])

    const users = axios.get('http://localhost:3000/users')


  return (
      <div className="app">
        <p>
          <h1>{count}</h1>
          <button onClick={handleClick}>Increment</button>
        </p>
          <>{users}</>
      </div>

  )
}

export default App
