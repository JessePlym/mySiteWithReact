import { API_URL } from "../assets/API"
import { Expense, Income } from "../types/type"

// const token = localStorage.getItem("Authorization")
// const getRequestConfig: RequestInit = {
//   method: "GET",
//   headers: {
//     "Authorization": "Bearer " + token
//   }
// }

// let errorMsg = ""

export async function getAllPayments(token: string) {
  const getRequestConfig: RequestInit = {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token
    }
  }
  try {
    const response = await fetch(`${API_URL}api/user/payments/all`, getRequestConfig)
    if (!response.ok) {
      alert("Failed to get all payments")
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export async function getAllUsersPayments(token: string) {
  const getRequestConfig: RequestInit = {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token
    }
  }
  try {
    const response = await fetch(`${API_URL}api/user/payments`, getRequestConfig)
    if (!response.ok) {
      alert("Failed to get user payments")
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export async function getPaymentsByCategory(categoryId: number, token: string) {
  const getRequestConfig: RequestInit = {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token
    }
  }
  try {
    const response = await fetch(`${API_URL}api/user/payments/by-category?category_id=${categoryId}`, getRequestConfig)
    if (!response.ok) {
      // errorMsg = "Category with given id does not exist!"
      // alert(errorMsg)
      console.log("Category with given id does not exist!")
      return []
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export async function getIncome(token: string) {
  const getRequestConfig: RequestInit = {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token
    }
  }
  try {
    const response = await fetch(`${API_URL}api/user/payments/income`, getRequestConfig)
    if (!response.ok) {
      alert("Failed to get user income")
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}


export async function getIncomeBySource(source: string, token: string) {
  const getRequestConfig: RequestInit = {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token
    }
  }
  try {
    const response = await fetch(`${API_URL}api/user/payments/income/by-source?source=${source}`, getRequestConfig)
    if (!response.ok) {
      alert("\nFailed to get user income")
      return []
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export async function getExpenses(token: string) {
  const getRequestConfig: RequestInit = {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token
    }
  }
  try {
    const response = await fetch(`${API_URL}api/user/payments/expense`, getRequestConfig)
    if (!response.ok) {
      alert("Failed to get user expenses")
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export async function getExpensesByReceiver(receiver: string, token: string) {
  const getRequestConfig: RequestInit = {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token
    }
  }
  try {
    const response = await fetch(`${API_URL}api/user/payments/expense/by-receiver?receiver=${receiver}`, getRequestConfig)
    if (!response.ok) {
      alert("Failed to get user expenses")
      return []
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export async function addNewIncomeEntry(income: Income, token: string) {
  const postRequestConfig = {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(income)
  }
  try {
    const response = await fetch(`${API_URL}api/user/payments/income/new-entry`, postRequestConfig)
    if (!response.ok) {
      alert("Failed to add income")
    } 
  } catch (err) {
    console.log(err)
  }
}

export async function addNewExpenseEntry(expense: Expense, token: string) {
  const postRequestConfig = {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(expense)
  }
  try {
    const response = await fetch(`${API_URL}api/user/payments/expense/new-entry`, postRequestConfig)
    if (!response.ok) {
      alert("Failed to add expense")
    } 
  } catch (err) {
    console.log(err)
  }
}

export async function updateIncome(incomeId: number, updatedIncome: Income, token: string) {
  const putRequestConfig = {
    method: "PUT",
    headers: {
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedIncome)
  }
  try {
    const response = await fetch(`${API_URL}api/user/payments/income/${incomeId}`, putRequestConfig)
    if (!response.ok) {
      alert("Failed to update information")
    } else {
      alert("Information updated succesfully!")
    }
  } catch (err) {
    console.log(err)
  }
}

export async function updateExpense(expenseId: number, updatedExpense: Expense, token: string) {
  const putRequestConfig = {
    method: "PUT",
    headers: {
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedExpense)
  }
  try {
    const response = await fetch(`${API_URL}api/user/payments/expense/${expenseId}`, putRequestConfig)
    if (!response.ok) {
      alert("Failed to update information")
    } else {
      alert("Information updated succesfully!")
    }
  } catch (err) {
    console.log(err)
  }
}

export async function deletePayment(paymentId: number, token: string) {
  const deleteRequestConfig = {
    method: "DELETE",
    headers: {
      "Authorization": "Bearer " + token
    }
  }
  try {
    const response = await fetch(`${API_URL}api/user/payments/${paymentId}`, deleteRequestConfig)
    if (!response.ok) {
      alert("Failed to delete")
    }
  } catch (err) {
    console.log(err)
  }
}