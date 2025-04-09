import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import Header from './components/Header';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import Services from './components/Services';
import Footer from './components/Footer';

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
      <Header />
      <NavBar />
      <Slider />  
      <Services /> 
      <Footer />
    </>
  )
}

export default App
