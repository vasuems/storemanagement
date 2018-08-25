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
  Input
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { FaShoppingCart, FaUser, FaSignOutAlt } from 'react-icons/fa';
import Login from './login';
import SignUp from './signUp';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true
    };
  }

  openLogin = (e, data) => {
    this.setState({
      showLogin: !this.state.showLogin
    });
  };

  render() {
    return (
      <div className="site-navbar">
        <Container fluid>
          <Navbar light expand="md">
            <NavbarBrand href="/">LFCommerce</NavbarBrand>
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
                    <NavLink href="/admin/#/dashboard">
                      <FaUser style={{ fontSize: 18 }} />
                      &nbsp;
                      <FormattedMessage id="sys.myAccount" />
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/cart">
                      <FaShoppingCart style={{ fontSize: 18 }} />
                      &nbsp;
                      <FormattedMessage id="sys.cart" />
                      &nbsp;
                      <Badge className="badge-danger">3</Badge>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/logout">
                      <FaSignOutAlt style={{ fontSize: 18 }} />
                      &nbsp;
                      <FormattedMessage id="sys.logout" />
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Navbar>
          <Login />
          <SignUp />
        </Container>
      </div>
    );
  }
}

export default Navigation;
