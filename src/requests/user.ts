import { API_URL } from "../assets/API"

export async function getUserDetails() {
  const token = localStorage.getItem("Authorization")
  const requestConfig = {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token
    }
  }
  try {
    const response = await fetch(`${API_URL}api/users/current`, requestConfig)
    if (!response.ok) {
      localStorage.clear()
      throw new Error("Failed to fetch user")
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}