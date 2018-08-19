import React, { Component } from 'react';
import { Container, Table, Row, Col, Pagination } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 1 };
  }

  render() {
    return (
      <Container>
        <h3>Orders</h3>
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
      </Container>
    );
  }
}

export default OrderList;
