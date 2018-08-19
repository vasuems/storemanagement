import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
import Home from './containers/home';
import ProductDetail from './containers/productDetail';
import Cart from './containers/cart';
import ProductList from './containers/productList';
import AdminDashboard from './containers/admin/sideBar';
import AdminProductList from './containers/admin/ProductList';
import AdminCustomerList from './containers/admin/CustomerList';
import AdminOrderList from './containers/admin/orderList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/categories/:id" component={ProductList} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
          <Route
            path="/admin"
            exact
            render={() => <Redirect to="/admin/dashboard" />}
          />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route path="/admin/products" component={AdminProductList} />
          <Route path="/admin/orders" component={AdminOrderList} />
          <Route path="/admin/customers" component={AdminCustomerList} />
        </div>
      </Router>
    );
  }
}

export default App;
