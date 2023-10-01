import { API_URL } from "../assets/API";
import { Credentials, RegisterInfo } from "../types/type";

export async function logIn(credentials: Credentials): Promise<boolean> {
  const requestConfig: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  }
  try {
    const response = await fetch(`${API_URL}api/auth/authenticate`, requestConfig)
    if (!response.ok) {
      alert("Bad credentials!")
      return false
    }
    const token = await response.text()
    localStorage.clear()
    localStorage.setItem("Authorization", token)
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}

export async function registerUser(userDetails: RegisterInfo): Promise<boolean> {
  const requestConfig: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userDetails)
  }
  if (!userDetails.username) {
    alert("Username or password must not be empty!")
    return false
  } else if (userDetails.password.length < 8 || userDetails.password.length > 16) {
    alert("Password must be between 8 and 16 characters!")
    return false
  }
  try {
    const response = await fetch(`${API_URL}api/auth/register`, requestConfig)
    if (!response.ok) {
      const errorMsg = await response.text()
      alert(errorMsg)
      return false
    } else {
      alert("Success!")
      return true
    }
  } catch (error) {
    console.log(error)
    return false
  }
}