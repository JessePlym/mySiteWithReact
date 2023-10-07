import { PaymentTableProps } from "../types/props";
import { capitalizeFirstLetter } from "../utils/stringFormat";
import { formatDate } from "../utils/dateFormat";

export default function PaymentTable({payments, paymentType}: PaymentTableProps) {
  return (
    <table className="payment-table">
      <thead className="table-head">
        <tr>
          <th className="table-description">
            Description
          </th>
          <th>
            Amount
          </th>
          <th className="table-created">
            CreatedAt
          </th>
          <th className="table-updated">
            UpdatedAt
          </th>
          {
            paymentType === "income" ? 
              <th className="receiver source">
                Source
              </th>
            : paymentType === "expense" ?
              <th className="receiver source">
                Receiver
              </th>
            : 
              <th className="receiver source">
                Receiver/Source
              </th>
          }
          <th className="table-category">
            Category (ID)
          </th>
        </tr>
      </thead>
      <tbody className="table-body">
        {
          payments &&
          payments.map(payment => {
            if (payment.source) {
              return (
                <tr key={payment.id}>
                  <td className="table-description">{capitalizeFirstLetter(payment.description)}</td>
                  <td className="table-amount-income">{`${Number(payment.amount).toFixed(2).replace(".", ",")} €`}</td>
                  <td className="table-created">{formatDate(payment.createdAt)}</td>
                  <td className="table-updated">{formatDate(payment.updatedAt)}</td>
                  <td className="table-source">{capitalizeFirstLetter(payment.source)}</td>
                  <td className="table-category">{capitalizeFirstLetter(payment.category.name)} ({payment.category.id})</td>
                </tr>
              )
            } else {
              return (
                <tr key={payment.id}>
                  <td className="table-description">{capitalizeFirstLetter(payment.description)}</td>
                  <td className="table-amount-expense">{`-${Number(payment.amount).toFixed(2).replace(".", ",")} €`}</td>
                  <td className="table-created">{formatDate(payment.createdAt)}</td>
                  <td className="table-updated">{formatDate(payment.updatedAt)}</td>
                  <td className="table-receiver">{capitalizeFirstLetter(payment.receiver!)}</td>
                  <td className="table-category">{capitalizeFirstLetter(payment.category.name)} ({payment.category.id})</td>
                </tr>
              )
            }
          })
        }
      </tbody>
    </table>
  )
}
