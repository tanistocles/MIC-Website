import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import { Routes, Route } from 'react-router-dom';
import Admin from './components/admin/Admin';
import HomePage from './components/HomePage';

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080");
    //still setting fruit to make sure it connects to backend
    setArray(response.data.fruits);
    // console.log(response.data.fruits);
  };

  useEffect (() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
