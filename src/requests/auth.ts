import { API_URL } from "../assets/API";
import { Credentials } from "../types/type";

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