import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Product from '../components/Product';
import '../App.css';

class NewProductList extends Component {
  render() {
    return (
      <div style={{ marginTop: '30px' }}>
        <div className="text-center headline">
                New Arrivals
        </div>
        <Row className="show-grid">
          {this.props.newProducts.map(product => (
            <Col key={product.productURL} md={3}>
              <Product
                productName={product.productName}
                productURL={product.productURL}
                productImage={product.productImage}
                productPrice={product.productPrice}
              />
            </Col>
          ))
              }
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newProducts: state.newProducts,
  };
}

export default connect(mapStateToProps)(NewProductList);
