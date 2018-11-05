import React from 'react';
import { Button } from 'reactstrap';

const SalesReportListCategoryItem = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.quantity}</td>
      <td>{props.amount}</td>
      <td>{props.profit}</td>
    </tr>
  );
};

export default SalesReportListCategoryItem;
