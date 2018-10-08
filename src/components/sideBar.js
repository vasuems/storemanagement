import React from 'react';
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
      <Button
        color="link"
        onClick={() => {
          props.onPathChange('home');
        }}
      >
        <FiHome className="sidebar-icon" />
        <FormattedMessage id="sys.dashboard" />
      </Button>
    </Row>
    <Row className="sidebar-link">
      <Button
        color="link"
        onClick={() => {
          props.onPathChange('orders');
        }}
      >
        <FiShoppingCart className="sidebar-icon" />
        <FormattedMessage id="sys.orders" />
      </Button>
    </Row>
    <Row className="sidebar-link">
      <Button
        color="link"
        onClick={() => {
          props.onPathChange('categories');
        }}
      >
        <FiGrid className="sidebar-icon" />
        <FormattedMessage id="sys.prodCats" />
      </Button>
    </Row>
    <Row className="sidebar-link">
      <Button
        color="link"
        onClick={() => {
          props.onPathChange('products');
        }}
      >
        <FiShoppingBag className="sidebar-icon" />
        <FormattedMessage id="sys.products" />
      </Button>
    </Row>
    <Row className="sidebar-link">
      <Button
        color="link"
        onClick={() => {
          props.onPathChange('customers');
        }}
      >
        <FiUsers className="sidebar-icon" />
        <FormattedMessage id="sys.customers" />
      </Button>
    </Row>
    <Row className="sidebar-link">
      <Button
        color="link"
        onClick={() => {
          props.onPathChange('payments');
        }}
      >
        <FiDollarSign className="sidebar-icon" />
        <FormattedMessage id="sys.payments" />
      </Button>
    </Row>
    <Row className="sidebar-link">
      <Button
        color="link"
        onClick={() => {
          props.onPathChange('reports');
        }}
      >
        <FiBarChart2 className="sidebar-icon" />
        <FormattedMessage id="sys.reports" />
      </Button>
    </Row>
    <Row className="sidebar-link">
      <Button
        color="link"
        onClick={() => {
          props.onPathChange('settings');
        }}
      >
        <FiBarChart2 className="sidebar-icon" />
        <FormattedMessage id="sys.settings" />
      </Button>
    </Row>
  </Container>
);

export default SideBarContent;
