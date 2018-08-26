import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  UncontrolledDropdown,
  NavLink,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Badge,
  Container,
  Input,
  Collapse,
  NavbarToggler
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { FiUser, FiShoppingCart, FiLogOut } from 'react-icons/fi';
import Login from './login';
import SignUp from './signUp';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      showMenu: false
    };
  }

  openLogin = (e, data) => {
    this.setState({
      showLogin: !this.state.showLogin
    });
  };

  toggle = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  render() {
    return (
      <div className="site-navbar">
        <Container fluid>
          <Navbar light expand="md">
            <NavbarBrand href="/">LFCommerce</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.showMenu} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/categories/geeks">GEEKS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/categories/funny">FUNNY</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/categories/kids">KIDS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/categories/pets">PETS</NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto">
                <NavItem>
                  <Input
                    type="text"
                    placeholder="Search product..."
                    id="search-bar"
                  />
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Nick Chen&nbsp;
                    <span className="glyphicon glyphicon-shopping-cart" />
                    <Badge className="badge-danger">3</Badge>
                  </DropdownToggle>
                  <DropdownMenu left>
                    <DropdownItem>
                      <NavLink href="/account">
                        <FiUser className="nav-link-icon" />
                        &nbsp;&nbsp;
                        <FormattedMessage id="sys.myAccount" />
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/cart">
                        <FiShoppingCart className="nav-link-icon" />
                        &nbsp;&nbsp;
                        <FormattedMessage id="sys.cart" />
                        &nbsp;
                        <Badge className="badge-danger">3</Badge>
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/logout">
                        <FiLogOut className="nav-link-icon" />
                        &nbsp;&nbsp;
                        <FormattedMessage id="sys.logout" />
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <Login />
          <SignUp />
        </Container>
      </div>
    );
  }
}

export default Navigation;
