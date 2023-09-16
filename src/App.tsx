import { useEffect, useState } from "react"
import { API_URL} from "./assets/API.ts"
import "./styles/app.css"
import Home from "./views/Home.tsx"
import { Route, Routes } from "react-router-dom"
import Login from "./views/Login.tsx"
import Register from "./views/Register.tsx"
import Accounting from "./views/Accounting.tsx"



export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  // const credentials: Credentials = {
  //   username: "Plymander",
  //   password: "jplym1996"
  // }
 
  // const requestConfig: RequestInit = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(credentials),
  //   mode: "cors"
  // }
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
            <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/application" element={<Accounting />}/>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
          </Routes>
        )
      }
    </>
  )
}
