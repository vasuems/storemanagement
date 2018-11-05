import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';

const ProductListItem = (props) => {
  const { formatMessage } = props.intl;
  return (
    <tr>
      <td><img src={props.coverImage} className="thumbnail" /></td>
      <td>{props.name}</td>
      <td>{props.sku}</td>
      <td>{props.currency + ' $' + props.price}</td>
      <td>{props.status ? formatMessage({ id: 'sys.active' }) : formatMessage({ id: 'sys.inactive' })}</td>
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
  currency: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(ProductListItem);
