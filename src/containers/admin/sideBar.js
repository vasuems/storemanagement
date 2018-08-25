import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import SideBarContent from '../../components/admin/sideBar';
import Dashboard from './dashboard';
import CustomerList from './customerList';
import OrderList from './orderList';
import ProductList from './productList';
import Payment from './payment';
import ProductCategoryList from './productCategoryList';

const sideBarStyle = {
  width: 200,
  padding: '20px 12px',
  background: '#0c3b6d',
  color: '#fff'
};

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: 'dashboard'
    };
  }

  onPathChange = path => {
    window.history.pushState('page2', '', `/admin/#/${path}`);

    this.setState({
      path
    });
  };

  render() {
    return (
      <Sidebar
        docked
        transitions={false}
        sidebar={<SideBarContent onPathChange={this.onPathChange} />}
        open
        styles={{ sidebar: sideBarStyle }}
      >
        {((path) => {
          switch (true) {
            case /dashboard/.test(path):
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
              return <ProductCategoryList />
          }
        })(this.state.path)}
      </Sidebar>
    );
  }
}

export default SideBar;
