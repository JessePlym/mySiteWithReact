import { Link } from "react-router-dom"
import "../styles/accounting.css"
import PaymentTable from "../components/PaymentTable"
import FilterInput from "../components/FilterInput"
import { useEffect, useMemo, useState } from "react"
import { Payment } from "../types/type"
import { getAllUsersPayments, 
  getExpenses, 
  getExpensesByReceiver, 
  getIncome, 
  getIncomeBySource, 
  getPaymentsByCategory 
} from "../requests/payment"
import Dialog from "../components/Dialog"
import NewPaymentForm from "../components/NewPaymentForm"


export default function Accounting() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [displayValue, setDisplayValue] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [categoryValue, setCategoryValue] = useState(0)
  const [source, setSource] = useState("")
  const [receiver, setReceiver] = useState("")
  const [openModal, setOpenModal] = useState(false)

  const token = useMemo(() => localStorage.getItem("Authorization") ?? "", [])

  useEffect(() => {
    const displayPayments = async () => {
      if (displayValue === "" || displayValue === "all") {
        setPayments(await getAllUsersPayments(token))
      } else if (displayValue === "income") {
        setPayments(await getIncome(token))
      } else {
        setPayments(await getExpenses(token))
      }
    }

    displayPayments()
  }, [displayValue, token])

  useEffect(() => {
    const displayPayments = async () => {
      if (categoryValue === 0) return
      setPayments(await getPaymentsByCategory(categoryValue, token))
    }

    displayPayments()
  }, [categoryValue, token])

  useEffect(() => {
    calculateTotal(payments)
  }, [payments])

  const handleCategoryFilter = (newValue: number) => {
    newValue < 1 ? setCategoryValue(1) : setCategoryValue(newValue)
  }

  const handleSearch = async (input: string, searchType: string) => {
    if (searchType === "source-input") {
      setPayments(await getIncomeBySource(input, token))
    } else if (searchType === "receiver-input") {
      setPayments(await getExpensesByReceiver(input, token))
    } else {
      return
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
              {displayValue === "income" ? "Displaying income" 
                : displayValue === "expense" ? "Displaying expenses" 
                : "Displaying all payments"
              }
            </label>
            <select id="select-display" value={displayValue} onChange={e => setDisplayValue(e.target.value)}>
              <option value="" style={{display: "none"}}></option>
              <option value="all">All Payments</option>
              <option value="income">Income</option>
              <option value="expense">Expenses</option>
            </select>
          </div>
          {
            (displayValue === "" || displayValue === "all") && 
              <FilterInput 
                className="category-filter"
                id="category-input"
                label="Filter by category ID"
                type="number"
                value={categoryValue}
                setValue={handleCategoryFilter}
                minValue={1}
              />
          }
          {
            displayValue === "income" ? 
              <FilterInput 
                className="source-filter"
                id="source-input"
                label="Filter by source"
                type="text"
                value={source}
                handleSearch={handleSearch}
                setValue={setSource}
                placeholder="Enter payment source"
              />
            : displayValue === "expense" ?
              <FilterInput 
                className="receiver-filter"
                id="receiver-input"
                label="Filter by receiver"
                type="text"
                value={receiver}
                handleSearch={handleSearch}
                setValue={setReceiver}
                placeholder="Enter payment receiver"
              />
            : <></>
          }
        </div>
        <div className="total-add-container">
          <p className="total-amount">
            Total: {totalAmount.toFixed(2).replace(".", ",")}€
          </p>
          <button className="add-new-button" onClick={() => setOpenModal(true)}>
            Add
          </button>
        </div>
        <PaymentTable payments={payments} paymentType={displayValue}/>
    
        <Link className="back-link" to="/">
          Go Back
        </Link>

      </main>

      <Dialog open={openModal} >
         <NewPaymentForm setOpenModal={setOpenModal}/>
      </Dialog>
    </>
  )
}
