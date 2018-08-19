import React from "react";
import { Container } from "reactstrap";
import FeaturedProductList from "./featuredProductList";
import NewProductList from "./newProductList";

const Home = () => (
  <Container>
    <FeaturedProductList />
    <NewProductList />
  </Container>
);

export default Home;
