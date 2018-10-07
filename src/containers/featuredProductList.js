import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { fetchFeaturedProducts } from '../actions';
import Product from '../components/product';

class FeaturedProductList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchFeaturedProducts());
  }

  render() {
    return (
      <div className="padding-top-80">
        <Container>
          <div className="text-center headline">
            <FormattedMessage id="title.featured" />
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
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    featuredProducts: state.featuredProductReducer.featuredProducts,
  };
}

export default connect(
  mapStateToProps,
  null
)(FeaturedProductList);
