import React, { Component } from 'react';
import '../App.css';
import {
  Row, Col,
} from 'reactstrap';
import Product from './Product';

class ProductImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col md={2} style={{ paddingRight: 0 }}>
          {
            this.props.thumbnails.map(thumbnail => (<img src={thumbnail} className="productDetailImage" />))
          }
        </Col>
        <Col md={10}>
          <img src={this.props.mainImage} style={{ width: '100%' }} />
        </Col>
      </Row>
    );
  }
}

export default ProductImage;
