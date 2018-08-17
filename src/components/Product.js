import React, { Component } from 'react';
import '../App.css';
import {
  Row, Col,
} from 'reactstrap';


class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="no-border product-item">
        <a href={this.props.productURL}>
          <div className="product-cover" style={{ backgroundImage: `url(${this.props.productImage})` }} />
        </a>
        <br />
        <Row className="product-item-footer">
          <Col md={8} xs={8}>
            <a href={this.props.productURL}>{this.props.productName}</a>
          </Col>
          <Col md={4} xs={4} className="text-right">
            <strong>{this.props.productPrice}</strong>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Product;
