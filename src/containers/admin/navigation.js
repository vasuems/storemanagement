import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Navbar,
  Nav,
  UncontrolledDropdown,
  NavLink,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  NavbarBrand,
  Container
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="admin-navbar">
        <Container fluid>
          <Navbar light expand="md" fixed>
            <NavbarBrand href="/admin/#/dashboard">LFCommerce</NavbarBrand>
            <Nav className="ml-auto">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Nick Chen
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink href="/admin">
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
