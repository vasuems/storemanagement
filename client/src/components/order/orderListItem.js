import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';

const OrderListItem = props => {
  const { formatMessage } = props.intl;
  const {
    number,
    customer,
    date,
    payment,
    status,
    onClick,
  } = props;

  return (
    <tr>
      <td>{number}</td>
      <td>{customer}</td>
      <td>{date}</td>
      <td>{payment}</td>
      <td>
        <Badge color={status ? 'success' : 'danger'}>
          {status
            ? formatMessage({ id: 'sys.active' })
            : formatMessage({ id: 'sys.inactive' })}
        </Badge></td>
      <td>
        <Button
          size="sm"
          color="link"
          onClick={() => onClick(number)}
        >
          <FormattedMessage id="sys.view" />
        </Button>
      </td>
    </tr>
  );
};

OrderListItem.propTypes = {
  number: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  payment: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(OrderListItem);
