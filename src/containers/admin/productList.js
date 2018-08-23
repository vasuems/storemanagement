import React, { Component } from 'react';
import {
  Table,
  Container,
  Row,
  Col
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';

class ProductList extends Component {
  render() {
    return (
      <Container className="content-body">
        <h3><FormattedMessage id="sys.products" /></h3>
        <Row>
          <Col md={12}>
            <Table condensed responsive>
              <thead>
                <tr>
                  <th><FormattedMessage id="sys.name" /></th>
                  <th><FormattedMessage id="sys.desc" /></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product 1</td>
                  <td>asf ads fasdfasd</td>
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

export default ProductList;
