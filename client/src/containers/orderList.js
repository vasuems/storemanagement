import React, { Component } from 'react';
import { Table, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 1 };
  }

  render() {
    return (
      <div className="content-body">
        <h3>
          <FormattedMessage id="sys.orders" />
        </h3>
        <Row>
          <Col md={12}>
            <Table condensed responsive style={{ backgroundColor: '#fff' }}>
              <thead>
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
                <tr>
                  <td>1101</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>1102</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>1103</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
            <Pagination aria-label="Page navigation example">
              <PaginationItem disabled>
                <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
      </div>
    );
  }
}

export default OrderList;
