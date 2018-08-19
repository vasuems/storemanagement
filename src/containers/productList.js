import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import Navigation from './navigation';
import Footer from '../components/footer';
import Product from '../components/product';

class ProductList extends Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Row className="show-grid">
          {[].map(product => (
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
        <Button bsStyle="primary" style={{ float: 'right' }}>
          <FormattedMessage id="sys.checkout" />
        </Button>
        <Footer />
      </Container>
    );
  }
}

export default ProductList;
