import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import SideBarContent from '../components/sideBar';
import Dashboard from './dashboard';
import CustomerList from './customerList';
import OrderList from './orderList';
import ProductList from './productList';
import Payment from './payment';
import ProductCategoryList from './productCategoryList';
import Setting from './setting';
import NavBar from './navigation';

const sideBarStyle = {
  width: 220,
  background: '#333',
  marginTop: 56,
};

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: 'home',
    };
  }

  componentDidMount() {
    window.onpopstate = e => {
      this.setState({
        path: e.state,
      });
    };
  }

  onPathChange = path => {
    window.history.pushState(path, '', `/dashboard/#/${path}`);

    this.setState({
      path,
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Sidebar
          docked
          transitions={false}
          sidebar={<SideBarContent onPathChange={this.onPathChange} />}
          open
          styles={{ sidebar: sideBarStyle }}
        >
          {(path => {
            switch (true) {
              case /home/.test(path):
                return <Dashboard />;
              case /customers/.test(path):
                return <CustomerList />;
              case /orders/.test(path):
                return <OrderList />;
              case /products/.test(path):
                return <ProductList />;
              case /payments/.test(path):
                return <Payment />;
              case /categories/.test(path):
                return <ProductCategoryList />;
              case /settings/.test(path):
                return <Setting />;
            }
          })(this.state.path)}
        </Sidebar>
      </div>
    );
  }
}

export default SideBar;
