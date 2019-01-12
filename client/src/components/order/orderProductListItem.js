import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const OrderProductListItem = props => {
  const { code, name, currencySign, unitPrice, quantity, onDeleteClick } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{currencySign + numeral(unitPrice).format('0,0.00')}</td>
      <td>{quantity}</td>
      <td>{currencySign + numeral(unitPrice * quantity).format('0,0.00')}</td>
      <td><IoIosCloseCircleOutline color="red" size={18} style={{ cursor: 'pointer' }} onClick={() => onDeleteClick(code)} /></td>
    </tr>
  );
};

OrderProductListItem.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  unitPrice: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  currencySign: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default OrderProductListItem;
