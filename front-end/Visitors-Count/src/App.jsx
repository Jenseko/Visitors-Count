import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:3000/visited').then
      (data => console.log(data))
  }, [])

  return (
    <>
      <h1>FINAL COUNTDOWN</h1>
      <p>`Site was visited by ${count} User/s!`</p>
    </>
  )
}

export default App
