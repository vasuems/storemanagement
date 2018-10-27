import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import {
  FiUsers,
  FiShoppingCart,
  FiShoppingBag,
  FiBarChart2,
  FiGrid,
  FiDollarSign,
  FiHome,
} from 'react-icons/fi';

const SideBarContent = props => (
  <Container>
    <br />
    <Row className="sidebar-link">
      <Link to="/dashboard">
        <FiHome className="sidebar-icon" />
        <FormattedMessage id="sys.dashboard" />
      </Link>
    </Row>
    <Row className="sidebar-link">
      <Link to="/orders">
        <FiShoppingCart className="sidebar-icon" />
        <FormattedMessage id="sys.orders" />
      </Link>
    </Row>
    <Row className="sidebar-link">
      <Link to="/categories">
        <FiGrid className="sidebar-icon" />
        <FormattedMessage id="sys.prodCats" />
      </Link>
    </Row>
    <Row className="sidebar-link">
      <Link to="/products">
        <FiShoppingBag className="sidebar-icon" />
        <FormattedMessage id="sys.products" />
      </Link>
    </Row>
    <Row className="sidebar-link">
      <Link to="/customers">
        <FiUsers className="sidebar-icon" />
        <FormattedMessage id="sys.customers" />
      </Link>
    </Row>
    <Row className="sidebar-link">
      <Link to="/payments">
        <FiDollarSign className="sidebar-icon" />
        <FormattedMessage id="sys.payments" />
      </Link>
    </Row>
    <Row className="sidebar-link">
      <Link to="/reports">
        <FiBarChart2 className="sidebar-icon" />
        <FormattedMessage id="sys.reports" />
      </Link>
    </Row>
    <Row className="sidebar-link">
      <Link to="/settings">
        <FiBarChart2 className="sidebar-icon" />
        <FormattedMessage id="sys.settings" />
      </Link>
    </Row>
  </Container>
);

export default SideBarContent;
