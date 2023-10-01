import { API_URL } from "../assets/API"
import { Category } from "../types/type"

const token = localStorage.getItem("Authorization")
const requestConfig: RequestInit = {
  method: "GET",
  headers: {
    "Authorization": "Bearer " + token
  }
}
let errorMsg = ""

export async function getAllCategories(): Promise<Category[] | void> {
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