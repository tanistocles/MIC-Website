import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080");
    setArray(response.data.fruits);
    console.log(response.data.fruits);
  };

  useEffect (() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div>

        
      </div>

      <div className="card">
        {array.map((fruit, index) => (
          <div key={index}>
            <p>{fruit}</p>
            <br></br>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
