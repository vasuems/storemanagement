import React, { Component } from 'react';
import '../../App.css';
import {
  Table, Image, Breadcrumb, Row, Col,
  FormGroup, Input, Button, Pagination,
} from 'reactstrap';
import {
  Link,
} from 'react-router-dom';

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 1 };
  }

  render() {
    return (
      <div style={{ marginBottom: '30px', height: '90vh' }}>
        <h3>Orders</h3>
        <Breadcrumb>
          <Breadcrumb.Item href="/admin/dashboard">
                Dashboard
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
                Orders
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col md={12}>
            <Table condensed responsive>
              <thead>
                <tr>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>Table cell</td>
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
      </div>);
  }
}

export default OrderList;
