import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Product from "./Product";
import sampleProducts from "../../samples/SampleProducts";

class ProductList extends Component {
  render() {
    return (
      <Container>
        <Row className="show-grid">
          {sampleProducts.map(product => (
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
        <Button bsStyle="primary" style={{ float: "right" }}>
          Checkout
        </Button>
      </Container>
    );
  }
}

export default ProductList;
