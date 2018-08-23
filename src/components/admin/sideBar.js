import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const SideBarContent = props => (
  <Container>
    <Row id="sidebar-header">LF Commerce Admin</Row>
    <Row className="sidebar-link">
      <Button
        color="link"
        style={{ color: '#fff' }}
        onClick={() => {
          props.onPathChange('dashboard');
        }}
      >
        <FormattedMessage id="sys.dashboard" />
      </Button>
    </Row>    
    <Row className="sidebar-link">
      <Button
        color="link"
        style={{ color: '#fff' }}
        onClick={() => {
          props.onPathChange('orders');
        }}
      >
        <FormattedMessage id="sys.orders" />
      </Button>
    </Row>
    <Row className="sidebar-link">
      <Button
        color="link"
        style={{ color: '#fff' }}
        onClick={() => {
          props.onPathChange('categories');
        }}
      >
        <FormattedMessage id="sys.prodCats" />
      </Button>
    </Row>
    <Row className="sidebar-link">
      <Button
        color="link"
        style={{ color: '#fff' }}
        onClick={() => {
          props.onPathChange('products');
        }}
      >
        <FormattedMessage id="sys.products" />
      </Button>
    </Row>
    <Row className="sidebar-link">
      <Button
        color="link"
        style={{ color: '#fff' }}
        onClick={() => {
          props.onPathChange('customers');
        }}
      >
        <FormattedMessage id="sys.customers" />
      </Button>
    </Row>
    <Row className="sidebar-link">
      <Button
        color="link"
        style={{ color: '#fff' }}
        onClick={() => {
          props.onPathChange('payments');
        }}
      >
        <FormattedMessage id="sys.payments" />
      </Button>
    </Row>
    <Row className="sidebar-link">
      <Button
        color="link"
        style={{ color: '#fff' }}
        onClick={() => {
          props.onPathChange('reports');
        }}
      >
        <FormattedMessage id="sys.reports" />
      </Button>
    </Row>
  </Container>
);

export default SideBarContent;
