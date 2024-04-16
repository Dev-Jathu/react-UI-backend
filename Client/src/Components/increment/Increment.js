
import { useState } from 'react';
import './Increment.css'

export default function Increment() {
  const [count, setCount] = useState(0);
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);  // is this posible to 2 increment
  
  }

  const incrementCount = () =>{
    setCount(prevCount => prevCount + 1)
  }
  return (
    <div className='main'>
      <h1> Calculator</h1>
      <div className="button-container">
        <button onClick={decrementCount} className='btn'> - </button>
        <span> {count} </span>
        <button onClick={incrementCount}  className='btn'> + </button>

      </div>
     
    </div>
  );
}
