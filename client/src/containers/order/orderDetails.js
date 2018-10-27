import React, { Component } from 'react';
import {
  Table,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class OrderDetails extends Component {
  render(){
    return (
      <div className="content-body">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/dashboard">
              <FormattedMessage id="sys.dashboard" />
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/dashboard/#/orders">
              <FormattedMessage id="sys.orders" />
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <FormattedMessage id="sys.orderDetails" />
          </BreadcrumbItem>
        </Breadcrumb>
        <Row className="table-container">
          <Col md={12} className="table-content">
            <Table bordered responsive>
              <thead className="table-header">
                <tr>
                  <th>
                    <FormattedMessage id="sys.orderNumber" />
                  </th>
                  <th>
                    <FormattedMessage id="sys.orderedBy" />
                  </th>
                  <th>
                    <FormattedMessage id="sys.orderDate" />
                  </th>
                  <th>
                    <FormattedMessage id="sys.payBy" />
                  </th>
                  <th>
                    <FormattedMessage id="sys.orderStatus" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(null, null)(OrderDetails);