export default function PaymentTable() {
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
        <td className="table-description"></td>
        <td className="table-amount"></td>
        <td className="table-created"></td>
        <td className="table-updated"></td>
        <td className="table-receiver"></td>
        <td className="table-category"></td>
      </tbody>
      </table>
  )
}
