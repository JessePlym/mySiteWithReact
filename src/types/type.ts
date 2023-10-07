export type Credentials = {
  username: string
  password: string
}

export type RegisterInfo = Credentials & {
  firstName: string
  lastName: string
  passwordCheck: string
}

export type User = {
  id: number
  firstName: string
  lastName: string
  username: string
  registerDate: string
  role: string
}

export type Category = {
  id: number
  name: string
}

export type Income = {
  id?: number
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
  id?: number
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
  id?: number
  amount: number | string
  description: string
  createdAt: string
  updatedAt: string
  isContinous: boolean
  receiver?: string
  source?: string
  user?: User
  category: Category
}