import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';
import numeral from 'numeral';

const ProductListItem = props => {
  const {
    coverImage,
    name,
    sku,
    currencySign,
    price,
    quantity,
    status,
    id,
    onClick,
    intl: { formatMessage },
  } = props;

  return (
    <tr>
      <td>
        <img src={coverImage || require('../../assets/no_image.svg')} className="thumbnail" />
      </td>
      <td>{name}</td>
      <td>{sku}</td>
      <td>{currencySign + numeral(price).format('0,0.00')}</td>
      <td>{quantity}</td>
      <td>
        <Badge color={status ? 'success' : 'danger'}>
          {status
            ? formatMessage({ id: 'sys.active' })
            : formatMessage({ id: 'sys.inactive' })}
        </Badge>
      </td>
      <td>
        <Button size="sm" color="link" onClick={() => onClick(id)}>
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
  status: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(ProductListItem);
