import { useState, useEffect } from 'react'
// import Navbar from './components/Navbar';
import './App.css'

function App() {
  const [userData, setUserData] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => setUserData(data))
  }, [])

  return (
    <div className="main-container">
      {
        userData.map((data) => (
          <div key={data.id} className="inside-card">
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App
