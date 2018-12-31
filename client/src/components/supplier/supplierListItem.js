import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge, Col, Row } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';
import { FaGlobe, FaAt, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const SupplierListItem = props => {
  const { formatMessage } = props.intl;
  return (
    <tr>
      <td>
        <img src={props.logo || require('../../assets/no_image.svg')} className="thumbnail" />
      </td>
      <td>{props.name}</td>
      <td style={{ fontSize: 14 }}>
        <div>
          <FaGlobe color="#555" />
          &nbsp;&nbsp;{props.url}
        </div>
        <div style={{ marginTop: 5 }}>
          <FaAt color="#e22b46" />
          &nbsp;&nbsp;{props.email}
        </div>
        <div style={{ marginTop: 5 }}>
          <FaMapMarkerAlt color="#2e66c1" />
          &nbsp;&nbsp;{props.address}
        </div>
        <div style={{ marginTop: 5 }}>
          <FaPhone color="#26ad72" />
          &nbsp;&nbsp;{props.contact}
        </div>
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
    </tr >
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
