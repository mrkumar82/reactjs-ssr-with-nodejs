import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCounter] = useState(0);
  const increment = () => {
    setCounter(count + 1);
  };
  const decrement = () => {
    setCounter(count - 1);
  };
  return (
    <div className='App'>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
