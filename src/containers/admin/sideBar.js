import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import { withRouter } from 'react-router-dom';
import SideBarContent from '../../components/admin/sideBar';
import Dashboard from './dashboard';
import CustomerList from './customerList';
import OrderList from './orderList';

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
        {(function(path) {
          switch (path) {
            case 'dashboard':
              return <Dashboard />;
            case 'customers':
              return <CustomerList />;
            case 'orders':
              return <OrderList />;
          }
        })(this.state.path)}
      </Sidebar>
    );
  }
}

export default withRouter(SideBar);
