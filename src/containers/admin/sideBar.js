import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import SideBarContent from '../../components/admin/sideBar';
import Dashboard from './dashboard';
import CustomerList from './customerList';
import OrderList from './orderList';
import ProductList from './productList';
import Payment from './payment';
import ProductCategoryList from './productCategoryList';
import NavBar from './navigation';

const sideBarStyle = {
  width: 220,
  background: '#333',
  marginTop: 56
};

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: 'dashboard'
    };
  }

  componentDidMount() {
    window.onpopstate = (e) => {
      this.setState({
        path: e.state
      });
    }
  }

  onPathChange = path => {
    window.history.pushState(path, '', `/admin/#/${path}`);

    this.setState({
      path
    });
  }

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
                return <ProductCategoryList />;
            }
          })(this.state.path)}
        </Sidebar>
      </div>
    );
  }
}

export default SideBar;
