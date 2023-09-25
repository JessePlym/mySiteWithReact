import { PaymentTableProps } from "../types/props";
import { capitalizeFirstLetter } from "../utils/stringFormat";
import { formatDate } from "../utils/dateFormat";

export default function PaymentTable({payments}: PaymentTableProps) {
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
          <th className="receiver source">
            Receiver/Source
          </th>
          <th className="table-category">
            Category (ID)
          </th>
        </tr>
      </thead>
      <tbody className="table-body">
        {
          payments ?
          payments.map(payment => {
            if (payment.source) {
              return (
                <tr key={payment.id}>
                  <td>{capitalizeFirstLetter(payment.description)}</td>
                  <td>{`${payment.amount.toFixed(2).replace(".", ",")} €`}</td>
                  <td>{formatDate(payment.createdAt)}</td>
                  <td>{formatDate(payment.updatedAt)}</td>
                  <td>{capitalizeFirstLetter(payment.source)}</td>
                  <td>{capitalizeFirstLetter(payment.category.name)}</td>
                </tr>
              )
            } else if (payment.receiver) {
              return (
                <tr key={payment.id}>
                  <td>{capitalizeFirstLetter(payment.description)}</td>
                  <td>{`${payment.amount.toFixed(2).replace(".", ",")} €`}</td>
                  <td>{formatDate(payment.createdAt)}</td>
                  <td>{formatDate(payment.updatedAt)}</td>
                  <td>{capitalizeFirstLetter(payment.receiver)}</td>
                  <td>{capitalizeFirstLetter(payment.category.name)}</td>
                </tr>
              )
            }})
          :
          <tr>
          </tr>
        }
      </tbody>
      </table>
  )
}
