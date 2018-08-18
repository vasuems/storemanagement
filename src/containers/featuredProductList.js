import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { fetchFeaturedProducts } from '../actions';
import Product from '../components/Product';

class FeaturedProductList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchFeaturedProducts());
  }

  render() {
    return (
      <Container>
        <div className="text-center headline">
                Popular
        </div>
        <Row className="show-grid">
          {this.props.featuredProducts.map(product => (
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
    featuredProducts: state.featuredProductReducer.featuredProducts,
  };
}

export default connect(mapStateToProps, null)(FeaturedProductList);
