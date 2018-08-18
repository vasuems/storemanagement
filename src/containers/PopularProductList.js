import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Product from '../components/Product';

class PopularProductList extends Component {
  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    popularProducts: state.popularProductReducer.popularProducts,
  };
}

export default connect(mapStateToProps, null)(PopularProductList);
