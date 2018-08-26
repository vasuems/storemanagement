import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="no-border product-item">
        <a href={this.props.productURL}>
          <div
            className="product-cover"
            style={{ backgroundImage: `url(${this.props.productImage})` }}
          />
        </a>
        <br />
        <Row className="product-item-footer">
          <Col md={7} xs={7}>
            <a href={this.props.productURL}>{this.props.productName}</a>
          </Col>
          <Col md={5} xs={5} className="text-right">
            <strong>{this.props.productPrice}</strong>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Product;
