import React, { Component } from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Link,
} from 'react-router-dom';
import Home from './containers/Home';
import ProductDetail from './containers/ProductDetail';
import Cart from './containers/Cart';
import Navigation from './containers/Navigation';
import Footer from './components/Footer';
import ProductList from './containers/featuredProductList';
import AdminDashboard from './containers/admin/Dashboard';
import AdminProductList from './containers/admin/ProductList';
import AdminCustomerList from './containers/admin/CustomerList';
import AdminOrderList from './containers/admin/OrderList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/categories/:id" component={ProductList} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
          <Route
            path="/admin"
            render={() => (
              <Redirect to="/admin/dashboard" />
            )}
          />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route path="/admin/products" component={AdminProductList} />
          <Route path="/admin/orders" component={AdminOrderList} />
          <Route path="/admin/customers" component={AdminCustomerList} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
