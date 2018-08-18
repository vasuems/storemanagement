import React, { Component } from 'react';
import { Container } from 'reactstrap';
import FeaturedProductList from '../containers/featuredProductList';
import NewProductList from '../containers/newProductList';

class Home extends Component {
  render() {
    return (
      <Container>
        <FeaturedProductList />
        <NewProductList />
      </Container>
    );
  }
}

export default Home;
