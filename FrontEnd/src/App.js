import './App.css';
import React, { useState, useEffect } from 'react';
const axios = require('axios');
const cors = require('cors');

function App() {
  var whitelist = ['http://localhost:8000/front', 'http://localhost:8000/back']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
  }


  const [loading, setLoading] = useState(true);
  const postIt = () => {
    const postData = async () => {
        setLoading(true);
        axios.post('http://localhost:8000/front', {
            stock:stock, amount:amount, start:start, end:end
        })
            .then( response => {
                window.location.reload(false);
            })
            .catch(error => {
                console.error(error.message);
            });
        setLoading(false);
    };
    postData();
  }
  
  useEffect(() => {
    const fetchDate = async () => {
        setLoading(true);
        axios.get('http://localhost:8000/back')
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.error(err.message);
            })
        setLoading(false);
    };
    fetchDate();
}, []);

  const [stock, setStock] = useState("AAPL");
  function changeAmount(e) {
    setAmount(e.target.value)
  }
  const [amount, setAmount] = useState(0);
  function changeStock(e) {
    setStock(e.target.value)
  }
  const [val, setVal] = useState(0.00);
  function changeVal(e) {
    setVal(e.target.value)
  }
  const [start, setStart] = useState("YYYY-MM-DD");
  function changeStart(e) {
    setStart(e.target.value)
  }
  const [end, setEnd] = useState("YYYY-MM-DD");
  function changeEnd(e) {
    setEnd(e.target.value)
  }
  const [data, setData] = useState([{net:"1", minVal:"1", curVal:"1"}]);

  const dbreturn = [{value:"0", min:"0", current:""}]
  return (
    <div className="App">
      <body className="head">Stock Time Machine</body>
      <body className='rbody'>
        <label for="stock">Stock Name: </label>
        <input className="date-in" type="text" id="stock" value={ stock } onChange= {(e) => changeStock(e)}></input><br></br><br></br>
        <label for="amount">Stock Amount: </label>
        <input className="date-in" type="text" id="amount" value={ amount } onChange= {(e) => changeAmount(e)}></input><br></br><br></br>
        <label for="startDate">Buy Range: From </label>
        <input className="date-in" type="text" id="startDate" value={ start } onChange= {(e) => changeStart(e)}></input>
        <label for="endDate"> To </label>
        <input className="date-in" type="text" id="endDate" value={ end } onChange= {(e) => changeEnd(e)}></input><br></br><br></br>


        <button className="button" onClick={postIt}>Go!</button>
        <p>Buying {amount} of {stock} at in its min value between {start} and {end}:</p>
        <li>You would make ${data[0].net}.</li>
        <li>The min price of {stock} was ${data[0].minVal}.</li>
        <li>The current value of {stock} is ${data[0].curVal}.</li>


      </body>
    </div>
  );
}

export default App;
