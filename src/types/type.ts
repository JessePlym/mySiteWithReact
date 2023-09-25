export type Credentials = {
  username: string
  password: string
}

export type User = {
  id: string
  firstName: string
  lastName: string
  username: string
  registerDate: string
  role: string
}

export type Category = {
  id: string
  name: string
}

export type Income = {
  id: string
  amount: number
  description: string
  createdAt: string
  updatedAt: string
  isContinous: boolean
  source: string
  category: Category
  user: User
}

export type Expense = {
  id: string
  amount: number
  description: string
  createdAt: string
  updatedAt: string
  isContinous: boolean
  receiver: string
  category: Category
  user: User
}

export type Payment = {
  id: string
  amount: number
  description: string
  createdAt: string
  updatedAt: string
  isContinous: boolean
  receiver?: string
  source?: string
  category: Category
  user: User
}