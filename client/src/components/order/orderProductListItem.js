import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const OrderProductListItem = props => {
  const { name, currencySign, unitPrice, quantity, amount } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{currencySign + numeral(unitPrice).format('0,0.00')}</td>
      <td>{quantity}</td>
      <td>{currencySign + numeral(amount).format('0,0.00')}</td>
      <td><IoIosCloseCircleOutline color="red" size={18} style={{ cursor: 'pointer' }} onClick={() => alert(123)} /></td>
    </tr>
  );
};

OrderProductListItem.propTypes = {
  name: PropTypes.string.isRequired,
  unitPrice: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  currencySign: PropTypes.string.isRequired,
};

export default OrderProductListItem;
