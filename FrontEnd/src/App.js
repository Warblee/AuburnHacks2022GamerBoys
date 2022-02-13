import './App.css';
import React, { useState} from 'react';
import axios from 'axios';


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

  function getDb() {  
    axios.post("http://localhost:8000/add",{stock:stock, amount:amount, start:start, end:end}).then(console.log("json sent to server")).catch((error) => {console.log(error.message())})
  }

  const dbsend = [{sto:stock, amou:amount, sta:start, en:end}]
  const dbreturn = [{value:"0", min:"0", current:""}]
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


        <button className="button" onClick={getDb}>Go!</button>
        {
            dbsend.map((item, index) => {return <p>if you bought {item.amou} of {item.sto} at its lowest price between {item.sta} and {item.en} you would have netted ${dbreturn[index].value} today.</p>})
        }


      </body>
    </div>
  );
}

export default App;
