import { API_URL } from "../assets/API"

let errorMsg = ""

export async function getAllCategories(token: string) {
  const requestConfig: RequestInit = {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token
    }
  }
  try {
    const response = await fetch(`${API_URL}api/categories`, requestConfig)
    if (!response.ok) {
      errorMsg = "Failed to get categories"
      alert(errorMsg)
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}