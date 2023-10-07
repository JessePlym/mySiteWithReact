import { useContext } from "react"
import "./styles/app.css"
import Home from "./views/Home.tsx"
import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./views/Login.tsx"
import Register from "./views/Register.tsx"
import Accounting from "./views/Accounting.tsx"
import AuthContext from "./context/AuthContext.tsx"
import { UserProvider } from "./context/UserContext.tsx"



export default function App() {
  const {isAwake, isLoggedIn } = useContext(AuthContext)

  if (isAwake) {
    return (
      <>
        
          {
            isLoggedIn ? (
              <UserProvider>
                <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/register" element={<Register />}/>
                  <Route path="/application" element={<Accounting />}/>
                  <Route path="*" element={<Navigate to="/" />}/>
                </Routes>
              </UserProvider>
            ) : (
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
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
