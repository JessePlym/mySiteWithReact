import ProfilePicture from "../images/profile_picture.jpg"
import { Link } from "react-router-dom"
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import UserContext from '../context/UserContext'

export default function Home() {
  const { userDetails } = useContext(UserContext)
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

  const logOut = () => {
    if (isLoggedIn) {
      localStorage.clear()
      setIsLoggedIn!(false)
    }
  }

  return (
    <>
      <header>
        <div className="header-element">
          <img className="profile-image" src={ProfilePicture} alt="My picture"/>
        </div>
        <Link className="toggle-button" to="#">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </Link>
        <div className="header-element-links">
          <Link className="header-link" to="https://github.com/JessePlym" target="_blank">
            GitHub
          </Link>
          <Link className="header-link" to="https://www.linkedin.com/in/jesse-plym-080056254/" target="_blank">
            LinkedIn
          </Link>
          <Link className="header-link application-link" to={isLoggedIn ? "/application" : "/login"}>
            App
          </Link>
        </div>
        <div className="header-element">
          <Link className="log-in-link" to={isLoggedIn ? "/" : "/login"} onClick={logOut}>
            {isLoggedIn ? "Log out" : "Log in"}
          </Link>
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
        <p>
          {userDetails?.firstName && `Welcome ${userDetails.firstName}`}
        </p>
        <div>
          <h2>
            Accounting application
          </h2>
          <p>
            Track your personal finances with this application. 
            Link to the source code is <span><Link target="_blank" to="https://github.com/JessePlym/AccountingBackend">here</Link></span>.
            Try the application by signing up or logging in with an account.
          </p>
          <Link to="/register">
            Sign up here
          </Link>
          <br />
          <Link className="application-link" to={isLoggedIn ? "/application" : "/login"}>
            Go to application
          </Link>
        </div>
      </section>
    </main>
  </>
  )
}
