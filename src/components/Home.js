import React, { Component } from 'react';
import '../App.css';
import { Grid, Row, Col } from 'reactstrap';
import PopularProductList from '../containers/PopularProductList';
import NewProductList from '../containers/NewProductList';

class Home extends Component {
  render() {
    return (
      <div style={{ marginTop: '30px' }}>
        <PopularProductList />
        <NewProductList />
      </div>
    );
  }
}

export default Home;
