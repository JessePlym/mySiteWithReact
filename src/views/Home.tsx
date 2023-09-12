import React from 'react'
import ProfilePicture from "../images/profile_picture.jpg"

export default function Home() {
  return (
    <>
      <header>
        <div className="header-element">
          <img className="profile-image" src={ProfilePicture} alt="My picture"/>
        </div>
        <a className="toggle-button" href="#">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="header-element-links">
          <a className="header-link" href="https://github.com/JessePlym" target="_blank">
            GitHub
          </a>
          <a className="header-link" href="https://www.linkedin.com/in/jesse-plym-080056254/" target="_blank">
            LinkedIn
          </a>
          <a className="header-link application-link" href="login.html">
            App
          </a>
        </div>
        <div className="header-element">
          <a className="log-in-link" href="login.html">
            Log in
          </a>
        </div>
      </header>
    <main className="home-page-main">
      <section>
        <p>
          Profile text comes here
        </p>
      </section>
      <section>
        <h1>
          My applications
        </h1>
        <p className="user-welcome">
          Welcome user
        </p>
        <div>
          <h2>
            Accounting application
          </h2>
          <p>
            Track your personal finances with this application. 
            Link to the source code is <span><a target="_blank" href="https://github.com/JessePlym/AccountingBackend">here</a></span>.
            Try the application by signing up or logging in with an account.
          </p>
          <a href="register.html">
            Sign up here
          </a>
          <br />
          <a className="application-link" href="login.html">
            Go to application
          </a>
        </div>
      </section>
    </main>
  </>
  )
}
