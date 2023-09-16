import { Link } from "react-router-dom";
import FormField from "../components/FormField";


export default function Register() {
  return (
    <>
      <main className="register-page">
        <form className="register-form">
          <h2>Register</h2>
          <FormField 
            label="Firstname"
            name="firstname"
            type="text"
            placeholder="firstname"
            id="firstname"
          />
          <FormField 
            label="Lastname"
            name="lastname"
            type="text"
            placeholder="lastname"
            id="lastname"
          />
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
          <FormField 
            label="Password again"
            name="passwordCheck"
            type="password"
            placeholder="password again"
            id="password-again"
          />
          <div className="form-field-button">
            <button className="submit-button" type="submit">
              Register
            </button>
            <button className="continue-button" type="button">
              Continue
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
