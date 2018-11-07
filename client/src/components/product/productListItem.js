import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';
import numeral from 'numeral';

const ProductListItem = (props) => {
  const { formatMessage } = props.intl;
  return (
    <tr>
      <td><img src={props.coverImage} className="thumbnail" /></td>
      <td>{props.name}</td>
      <td>{props.sku}</td>
      <td>{props.currencySign + numeral(props.price).format('0,0.00')}</td>
      <td>{props.quantity}</td>
      <td>
        <Badge color={props.status ? 'success' : 'danger'}>
          {props.status ? formatMessage({ id: 'sys.active' }) : formatMessage({ id: 'sys.inactive' })}
        </Badge>
      </td>
      <td>
        <Button
          size="sm"
          color="link"
          onClick={() => props.onClick(props.id)}
        >
          <FormattedMessage id="sys.view" />
        </Button>
      </td>
    </tr>
  );
};

ProductListItem.propTypes = {
  id: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  currency: PropTypes.string,
  currencySign: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(ProductListItem);
