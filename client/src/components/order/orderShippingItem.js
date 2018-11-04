import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';

const OrderShippingItem = props => {
  const { formatMessage } = props.intl;
  return(
    <Row style={{ marginTop: 20, marginBottom: 20 }}>
      <Col md={5}>
        {formatMessage({ id: 'sys.handledBy' })}&nbsp;<b>{ props.courier }</b>,&nbsp;
        { props.datetime }
      </Col>
      <Col md={4}>
        { props.location }
      </Col>
      <Col md={3} style={{color: props.statusColor || '#000'}}>
        { props.status }
      </Col>
    </Row>
  );
};

OrderShippingItem.propTypes = {
  courier: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  statusColor: PropTypes.string,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(OrderShippingItem);