import React from 'react';
import { Button } from 'reactstrap';
const SalesReportListItem = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.sku}</td>
      <td>{props.price}</td>
      <td>{props.quantity}</td>
      <td>{props.amount}</td>
      <td>{props.profit}</td>
    </tr>
  );
};

export default SalesReportListItem;
