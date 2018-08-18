import React, { Component } from 'react';
import {
  ListGroup, ListGroupItem,
  Breadcrumb, Row, Col,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    return (
      <div style={{ marginBottom: '30px' }}>
        <h3>Products</h3>
        <Breadcrumb>
          <Breadcrumb.Item href="/admin/dashboard">
                Dashboard
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
                Products
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col md={12}>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col md={2}>
                            Nicholas Chen
                  </Col>
                  <Col md={8}>
                            nicholas_chan82@hotmail.com
                  </Col>
                  <Col md={2}>
                        Delete
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col md={2}>
                            Nicholas Chen
                  </Col>
                  <Col md={8}>
                            nicholas_chan82@hotmail.com
                  </Col>
                  <Col md={2}>
                        Delete
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Button bsStyle="primary" style={{ float: 'right' }}>Checkout</Button>
      </div>);
  }
}

export default ProductList;
