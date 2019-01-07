import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from 'reactstrap';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import { injectIntl, FormattedMessage } from 'react-intl';
import { OrderForm } from '../forms';
import config from '../../config';

class Order extends Component {
  render() {
    const { history } = this.props;
    const { data: { storeId } } = jwt.decode(localStorage.getItem(config.accessTokenKey));

    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Button color="link" onClick={() => history.push('/dashboard')}>
              <FormattedMessage id="sys.dashboard" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button color="link" onClick={() => history.push('/orders')}>
              <FormattedMessage id="sys.orders" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <FormattedMessage id="sys.orderDetails" />
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="content-body">
          <Row>
            <Col md={12}>
              <OrderForm
                storeId={storeId} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

Order.propTypes = {
  products: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(injectIntl(Order))
);
