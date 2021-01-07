import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [test, setTest] = useState()
  const getTest = () => {
    axios.get("http://localhost:5000")
      .then((res) => {
        setTest(res.data)
      })
  }
  useEffect(() => {
    getTest()
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {test}
        </p>
        
      </header>
    </div>
  );
}

export default App;
