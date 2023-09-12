import { useEffect } from "react"
import { API_URL} from "./assets/API.ts"
import "./styles/app.css"
import Home from "./views/Home.tsx"



export default function App() {

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
  // useEffect(() => {


  //   fetch(`${API_URL}api/auth/authenticate`, requestConfig)
  //   .then(res => {
  //     return res.text()
  //   })
  //   .catch(err => console.log(err))
  // }, [])

  return (
    <>
      <Home />
    </>
  )
}
