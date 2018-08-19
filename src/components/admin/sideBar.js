import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const SideBarContent = props => (
  <Container>
    <Row id="sidebar-header">LF Commerce Admin</Row>
    <Row className="sidebar-link">Dashboard</Row>
    <Row className="sidebar-link">Customers</Row>
    <Row className="sidebar-link">Products</Row>
    <Row className="sidebar-link">Payments</Row>
    <Row className="sidebar-link">Reports</Row>
  </Container>
);

export default SideBarContent;
