import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';

class ProductList extends Component {
  render() {
    return (
      <Container>
        <h3><FormattedMessage id="sys.products" /></h3>
        <Row>
          <Col md={12}>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col md={2}>Nicholas Chen</Col>
                  <Col md={8}>nicholas_chan82@hotmail.com</Col>
                  <Col md={2}>Delete</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col md={2}>Nicholas Chen</Col>
                  <Col md={8}>nicholas_chan82@hotmail.com</Col>
                  <Col md={2}>Delete</Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Button bsStyle="primary" style={{ float: 'right' }}>
          Checkout
        </Button>
      </Container>
    );
  }
}

export default ProductList;
