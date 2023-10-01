import { API_URL } from "../assets/API"

export const isServerAwake = async () => {
  try {
    const response = await fetch(`${API_URL}connect`)
    if (response.ok) return true
    return false
  } catch {
    return false
  }
}