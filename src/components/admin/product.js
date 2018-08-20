import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

class Product extends Component {
  render() {
    return (
      <Container>
        <h3><FormattedMessage id="sys.products" /></h3>
        <Breadcrumb>
          <Breadcrumb.Item href="/admin/dashboard">Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item active>Products</Breadcrumb.Item>
        </Breadcrumb>
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
      </Container>
    );
  }
}

export default Product;
