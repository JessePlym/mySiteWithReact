import React from 'react'
import { Link } from "react-router-dom"
import "../styles/register.css"
import "../styles/index.css"

export default function Login() {
  return (
    <>
      <main className="register-page">
        <form className="register-form">
          <h2>Login</h2>
          <div className="form-field">
            <label htmlFor="username">
              Username
            </label>
            <input 
              className="form-input"
              type="text"
              name="username"
              placeholder="username"
              value=""
              id="username"
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">
              Password
            </label>
            <input 
              className="form-input"
              type="password"
              name="password"
              placeholder="password"
              value=""
              id="password"
            />
          </div>
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
