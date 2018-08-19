import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import SideBarContent from '../../components/admin/sideBar';
import Dashboard from './dashboard';

class SideBar extends Component {
  render() {
    return (
      <Sidebar
        docked
        transitions={false}
        sidebar={<SideBarContent />}
        open
        styles={{ sidebar: sideBarStyle }}
      >
        <Dashboard />
      </Sidebar>
    );
  }
}

const sideBarStyle = {
  width: 200,
  padding: '20px 12px',
  background: '#0c3b6d',
  color: '#fff'
};
export default SideBar;
