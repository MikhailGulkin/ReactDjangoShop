import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const fetchData = async () => {
    const {data} = await axios.get('http://localhost:8000/product/')
    console.log(data)
  }
  fetchData()
  return (
    <div className="App">
    </div>
  );
}

export default App;
