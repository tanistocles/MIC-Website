import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import { Routes, Route } from 'react-router-dom';
import Admin from './components/admin/Admin';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Volunteers from './components/volunteers/Volunteers';
import Services from './components/services/Services';


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
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/services" element={<Services />} />

      </Routes>
    </>
  )
}

export default App
