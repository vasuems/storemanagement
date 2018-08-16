import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Navbar, Nav, NavbarBrand, NavItem, UncontrolledDropdown,
    DropdownMenu, DropdownToggle, DropdownItem, Badge, Row, Col,
    Container, Input } from 'reactstrap';
import {
  Link
} from 'react-router-dom';
import Login from './Login';

class Navigation extends Component {
  constructor(props){
      super(props);
      this.state = {
        showLogin: true
      }
  }

  openLogin = (e, data)=>{
    this.setState({
      showLogin: !this.state.showLogin,
    })
  }

  render() {
    return (
      <Container>  
        <Navbar light expand="md">
          <NavbarBrand href="/">LFCommerce</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Input type="text" placeholder="Search products, design" />
              </NavItem>                         
                <Link to="/cart">
                <span className="navbar-text">                                
                    <span className="glyphicon glyphicon-shopping-cart"></span><Badge className="badge-danger">3</Badge>                                
                </span>
                </Link>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Nick Chen
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem eventKey={3.1} href="/account">My Account</DropdownItem>
                        <DropdownItem eventKey={3.2} href="/cart">Cart <Badge className="badge-danger">3</Badge></DropdownItem>
                        <DropdownItem eventKey={3.3}>Log Out</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>   
            </Nav>
        </Navbar>
        <Row>
            <Col md={4}>
            </Col>
            <Col md={8}>
            <Nav>
                <NavItem eventKey={1} href="/categories/geeks">GEEKS</NavItem>
                <NavItem eventKey={2} href="/categories/funny">FUNNY</NavItem>
                <NavItem eventKey={3} href="/categories/kids">KIDS</NavItem>
                <NavItem eventKey={4} href="/categories/pets">PETS</NavItem>
            </Nav>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default Navigation;