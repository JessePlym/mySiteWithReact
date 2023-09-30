import { Link, useNavigate } from "react-router-dom"
import "../styles/register.css"
import "../styles/index.css"
import FormField from "../components/FormField"
import { logIn } from "../requests/auth"
import { FormEvent, useContext, useState } from "react"
import { Credentials } from "../types/type"
import AuthContext from "../context/AuthContext"

export default function Login() {
  const [credentials, setCredentials] = useState<Credentials>({username: "", password: ""})
  const navigate = useNavigate()
  const { setIsLoggedIn } = useContext(AuthContext)

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (await logIn(credentials)) {
      setIsLoggedIn!(true)
      navigate("/")
    }
  }

  return (
    <>
      <main className="register-page">
        <form className="register-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <FormField 
            label="Username"
            name="username"
            value={credentials.username}
            type="text"
            placeholder="username"
            id="username"
            setValue={e => setCredentials({...credentials, [e.target.name]: e.target.value})}
          />
          <FormField 
            label="Password"
            name="password"
            value={credentials.password}
            type="password"
            placeholder="password"
            id="password"
            setValue={e => setCredentials({...credentials, [e.target.name]: e.target.value})}
          />
          <div className="form-field-button">
            <button className="submit-button" type="submit">
              Log in
            </button>
          </div>
          <Link to="/">
            Back
          </Link>
        </form>
      </main>
    </>
  )
}
