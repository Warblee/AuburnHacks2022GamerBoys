import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react';


function App() {
  
function add() {
  setCount((prev) => { return prev + 1});
}
function minus() {
  setCount((prev) => { return prev - 1});
}
function reset() {
  setCount((prev) => { return 0})
}
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          { count }
        </p>
        <button className="my-button" onClick={add}>+</button>
        <button className="my-button" onClick={minus}>-</button>
        <button className="my-button" onClick={reset}>reset</button>
      </header>
    </div>
  );
}

export default App;
