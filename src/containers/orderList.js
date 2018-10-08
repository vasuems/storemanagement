import React, { Component } from 'react';
import { Table, Row, Col, Pagination } from 'reactstrap';
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
            <Pagination
              bsSize="small"
              items={10}
              activePage={this.state.activePage}
              onSelect={this.handleSelect}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default OrderList;
