import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const OrderProductListItem = props => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.currencySign + numeral(props.price).format('0,0.00')}</td>
      <td>{props.quantity}</td>
      <td>{props.currencySign + numeral(props.amount).format('0,0.00')}</td>
      <td><IoIosCloseCircleOutline color="red" size={18} style={{cursor: 'pointer'}} onClick={() => alert(123)} /></td>
    </tr>
  );
};

OrderProductListItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string,
  currencySign: PropTypes.string.isRequired,
};

export default OrderProductListItem;
