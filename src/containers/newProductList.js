import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { fetchNewProducts } from '../actions';
import Product from '../components/product';

class NewProductList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchNewProducts());
  }

  render() {
    const { newProducts } = this.props;
    return (
      <div>
        <Container>
          <div className="text-center headline">
            <FormattedMessage id="title.new" />
          </div>
          <Row className="show-grid">
            {newProducts.map(product => (
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newProducts: state.newProductReducer.newProducts,
  };
}

export default connect(
  mapStateToProps,
  null
)(NewProductList);
