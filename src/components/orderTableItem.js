import React from 'react';

const OrderTableItem = props => {
  const { number, date, amount, payment, status } = props;

  return (
    <tr>
      <td scope="row">{number}</td>
      <td>{date}</td>
      <td>{amount}</td>
      <td>{payment}</td>
      <td>{status}</td>
    </tr>
  );
};

export default OrderTableItem;
