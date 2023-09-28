import { API_URL } from "../assets/API"
import { Expense, Income } from "../types/type"

const token = localStorage.getItem("Authorization")
const getRequestConfig: RequestInit = {
  method: "GET",
  headers: {
    "Authorization": "Bearer " + token
  }
}

let errorMsg = ""

export async function getAllPayments() {
  try {
    const response = await fetch(`${API_URL}api/user/payments/all`, getRequestConfig)
    if (!response.ok) {
      errorMsg = "Failed to get all payments"
      alert(errorMsg)
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export async function getAllUsersPayments() {
  try {
    const response = await fetch(`${API_URL}api/user/payments`, getRequestConfig)
    if (!response.ok) {
      errorMsg = "Failed to get user payments"
      alert(errorMsg)
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export async function getPaymentsByCategory(categoryId: number) {
  try {
    const response = await fetch(`${API_URL}api/user/payments/by-category?category_id=${categoryId}`, getRequestConfig)
    if (!response.ok) {
      // errorMsg = "Category with given id does not exist!"
      // alert(errorMsg)
      console.log(errorMsg)
      return []
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export async function getIncome() {
  try {
    const response = await fetch(`${API_URL}api/user/payments/income`, getRequestConfig)
    if (!response.ok) {
      errorMsg = "Failed to get user income"
      alert(errorMsg)
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}


export async function getIncomeBySource(source: string) {
  try {
    const response = await fetch(`${API_URL}api/user/payments/income/by-source?source=${source}`, getRequestConfig)
    if (!response.ok) {
      errorMsg = response.status + "\nFailed to get user income"
      alert(errorMsg)
      return []
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export async function getExpenses() {
  try {
    const response = await fetch(`${API_URL}api/user/payments/expense`, getRequestConfig)
    if (!response.ok) {
      errorMsg = response.status + "\nFailed to get user expenses"
      alert(errorMsg)
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export async function getExpensesByReceiver(receiver: string) {
  try {
    const response = await fetch(`${API_URL}api/user/payments/expense/by-receiver?receiver=${receiver}`, getRequestConfig)
    if (!response.ok) {
      errorMsg = response.status + "\nFailed to get user expenses"
      alert(errorMsg)
      return []
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export async function addNewIncomeEntry(income: Income) {
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
      errorMsg = response.status + " \nFailed to add income"
      alert(errorMsg)
    } else {
      alert("Income added succesfully!")
    }
  } catch (err) {
    console.log(err)
  }
}

export async function addNewExpenseEntry(expense: Expense) {
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
      errorMsg = response.status + " \nFailed to add expense"
      alert(errorMsg)
    } else {
      alert("Expense added succesfully!")
    }
  } catch (err) {
    console.log(err)
  }
}

export async function updateIncome(incomeId: number, updatedIncome: Income) {
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
      errorMsg = response.status + "\nFailed to update information"
      alert(errorMsg)
    } else {
      alert("Information updated succesfully!")
    }
  } catch (err) {
    console.log(err)
  }
}

export async function updateExpense(expenseId: number, updatedExpense: Expense) {
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
      errorMsg = response.status + "\nFailed to update information"
      alert(errorMsg)
    } else {
      alert("Information updated succesfully!")
    }
  } catch (err) {
    console.log(err)
  }
}

export async function deletePayment(paymentId: number) {
  const deleteRequestConfig = {
    method: "DELETE",
    headers: {
      "Authorization": "Bearer " + token
    }
  }
  try {
    const response = await fetch(`${API_URL}api/user/payments/${paymentId}`, deleteRequestConfig)
    if (!response.ok) {
      errorMsg = response.status + "\nFailed to delete"
      alert(errorMsg)
    }
  } catch (err) {
    console.log(err)
  }
}