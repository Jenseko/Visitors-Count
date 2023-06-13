import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:3001/visited').then
      (({ data }) => setCount(data))
  }, [])

  return (
    <>
      <h1>FINAL COUNTDOWN</h1>
      <p>{count}</p>
    </>
  )
}

export default App
