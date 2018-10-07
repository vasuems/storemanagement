import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { fetchProducts } from '../actions';
import Navigation from './navigation';
import Footer from '../components/footer';
import Product from '../components/product';

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <Navigation />
        <Container className="padding-top-80">
          <Row className="show-grid">
            {products.map(product => (
              <Col key={product.productURL} md={3}>
                <Product
                  productName={product.productName}
                  productURL={product.productURL}
                  productImage={product.productImage}
                  productPrice={product.productPrice}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productReducer.products,
});

export default connect(
  mapStateToProps,
  null
)(ProductList);
