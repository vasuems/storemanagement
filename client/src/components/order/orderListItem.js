import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const OrderListItem = props => (
  <tr>
    <td>{props.number}</td>
    <td>{props.customer}</td>
    <td>{props.date}</td>
    <td>{props.payment}</td>
    <td>{props.status}</td>
    <td>
      <Button
        size="sm"
        color="link"
        onClick={() => props.onClick(props.number)}
      >
        <FormattedMessage id="sys.view" />
      </Button>
    </td>
  </tr>
);

OrderListItem.propTypes = {
  number: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  payment: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OrderListItem;
