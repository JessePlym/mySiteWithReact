import { Link } from "react-router-dom"
import "../styles/register.css"
import "../styles/index.css"
import FormField from "../components/FormField"

export default function Login() {
  return (
    <>
      <main className="register-page">
        <form className="register-form">
          <h2>Login</h2>
          <FormField 
            label="Username"
            name="username"
            type="text"
            placeholder="username"
            id="username"
          />
          <FormField 
            label="Password"
            name="password"
            type="password"
            placeholder="password"
            id="password"
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
