import React from 'react'

const OrderDetailsRow = (props) => {
  const {name, quantity, price, address} = props.product
  let total = quantity * price
  return (
    <tr>
      <th>#{props.index + 1}</th>
      <td>{name}</td>
      <td>₹ {price.toFixed(2)}</td>
      <td>{quantity}</td>
      <td>₹ {total.toFixed(2)}</td>
      <td>{address}</td>
    </tr>
  )
}

export default OrderDetailsRow
