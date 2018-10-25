import React from 'react';
import {Button} from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const OrderListItem = props => {
  return (
    <tr>
      <td>{props.orderNumber}</td>
      <td>{props.orderedBy}</td>
      <td>{props.orderDate}</td>
      <td>{props.payBy}</td>
      <td>{props.orderStatus}</td>
      <td><Button color="link"><FormattedMessage id="sys.view" /></Button></td>
    </tr>
  )
}

export default OrderListItem;