import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'reactstrap';
import { FaGlobe, FaAt, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { injectIntl, FormattedMessage } from 'react-intl';

const SupplierListItem = props => {
  const { formatMessage } = props.intl;
  return (
    <tr>
      <td>
        <img src={props.logo} className="thumbnail" />
      </td>
      <td>{props.name}</td>
      <td>
        <p>
          <FaGlobe />
          &nbsp;{props.url}
        </p>
        <p>
          <FaAt />
          &nbsp;{props.email}
        </p>
        <p>
          <FaMapMarkerAlt />
          &nbsp;{props.address}
        </p>
        <p>
          <FaPhone />
          &nbsp;{props.contact}
        </p>
      </td>
      <td>
        <Badge color={props.status ? 'success' : 'danger'}>
          {props.status
            ? formatMessage({ id: 'sys.active' })
            : formatMessage({ id: 'sys.inactive' })}
        </Badge>
      </td>
      <td>
        <Button size="sm" color="link" onClick={() => props.onClick(props.id)}>
          <FormattedMessage id="sys.view" />
        </Button>
      </td>
    </tr>
  );
};

SupplierListItem.propTypes = {
  id: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  address: PropTypes.string,
  email: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(SupplierListItem);
