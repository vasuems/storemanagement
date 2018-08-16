import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Navbar, Nav, NavbarBrand, NavItem, DropdownMenu,
    DropdownItem, Badge, Row, Col,
    FormGroup, Input } from 'reactstrap';
import {
  Link
} from 'react-router-dom';
import Login from './Login';

class Navigation extends Component {
  constructor(props){
      super(props);
      this.state = {
        showLogin: false
      }
  }

  openLogin = (e, data)=>{
    this.setState({
      showLogin: !this.state.showLogin,
    })
  }

  render() {
    return (
      <div>  
        <Navbar>
            <Row>
              <Col md={3}>
              </Col>
              <Col md={6}>
                <FormGroup className="inner-addon left-addon">
                    <i className="glyphicon glyphicon-search"></i>
                    <Input type="text" placeholder="Search products, design" />
                </FormGroup>
              </Col>
              <Col md={3}>                                
                <Link to="/cart">
                <span className="navbar-text">                                
                    <span className="glyphicon glyphicon-shopping-cart"></span><Badge className="badge-danger">3</Badge>                                
                </span>
                </Link>         
                <DropdownMenu eventKey={3} isOpen={false} title="Nicholas Chen" id="basic-nav-dropdown">
                <DropdownItem eventKey={3.1} href="/account">My Account</DropdownItem>
                <DropdownItem eventKey={3.2} href="/cart">Cart <Badge className="badge-danger">3</Badge></DropdownItem>
                <DropdownItem eventKey={3.3}>Log Out</DropdownItem>
                </DropdownMenu>                           
              </Col>
            </Row>        
            <Row>
              <Col md={4}>
                <NavbarBrand>
                    <Link to="/"><i className="fa fa-smile-o" aria-hidden="true"></i>&nbsp;
                    LF Commerce</Link>
                </NavbarBrand>
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
        </Navbar>
        <Login show={this.state.showLogin} />
      </div>
    );
  }
}

export default Navigation;