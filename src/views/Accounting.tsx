import { Link } from "react-router-dom"
import "../styles/accounting.css"
import PaymentTable from "../components/PaymentTable"
import FilterInput from "../components/FilterInput"


export default function Accounting() {
  return (
    <>
      <main className="table-container">
        <div className="search-container">
          <div className="display-container">
            <label htmlFor="display" className="display-label">
              Displaying all payments
            </label>
            <select id="select-display">
              <option style={{display: "none"}}></option>
              <option>All Payments</option>
              <option>Income</option>
              <option>Expenses</option>
            </select>
          </div>
          <FilterInput 
            className="category-filter"
            id="category-input"
            label="Filter by category ID"
            type="number"
            value=""
            minValue={1}
          />
          <FilterInput 
            className="source-filter"
            id="source-input"
            label="Filter by source"
            type="text"
            value=""
            placeholder="Enter payment source"
          />
          <FilterInput 
            className="receiver-filter"
            id="receiver-input"
            label="Filter by receiver"
            type="text"
            value=""
            placeholder="Enter payment receiver"
          />
        </div>
        <div className="total-add-container">
          <p className="total-amount">
            Total: 0€
          </p>
          <button className="add-new-button">
            Add
          </button>
        </div>
        <PaymentTable />
    
        <Link className="back-link" to="/">
          Go Back
        </Link>
      </main>
    </>
  )
}
