import React from 'react';
import { Container } from 'reactstrap';
import Navigation from './navigation';
import Footer from '../components/footer';
import FeaturedProductList from './featuredProductList';
import NewProductList from './newProductList';

const Home = () => (
  <Container>
    <Navigation />
    <FeaturedProductList />
    <NewProductList />
    <Footer />
  </Container>
);

export default Home;
