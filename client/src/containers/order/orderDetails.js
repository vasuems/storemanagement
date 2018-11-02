import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class OrderDetails extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Button
              color="link"
              onClick={() => this.props.history.push('/dashboard')}
            >
              <FormattedMessage id="sys.dashboard" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button
              color="link"
              onClick={() => this.props.history.push('/orders')}
            >
              <FormattedMessage id="sys.orders" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <FormattedMessage id="sys.orderDetails" />
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="content-body">
          <Row className="table-container">
            <Col md={12} className="table-content" />
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(withRouter(OrderDetails));
