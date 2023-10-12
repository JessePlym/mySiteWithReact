import { Dispatch, SetStateAction, useContext, useEffect, useMemo, useState } from 'react'
import FormField from './FormField'
import { getAllCategories } from '../requests/category'
import { Payment, Category, Income, Expense } from '../types/type'
import { addNewExpenseEntry, addNewIncomeEntry, getAllUsersPayments } from '../requests/payment'
import UserContext from '../context/UserContext'

const initialCategory: Category = {
  id: 1,
  name: "Salary"
}

const initialFormState: Payment = {
  description: "",
  amount: "",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  isContinous: false,
  source: "",
  receiver: "",
  user: undefined,
  category: {
    id: -1,
    name: ""
  }
}

export type NewPaymentFormProps = {
  setOpenModal: Dispatch<SetStateAction<boolean>>
  setPayments: Dispatch<SetStateAction<Payment[]>>
}

export default function NewPaymentForm({ setOpenModal, setPayments }: NewPaymentFormProps) {
  const [paymentDetails, setPaymentDetails] = useState<Payment>(initialFormState)
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory)
  const [categories, setCategories] = useState<Category[]>([])
  const [paymentType, setPaymentType] = useState("income")
  const { userDetails } = useContext(UserContext)

  const token = useMemo(() => localStorage.getItem("Authorization") ?? "", [])

  useEffect(() => {
    const fetchData = async () => {
      setCategories(await getAllCategories(token))
    }
    setPaymentDetails((prev): Payment => ({...prev, user: userDetails}))
    
    fetchData()
  }, [token, userDetails])
  
  const cancelDialog = () => {
    setPaymentDetails(initialFormState)
    setOpenModal(false)
  }

  const savePayment = async () => {
    if (paymentType === "income") {
      const addedIncome: Income = {
        amount: Number(paymentDetails.amount),
        description: paymentDetails.description ? paymentDetails.description : "No description",
        createdAt: paymentDetails.createdAt,
        updatedAt: paymentDetails.updatedAt,
        isContinous: paymentDetails.isContinous,
        source: paymentDetails.source ? paymentDetails.source : "No source",
        category: selectedCategory,
        user: paymentDetails.user!
      }
      await addNewIncomeEntry(addedIncome, token)
    } else {
      const addedExpense: Expense = {
        amount: Number(paymentDetails.amount),
        description: paymentDetails.description ? paymentDetails.description : "No description",
        createdAt: paymentDetails.createdAt,
        updatedAt: paymentDetails.updatedAt,
        isContinous: paymentDetails.isContinous,
        receiver: paymentDetails.receiver ? paymentDetails.receiver : "No receiver",
        category: selectedCategory,
        user: paymentDetails.user!
      }
      await addNewExpenseEntry(addedExpense, token)
    }
    setPaymentDetails(initialFormState)
    setPayments(await getAllUsersPayments(token))
    setOpenModal(false)
  }

  return (
    <form className="modal-form" onSubmit={e => e.preventDefault()}>
      <h2>ADD PAYMENT</h2>
        <FormField 
          label="Description"
          name="description"
          value={paymentDetails.description}
          type="text"
          placeholder="enter description"
          id="description"
          setValue={e => setPaymentDetails({...paymentDetails, description: e.target.value})}
        />
        <FormField 
          label="Amount"
          name="amount"
          value={paymentDetails.amount!}
          type="number"
          placeholder="enter amount"
          id="amount"
          setValue={e => setPaymentDetails({...paymentDetails, amount: Number(e.target.value)})}
        />
        <div className="form-field">
          <label>Category</label>
          <select value={selectedCategory.id} onChange={e => setSelectedCategory({...selectedCategory, id: Number(e.target.value)})}>
            { categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <div className="radio-group">
          <label htmlFor="income">Income</label>
          <input 
            type="radio"
            id="income"
            value="income"
            name="income-expense"
            checked={paymentType === "income"}
            onChange={e => setPaymentType(e.target.value)}
          />
          <label htmlFor="expense">Expense</label>
          <input 
            type="radio"
            id="expense"
            value="expense"
            name="income-expense"
            checked={paymentType === "expense"}
            onChange={e => setPaymentType(e.target.value)}
          />
        </div>
        {
          paymentType === "income" ? 
            <FormField 
              label="Source"
              name="source"
              value={paymentDetails.source!}
              type="text"
              placeholder="enter source"
              id="source"
              setValue={e => setPaymentDetails({...paymentDetails, source: e.target.value})}
            />
          : 
          <FormField 
            label="Receiver"
            name="receiver"
            value={paymentDetails.receiver!}
            type="text"
            placeholder="enter receiver"
            id="receiver"
            setValue={e => setPaymentDetails({...paymentDetails, receiver: e.target.value})}
          />
        }
        <button className="save-payment-button" type="submit" onClick={savePayment}>
          Save
        </button>
        <button className="cancel-button" onClick={cancelDialog}>
          Cancel
        </button>
    </form> 
  )
}
