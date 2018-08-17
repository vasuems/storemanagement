import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Navbar, Nav, NavbarBrand, NavItem, UncontrolledDropdown, NavLink,
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
              <NavItem><NavLink href="/categories/geeks">GEEKS</NavLink></NavItem>
              <NavItem><NavLink href="/categories/funny">FUNNY</NavLink></NavItem>
              <NavItem><NavLink href="/categories/kids">KIDS</NavLink></NavItem>
              <NavItem><NavLink href="/categories/pets">PETS</NavLink></NavItem>
            </Nav>
            <Nav className="ml-auto">
              <NavItem>
                <Input type="text" placeholder="Search product..." id="searchBar" />
              </NavItem>                         
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Nick Chen
                        <span className="glyphicon glyphicon-shopping-cart"></span><Badge className="badge-danger">3</Badge>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem><NavLink href="/account">My Account</NavLink></DropdownItem>
                        <DropdownItem><NavLink href="/cart">Cart <Badge className="badge-danger">3</Badge></NavLink></DropdownItem>
                        <DropdownItem><NavLink href="/logout">Log Out</NavLink></DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>   
            </Nav>
        </Navbar>
        <Row>
            <Col md={4}>
            </Col>
            <Col md={8}>
            
            </Col>
        </Row>
      </Container>
    );
  }
}

export default Navigation;