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
  const [val, setVal] = useState(0.00)
  function changeVal(e) {
    setVal(e.target.value)
  }
  const [start, setStart] = useState("YYYY-MM-DD")
  function changeStart(e) {
    setStart(e.target.value)
  }
  const [end, setEnd] = useState("YYYY-MM-DD")
  function changeEnd(e) {
    setEnd(e.target.value)
  }
  function sendToDB() {
    dbreturn[0].value = "100";
    setEnd("tomorrow");
  }
  const dbsend = [{stock:"AAPL", amount:3, start:"01-01-2001", end:"01-01-2002"}]
  const dbreturn = [{value:"0"}]
  return (
    <div className="App">
      <body className="head">Stock Time Machine</body>
      <body className='rbody'>
        <label for="stock">Stock Name: </label>
        <input className="date-in" type="text" id="stock" value={ stock } onChange= {(e) => changeStock(e)}></input><br></br><br></br>
        <label for="amount">Stock Amount: </label>
        <input className="date-in" type="text" id="amount" value={ amount } onChange= {(e) => changeAmount(e)}></input><br></br><p>OR</p>
        <label for="val">Initial Stock Value: $</label>
        <input className="date-in" type="text" id="val" value={ val } onChange= {(e) => changeVal(e)}></input><br></br><br></br>
        <label for="startDate">Buy Range: From </label>
        <input className="date-in" type="text" id="startDate" value={ start } onChange= {(e) => changeStart(e)}></input>
        <label for="endDate"> To </label>
        <input className="date-in" type="text" id="endDate" value={ end } onChange= {(e) => changeEnd(e)}></input><br></br><br></br>


        <button className="button" onClick={sendToDB}>Go!</button>
        {
            dbsend.map((item, index) => {return <p>if you bought {item.amount} of {item.stock} at {item.start} {item.end} you would have ${dbreturn[index].value} </p>})
        }


      </body>
    </div>
  );
}

export default App;
