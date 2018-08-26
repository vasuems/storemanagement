import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from 'react-router-dom';
import Home from './containers/home';
import ProductDetail from './containers/productDetail';
import Cart from './containers/cart';
import Checkout from './containers/checkout';
import Account from './containers/account';
import ProductList from './containers/productList';
import AdminDashboard from './containers/admin/sideBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/categories/:id" component={ProductList} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
          <Route path="/account" component={Account} />
          <Route path="/checkout" component={Checkout} />
          <Route
            path="/admin"
            exact
            render={() => <Redirect to="/admin/#/dashboard" />}
            component={AdminDashboard}
          />
          <Route path="/admin/#/dashboard" component={AdminDashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
