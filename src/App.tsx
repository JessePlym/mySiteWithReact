import { useEffect, useState } from "react"
import { API_URL} from "./assets/API.ts"
import "./styles/app.css"
import Home from "./views/Home.tsx"
import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./views/Login.tsx"
import Register from "./views/Register.tsx"
import Accounting from "./views/Accounting.tsx"



export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    if (localStorage.getItem("Authorization")) {
      setIsLoggedIn(true)
    }
  }, [])

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
}
