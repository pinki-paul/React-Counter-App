import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className='container-md my-5'>
        <div className='card text-center my-3 pt-3 ' >
          <div className='card-body'>
            <h1 className='card-title text-capitalize mb-5 lh-1'>counter app</h1>
            <h1 className='text-center card-text fs-1 text-secondary'>{count}</h1>
            <button className='btn  btn-outline-success mx-3 my-4' onClick={handleIncrement}>Increment</button>
            <button className='btn btn-outline-danger  mx-3 my-4' onClick={handleDecrement}>Decrement</button>
            <button className='btn btn-outline-secondary  mx-3 my-4' onClick={handleReset}>Reset</button>
          </div>
        </div> 
    </div>
  );
}

export default App;
