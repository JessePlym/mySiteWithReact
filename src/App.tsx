import { useEffect, useState } from "react"
import "./styles/app.css"
import Home from "./views/Home.tsx"
import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./views/Login.tsx"
import Register from "./views/Register.tsx"
import Accounting from "./views/Accounting.tsx"
import { isServerAwake } from "./requests/connection.ts"



export default function App() {
  const [isAwake, setIsAwake] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    async function testConnection() {
      const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve("Server is restarting");
        }, 5000);
      });
    
      const isAwakePromise = isServerAwake();
    
      const result = await Promise.race([isAwakePromise, timeoutPromise]);
      setIsAwake(true)

      // result is true if isAwakePromise ran first
      if (result === true && localStorage.getItem("Authorization")) {
        setIsLoggedIn(true); 
      } else {
        localStorage.clear()
      }
    
    }
    testConnection()
  }, [])

  if (isAwake) {
    return (
      <>
        {
          isLoggedIn ? (
            <Routes>
              <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/application" element={<Accounting />}/>
              <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
              <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
              <Route path="/register" element={<Register />}/>
              <Route path="*" element={<Navigate to="/login" />}/>
            </Routes>
          )
        }
      </>
    )
  } else {
    return <h1>Loading...</h1>
  }
}
