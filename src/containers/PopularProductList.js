import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'reactstrap';
import { addProduct } from '../actions';
import Product from '../components/Product';
import '../App.css';

class PopularProductList extends Component {
  render() {
    return (
      <div style={{ marginTop: '30px' }}>
        <div className="text-center headline">
                Popular
        </div>
        <Row className="show-grid">
          {this.props.popularProducts.map(product => (
            <Col
              onClick={() => this.props.addProduct(product)}
              key={product.productURL}
              md={3}
            >
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
    popularProducts: state.popularProducts,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addProduct }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularProductList);
