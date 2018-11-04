import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const OrderInfoItem = props => {
  return(
    <Row style={{ marginTop: 20, marginBottom: 20 }}>
      <Col md={4}>
        <b>{ props.title }:</b>
      </Col>
      <Col md={8}>
        { props.content }
      </Col>
    </Row>
  );
};

OrderInfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default OrderInfoItem;