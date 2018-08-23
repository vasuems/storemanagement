import React, { Component } from 'react';
import {
  Table,
  Container,
  Row,
  Col
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';

class Payment extends Component {
  render() {
    return (
      <Container className="content-body">
        <h3><FormattedMessage id="sys.customers" /></h3>
        <Row>
          <Col md={12}>
            <Table condensed responsive>
              <thead>
                <tr>
                  <th><FormattedMessage id="sys.name" /></th>
                  <th><FormattedMessage id="sys.email" /></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nicholas Chen</td>
                  <td>nicholas_chan82@hotmail.com</td>
                  <td><FormattedMessage id="sys.delete" /></td>
                </tr>
              </tbody>            
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Payment;
