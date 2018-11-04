import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  UncontrolledDropdown,
  NavLink,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  NavbarBrand,
  Container,
  NavItem,
  Badge,
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import {
  FaRegBell,
} from 'react-icons/fa';

class Navigation extends Component {
  render() {
    return (
      <div className="admin-navbar">
        <Container fluid>
          <Navbar light expand="md">
            <NavbarBrand href="/dashboard">LF Commerce</NavbarBrand>
            <Nav className="ml-auto">
              <NavItem>
                <NavLink href="#">
                  <FaRegBell size={18} />
                  <Badge color="danger">1</Badge>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>                
                <DropdownToggle nav caret>
                  Nick Chen
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink href="/dashboard">
                      <FormattedMessage id="sys.myAccount" />
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/logout">
                      <FormattedMessage id="sys.logout" />
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default Navigation;
