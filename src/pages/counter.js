import React from 'react';
import '../App.css';
import {useState} from 'react';
import {useEffect} from 'react';

const Counter = () => {
  const [count, setCount] = useState(100);

  useEffect(() =>{
    // setCount(100);
    alert(`Change to ${count}`);
  },[count]);
  
  return (
    <div className='App'>
      <button onClick={() => setCount( (prevCount) => prevCount+1) }>U</button>
        <h1>{count}</h1>
      <button onClick={() => setCount( (prevCount) => prevCount-1) }>D</button>
    </div>
  )
}

export default Counter;