import React, { Component } from 'react';
import '../App.css';
import { Container } from 'reactstrap';
import PopularProductList from '../containers/PopularProductList';
import NewProductList from '../containers/NewProductList';

class Home extends Component {
  render() {
    return (
      <Container>
        <PopularProductList />
        <NewProductList />
      </Container>
    );
  }
}

export default Home;
