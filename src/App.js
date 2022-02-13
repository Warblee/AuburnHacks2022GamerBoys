import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react';


function App() {
  const [stock, setStock] = useState("AAPL")
  function changeAmount(e) {
    setAmount(e.target.value)
  }
  const [amount, setAmount] = useState(0)
  function changeStock(e) {
    setStock(e.target.value)
  }
  const [start, setStart] = useState("YYYY-MM-DD")
  function changeStart(e) {
    setStart(e.target.value)
  }
  const [end, setEnd] = useState("YYYY-MM-DD")
  function changeEnd(e) {
    setEnd(e.target.value)
  }
  return (
    <div className="App">
      <body className='lbody'>
        <label for="amount">Stock Amount: </label>
        <input className="date-in" type="text" id="amount" value={ amount } onChange= {(e) => changeAmount(e)}></input><br></br><br></br>
        <label for="stock">Stock Name: </label>
        <input className="date-in" type="text" id="stock" value={ stock } onChange= {(e) => changeStock(e)}></input><br></br><br></br>
        <label for="startDate">Start Date: </label>
        <input className="date-in" type="text" id="startDate" value={ start } onChange= {(e) => changeStart(e)}></input><br></br><br></br>
        <label for="endDate">End Date: </label>
        <input className="date-in" type="text" id="endDate" value={ end } onChange= {(e) => changeEnd(e)}></input>
        <p>If you bought {amount} stock(s) of {stock} in {start}, later, in {end}<br></br> it would be worth $_____</p>
      </body>
      <body className='rbody'>
        <label for="amount">Stock Amount: </label>
        <input className="date-in" type="text" id="amount" value={ amount } onChange= {(e) => changeAmount(e)}></input><br></br><br></br>
        <label for="stock">Stock Name: </label>
        <input className="date-in" type="text" id="stock" value={ stock } onChange= {(e) => changeStock(e)}></input><br></br><br></br>
        <label for="startDate">Start Date: </label>
        <input className="date-in" type="text" id="startDate" value={ start } onChange= {(e) => changeStart(e)}></input><br></br><br></br>
        <label for="endDate">End Date: </label>
        <input className="date-in" type="text" id="endDate" value={ end } onChange= {(e) => changeEnd(e)}></input>
        <p>If you bought {amount} stock(s) of {stock} in {start}, later, in {end}<br></br> it would be worth $_____</p>
      </body>
    </div>
  );
}

export default App;
