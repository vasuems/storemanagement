import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { fetchNewProducts } from '../actions';
import Product from '../components/Product';

class NewProductList extends Component {
  componentDidMount(){
    this.props.dispatch(fetchNewProducts());
  }
  
  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    newProducts: state.newProductReducer.newProducts,
  };
}

export default connect(mapStateToProps, null)(NewProductList);
