import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import { RegisterInfo } from "../types/type";
import { registerUser } from "../requests/auth";

const initialFormState: RegisterInfo = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  passwordCheck: ""
}

export default function Register() {
  const [ registerDetails, setRegisterDetails] = useState<RegisterInfo>(initialFormState)
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (await registerUser(registerDetails)) {
      console.log(registerDetails)
      setRegisterDetails(initialFormState)
      navigate("/")
    }
  }

  return (
    <>
      <main className="register-page">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <FormField 
            label="Firstname"
            name="firstname"
            type="text"
            value={registerDetails.firstName}
            placeholder="firstname"
            id="firstname"
            setValue={e => setRegisterDetails({...registerDetails, firstName: e.target.value})}
          />
          <FormField 
            label="Lastname"
            name="lastname"
            type="text"
            value={registerDetails.lastName}
            placeholder="lastname"
            id="lastname"
            setValue={e => setRegisterDetails({...registerDetails, lastName: e.target.value})}
          />
          <FormField 
            label="Username"
            name="username"
            type="text"
            value={registerDetails.username}
            placeholder="username"
            id="username"
            setValue={e => setRegisterDetails({...registerDetails, username: e.target.value})}
          />
          <FormField 
            label="Password"
            name="password"
            type="password"
            value={registerDetails.password}
            placeholder="password"
            id="password"
            setValue={e => setRegisterDetails({...registerDetails, password: e.target.value})}
          />
          <FormField 
            label="Password again"
            name="passwordCheck"
            type="password"
            value={registerDetails.passwordCheck}
            placeholder="password again"
            id="password-again"
            setValue={e => setRegisterDetails({...registerDetails, passwordCheck: e.target.value})}
          />
          <div className="form-field-button">
            <button className="submit-button" type="submit">
              Register
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
