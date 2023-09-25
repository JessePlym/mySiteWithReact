import { Link } from "react-router-dom"
import "../styles/accounting.css"
import PaymentTable from "../components/PaymentTable"
import FilterInput from "../components/FilterInput"
import { useEffect, useState } from "react"
import { Payment } from "../types/type"
import { getAllUsersPayments, getExpenses, getIncome, getPaymentsByCategory } from "../requests/payment"


export default function Accounting() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [displayValue, setDisplayValue] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [categoryValue, setCategoryValue] = useState<number>(0)

  useEffect(() => {
    const displayPayments = async () => {
      if (displayValue === "" || displayValue === "all") {
        setPayments(await getAllUsersPayments())
      } else if (displayValue === "income") {
        setPayments(await getIncome())
      } else {
        setPayments(await getExpenses())
      }
    }

    displayPayments()
  }, [displayValue])

  useEffect(() => {
    const displayPayments = async () => {
      if (categoryValue === 0) return
      setPayments(await getPaymentsByCategory(categoryValue))
    }

    displayPayments()
  }, [categoryValue])

  useEffect(() => {
    calculateTotal(payments)
  }, [payments])

  const handleCategoryFilter = (newValue: number) => {
    if (newValue < 1) {
      setCategoryValue(1)
    } else {
      setCategoryValue(newValue)
    }
    
  }

  const calculateTotal = (payments: Payment[]) => {
    const total = payments.reduce((total: number, payment: Payment) => {
      if (payment.source) {
        return total + payment.amount
      } else {
        return total - payment.amount
      }
    }, 0)
    setTotalAmount(total)
  }

  return (
    <>
      <main className="table-container">
        <div className="search-container">
          <div className="display-container">
            <label htmlFor="display" className="display-label">
              Displaying all payments
            </label>
            <select id="select-display" value={displayValue} onChange={e => setDisplayValue(e.target.value)}>
              <option value="" style={{display: "none"}}></option>
              <option value="all">All Payments</option>
              <option value="income">Income</option>
              <option value="expense">Expenses</option>
            </select>
          </div>
          <FilterInput 
            className="category-filter"
            id="category-input"
            label="Filter by category ID"
            type="number"
            value={categoryValue}
            setValue={handleCategoryFilter}
            minValue={1}
          />
          {
            displayValue === "income" ? 
              <FilterInput 
                className="source-filter"
                id="source-input"
                label="Filter by source"
                type="text"
                value=""
                setValue={setCategoryValue}
                placeholder="Enter payment source"
              />
            : displayValue === "expense" ?
              <FilterInput 
                className="receiver-filter"
                id="receiver-input"
                label="Filter by receiver"
                type="text"
                value=""
                setValue={setCategoryValue}
                placeholder="Enter payment receiver"
              />
            : <></>
          }
        </div>
        <div className="total-add-container">
          <p className="total-amount">
            Total: {totalAmount.toFixed(2).replace(".", ",")}€
          </p>
          <button className="add-new-button">
            Add
          </button>
        </div>
        <PaymentTable payments={payments} paymentType={displayValue}/>
    
        <Link className="back-link" to="/">
          Go Back
        </Link>
      </main>
    </>
  )
}
