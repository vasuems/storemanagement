import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const OrderInfo = props => {
  return(
    <Row>
      <Col md={3}>
        <b>
          <FormattedMessage id="sys.productNumber" />
        </b>
      </Col>
      <Col md={9}>
        { props.productNumber }
      </Col>
    </Row>
  );
};

OrderInfo.propTypes = {
  productNumber: PropTypes.string.isRequired,
};

export default orderInfo;